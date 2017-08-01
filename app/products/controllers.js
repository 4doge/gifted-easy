const config = require('config');

const Product = require('./models/product');
const ProductPhoto = require('./models/productPhoto');
const uploadS3 = require('../utils/uploadS3');


exports.newProduct = async function (ctx) {
    let thumbnailUrl = await uploadS3(config.aws.productsFolder, ctx.request.body.files.thumbnail.path);

    let photosUrls = [];
    for (let requestPhoto in ctx.request.body.files.images) {
        let uploadedUrl = await uploadS3(config.aws.productsFolder, ctx.request.body.files.images[requestPhoto].path);
        photosUrls.push(uploadedUrl);
    }

    let product = new Product({
        title: ctx.request.body.fields.title,
        description: ctx.request.body.fields.description,
        price: ctx.request.body.fields.price,
        category: ctx.request.body.fields.category,
        currency: ctx.request.body.fields.currency,
        thumbnail: thumbnailUrl
    });
    await product.save();

    for (let url in photosUrls) {
        let productPhoto = await ProductPhoto.create({
            url: photosUrls[url]
        });
        await Product.update({
            _id: product.id
        }, {
            $addToSet: {
                photos: productPhoto
            }
        });
    }

    ctx.body = {success: true};
};

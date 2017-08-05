const config = require('config');

const Product = require('./models/product');
const ProductPhoto = require('./models/productPhoto');
const ProductAttribute = require('./models/productAttribute');
const ProductAttributeValue = require('./models/productAttributeValue');
const uploadS3 = require('../utils/uploadS3');


exports.newProduct = async function (ctx) {
    let product = new Product({
        title: ctx.request.body.fields.title,
        description: ctx.request.body.fields.description,
        price: ctx.request.body.fields.price,
        category: ctx.request.body.fields.category,
        currency: ctx.request.body.fields.currency
    });
    await product.save();

    product.thumbnail = await uploadS3(config.aws.productsFolder, ctx.request.body.files.thumbnail.path);
    await product.save();

    let photosUrls = [];
    for (let requestPhoto in ctx.request.body.files.images) {
        if (ctx.request.body.files.images.hasOwnProperty(requestPhoto)) {
            let uploadedUrl = await uploadS3(config.aws.productsFolder, ctx.request.body.files.images[requestPhoto].path);
            photosUrls.push(uploadedUrl);
        }
    }

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

exports.attributes = async function (ctx) {
    let attrs = await ProductAttribute.find({
        category: ctx.params.category
    }).select('attribute').populate({
        path: 'values',
        select: 'value'
    });
    ctx.body = {attributes: attrs};
};

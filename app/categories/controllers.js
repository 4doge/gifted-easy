const Category = require('./models/category');


exports.categories = async function(ctx) {
    let categories = await Category.find().select('title _id');
    ctx.body = {categories: categories};
};

exports.newCategory = async function(ctx) {
    let category = new Category({
        title: ctx.request.body.title
    });
    await category.save();
    ctx.body = {
        category: {
            _id: category._id,
            title: category.title
        }
    };
};

exports.deleteCategory = async function(ctx) {
    let category = await Category.findById(ctx.request.body.id);
    await category.remove();
    ctx.body = {success: true};
};

exports.putCategory = async function(ctx) {
    let category = await Category.findById(ctx.request.body.id);
    category.title = ctx.request.body.title;
    await category.save();
    ctx.body = {success: true};
};

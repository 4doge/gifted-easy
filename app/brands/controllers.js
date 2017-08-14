const Brand = require('./models/brand');


exports.brands = async function(ctx) {
    let brands = await Brand.find().select('title');
    ctx.body = {brands: brands};
};

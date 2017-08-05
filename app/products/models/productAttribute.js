const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const productAttributeSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    attribute: {
        type: String,
        required: true,
        unique: '`{VALUE}` is already exist!'
    }
});

productAttributeSchema.virtual('values', {
    ref: 'ProductAttributeValue',
    localField: '_id',
    foreignField: 'attribute',
});

productAttributeSchema.set('toObject', { virtuals: true });
productAttributeSchema.set('toJSON', { virtuals: true });

productAttributeSchema.plugin(beautifyUnique);


module.exports = mongoose.model('ProductAttribute', productAttributeSchema);

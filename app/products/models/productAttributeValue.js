const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const productAttributeValueSchema = new mongoose.Schema({
    attribute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductAttribute',
        required: true
    },
    value: {
        type: String,
        required: true,
        unique: '`{VALUE}` is already exist!'
    }
});

productAttributeValueSchema.plugin(beautifyUnique);


module.exports = mongoose.model('ProductAttributeValue', productAttributeValueSchema);

const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const config = require('config');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: '`{VALUE}` is already exist!'
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    currency: {
        type: String,
        enum: {
            values: config.availableCurrencies,
            message: 'Invalid currency!'
        },
        required: true
    },
    thumbnail: {
        type: String
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductPhoto'
    }]
}, {
    timestamps: true
});

productSchema.plugin(beautifyUnique);


module.exports = mongoose.model('Product', productSchema);

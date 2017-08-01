const mongoose = require('mongoose');


const productPhotoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('ProductPhoto', productPhotoSchema);

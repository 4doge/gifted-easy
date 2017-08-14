const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const brandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: '`{VALUE}` is already exist!'
    }
}, {
    timestamps: true
});

brandSchema.plugin(beautifyUnique);


module.exports = mongoose.model('Brand', brandSchema);

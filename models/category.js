const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: '`{VALUE}` is already exist!'
    }
}, {
    timestamps: true
});

categorySchema.plugin(beautifyUnique);

module.exports = mongoose.model('Category', categorySchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{type: String, required: true },
    email:{type: String, required: true },

    subject: { type: String, required: true },
    type:{type: String, required: true },
    message:{ type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }


});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FeedBack', schema,'feedback');

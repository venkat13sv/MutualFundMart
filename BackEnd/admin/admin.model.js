const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    aname: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    hash:{ type: String, required: true }


});
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Admin', schema);

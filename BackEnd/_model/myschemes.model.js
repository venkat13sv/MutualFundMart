const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId:{type: String, unique: true, required: true },
    email:{type: String, unique: true, required: true },
    sname: { type: String, unique: true, required: true },
    cname: { type: String, required: true },
    category:{type:String, required:true},
    iamount: { type: String, required: true },
    description: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    paymentDone:{ type: Boolean,default:true}

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('MyScheme', schema,'myschemes');

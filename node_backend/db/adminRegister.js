const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name:{type:String,required: true},
    phone:{type:Number, required: true},
    email:{type:String,unique: true},
    password:{type:String,required: true},
    created_at:{type:Date,default:Date.now()}
});
module.exports = mongoose.model('admin',adminSchema);

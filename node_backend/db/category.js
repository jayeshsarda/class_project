const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    cname:{type: String, unique:true},
    image:{type: String, required:true},
    description:{type: String},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});
module.exports = mongoose.model('category', categorySchema);

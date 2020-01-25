const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    pname:{type: String, unique:true},
    category_id:{type: String},
    image:{type: String, required:true},
    regular_price:{type: Number},
    sale_price:{type: Number},
    description:{type: String},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});
module.exports = mongoose.model('product', productSchema);

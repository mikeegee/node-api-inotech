var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var ObjectId = Schema.ObjectId;

var brandSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    imageUrl:{
        type: String
    },
    products:[{
        type:ObjectId,
        ref: 'Product'
    }]
});

var Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;

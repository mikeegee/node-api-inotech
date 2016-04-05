var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var ObjectId = Schema.ObjectId;

var categorySchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    products:[{
        type:ObjectId,
        ref: 'Product'
    }]
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;

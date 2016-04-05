var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var productSchema = new Schema({
    name:String,
    description:String,
    featured:{
        type: Boolean,
        default: false
    },
    category:{
        type:ObjectId,
        ref:'Category'
    },
    brand:{
        type:ObjectId,
        ref:'Brand'
    },
    features:[{
      name : String,
      description : String
    }],
    specifications:[{
        name: String,
        description: String
    }],
    created: {
        type: Date,
        default: Date.now
    }});

    var Product = mongoose.model('Product', productSchema);
    module.exports = Product;

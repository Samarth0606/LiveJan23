const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    } , 
    img:{
        type:String,
        trim:true
    } ,
    price: {
        type:Number,
        min:0,
        required:true
    } ,
    desc: {
        type:String,
        trim:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})
let Product = mongoose.model('Product' , productSchema);
module.exports = Product;
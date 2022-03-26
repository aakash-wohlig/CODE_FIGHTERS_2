const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    createdBy:{
        type:String,
        required:true,
    }
});

module.exports= mongoose.model('Product',ProductSchema);
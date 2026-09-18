const mongoose=require('mongoose');
const {Schema}=mongoose;

const urlSchema=new Schema({
    originalUrl:{
        type:String,
        required:true,
    },
    shortCode:{
        type:String,
        required:true,
        unique:true,
    },
    clicks:{
        type:Number,
        default:0,
    }
},{timestamps:true});

const url=mongoose.model("Url",urlSchema);
module.exports=url;
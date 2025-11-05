const mongoose =require("mongoose")

const postSchema= new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    }
})

module.exports=mongoose.model("post",postSchema);
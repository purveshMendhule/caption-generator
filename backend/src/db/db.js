const mongoose = require("mongoose");

async function connectDB  () {
   await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("successfully connected to db")
    })
    .catch((err)=>{
        console.error(err)
    })
}
module.exports=connectDB;
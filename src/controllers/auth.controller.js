const userModel=require("../models/user.model")
const jwt=require('jsonwebtoken')

async function registerController (req,res){
    const {username,password}=req.body;
    const isUserExists= await userModel.findOne(username)

    if(isUserExists){
        return res.json({
           message:"user already exists"
        })
    }

    const user=await userModel.create({
        username,
        password
    })
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message:"user registered successfully",
        user:{

            username:user.username,
            password:user.password ,
            id:user._id
        }
    })
}

async function loginController (req,res){
    const {username,password}=req.body;
    const user= await userModel.findOne(username)

    if(!user){
       
    }
}
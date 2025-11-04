const jwt =require("jsonwebtoken");
const userModel=require("../models/user.model")

async function authMiddleware (req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized access, please login in "
        })
    }
    

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user= await userModel.findOne({_id:decoded._id})
        req.user=user
        next()

    }catch(err){
        return res.status(401).json({
            message:"token is invalid,please login again"
        })
    }
}
module.exports=authMiddleware;
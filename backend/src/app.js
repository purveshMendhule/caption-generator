const express =require ("express");
const authRoutes=require("./routes/auth.route")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const postRoutes =require("./routes/post.route")

const app=express();

app.use(express.json())
app.use(cookieParser())
app.use(cors());


app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)


module.exports=app;
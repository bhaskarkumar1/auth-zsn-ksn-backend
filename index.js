const express=require("express")
const app=express()
const userRoute=require("./routes/userRoutes")

require("./config/dbConfig")
const authRoute=require("./routes/authRoutes")

const verifyToken=require("./middleware/authMiddleWare")



const port=process.env.PORT||7000

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("home /")
})


app.use("/user",verifyToken,userRoute)

app.use("/auth",authRoute)


app.listen(port,()=>{
    console.log("Server has been started on port",port)
})
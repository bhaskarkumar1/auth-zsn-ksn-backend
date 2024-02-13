const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()


// 'mongodb://127.0.0.1:27017/jwt_auth_zsn_csn'
mongoose.connect(process.env.MONGO_URL).then((result)=>{
    console.log("connection to Db established Successfully")
}).catch((error)=>{
    console.log("error connecting to Db")

})

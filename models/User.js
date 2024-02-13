const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    }


})



// buid a model using schema 
const User = mongoose.model('User', userSchema);

module.exports=User


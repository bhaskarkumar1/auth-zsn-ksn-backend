const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const token=req.header("Authorization")

if (token){
    const decoded = jwt.verify(token, 'super-secret-key#9060');
    if(decoded){
        next()
    }else{
        res.status(403).json({"message":"invalid token"})
    }
}else{
    res.send("please provide the token")
}

  


}


module.exports=verifyToken
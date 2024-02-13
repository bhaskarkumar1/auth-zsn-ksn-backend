const Admin=require("../models/Admin")
const jwt = require('jsonwebtoken');


const login=(req,res)=>{
   
    // console.log(req.body)


    Admin.findOne(req.body).then((result)=>{
        // res.send(result)
        // generate a token 


        const token = jwt.sign({id:result._id}, 'super-secret-key#9060', {expiresIn: '1h'})
        res.json({"token":token})

    }).catch((error)=>{
        res.send("authentication failed!")
    })
}

const register=(req,res)=>{
    // res.send("resister admin")
    console.log(req.body)
    const newMember=new Admin(req.body)
    newMember.save().then((result)=>{
        res.status(200).send("new admin added to record")
    }).catch((error)=>{
        res.status(500).send("error creating the new admin")
    })


}

module.exports={
    login,
    register
}
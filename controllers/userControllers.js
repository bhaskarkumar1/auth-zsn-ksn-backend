const User=require("../models/User")

const getAllUsers=(req,res)=>{
    // res.send("user get  /")
    User.find({}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        res.status(500).json({"error":error})
    })
}

const createAUser=(req,res)=>{
    console.log(req.body)
    const newObj= new User(req.body)
    newObj.save().then((result)=>{
        res.status(200).send("data has been saved successfully")
    }).catch((error)=>{
        res.status(500).send("data has been saved successfully")


    })

    
}



module.exports={
    getAllUsers,
    createAUser
}
const fs = require("node:fs")
const jwt = require("jsonwebtoken")

const SECRET_KEY = "string"

const validateInput = (req,res,next)=>{
    const {name, login,  password} = req.body
    if(!login.includes("@")){
        return res.status(400).json({message:"Invalid email"})
    }if(!name){
        return res.status(400).json({message:"Name is required"})
    }if(!password){
        return res.status(400).json({message:"Password is required"})
    }
    const newUser = {
        id: Date.now(),
        name,
        login,
        password
    }
    req.user=newUser
    next()
}

const verifyToken = (req,res,next)=>{
    const headers = req.headers.authorization

    if(!headers){
        return res.status(400).json({message: "Token is required"})
    }
    const token = headers.split(" ")[1]

    jwt.verify(token, SECRET_KEY, (err, userData)=>{
        if(err){
            return res.status(400).json({message: "invalid token"})
        }
        req.userData = userData
        next()
    })
}

module.exports={validateInput, verifyToken}
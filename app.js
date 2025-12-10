const express = require("express")
const PORT = 3000
const app = express()
const {validateInput, verifyToken} = require("./middleware")
const fs = require("node:fs")
const jwt = require("jsonwebtoken");
app.use(express.json())

const SECRET_KEY = "string"

app.post("/users", validateInput, (req,res)=>{
    const user = req.user
    if(!user){
      return res.status(500).json({message: "Internal server error"})
    }
    const data = fs.readFileSync("users.json", {encoding:"utf-8"})
    const users = JSON.parse(data)
    users.push(user)
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2))
    res.status(200).json({message: "User created successfully"})
})

app.post("/login",(req,res)=>{
    const {login, password} = req.body
    
    const data = fs.readFileSync("users.json", "utf-8")
    const users = JSON.parse(data)
    const user = users.find(u=>u.login === login && u.password===password)

    if(!user){
        return res.status(400).json({message:"Invalid info"})
    }

    const token = jwt.sign({id:user.id, login:user.login},SECRET_KEY, {expiresIn: "1h"})
    res.status(200).json({message:"Login successful",  token})
})

app.post("/books", verifyToken, (req,res)=>{
    const {name, author} = req.body
    if(!name || !author){
        return res.status(400).json({message:"fields are required"})
    }
    const data = fs.readFileSync("books.json", "utf-8")
    const books = JSON.parse(data)

    const newBook = {
        id: Date.now(),
        name,
        author,
        userId: req.userData.id
    }
    books.push(newBook)
    fs.writeFileSync("books.json", JSON.stringify(books,null,2))
    res.status(200).json({message:"book created successfully"})
})


app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})
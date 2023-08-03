const express = require('express')
const app = express()
const port = 4000


const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/users')

// Middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// Connect to database
const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log("Connection Established")
})

app.post('/login', (req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            if (req.body.password === userData.password) {
                res.send({message:'LogIn Successfull', status:200})
            } else {
                res.send({message:'Please enter your valid password'})
            }
        } else{
            res.send({message:'USer not found'})
        }
    })
})

app.post('/register',async (req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            // error message
            res.send({message:'User already exists'})
        }
        else{
            // add the data
            let userData= new User ({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password: req.body.password
            })
            userData.save().then (()=>{
                res.send({message:'User registered successfully'})
            }).catch(()=>{
                res.send({message:'user registration failed. Try after sometime.'})
            })
        }
    })
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})
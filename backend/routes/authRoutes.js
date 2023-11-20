// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key
const prisma=require("../prisma/prismaClient")

const {hashVerifier,hashGenerator}=require("../hashHelper/hash")

router.post('/signin', async (req, res) => {
    let {email,password}=req.body
    try{
        let user=await prisma.user.findFirst({where:{email:req.body.email}})
        if(user){
            //verify the user here
            console.log(user)
            let dbPassword=user.password
            let verifiedstatus=hashVerifier(password,dbPassword)
            if(verifiedstatus && email===user.email ){
                res.json({message:"success"})
            }else{
                res.json({message:"invalid credentials"})
            }
        }else{
            res.json({message:"user doesnt exist"})
        }
    }catch(error){
        console.log("error")
        res.json({message:"internal server error occured"})
    }
});

router.post('/signup', async (req, res) => {
    let {username,email,name}=req.body

    try{
        let user=await prisma.user.findFirst({where:{email:req.body.email}})
        console.log("the user is ",user)
        if(user){
            res.json({message:"user with email already exists"})
        }else{
            //creating the user here
            let password=hashGenerator(req.body.password)
            console.log(password)
            await prisma.user.create({
                data:{
                    username,email,name,password
                }
            })
            res.json({message:"success"})
        }

    }catch(error){
        console.log(error)
        res.json({message:"internal server error"})
    }
});


module.exports = router;

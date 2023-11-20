// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key
const prisma=require("../prisma/prismaClient")


router.post("/submit",async (req,res)=>{
    let request=req.body
    let email=req.body.currentusermail
    try{
        let user=await prisma.user.findFirst({where:{email:email}})
        //in future do check if user is present 
        console.log(user)
        let userId=user.id
        request.userId=userId
        
        //we have to delete current user mail from request
        delete request.currentusermail
        console.log(request)
        //we have added data to db here
        await prisma.survey.create({
            data:request
        })
        res.json({message:"success"})


    }catch(error){
        console.log(error)
        res.json({message:"internal server error"})
    }

})
router.get("/allforms",async (req,res)=>{
    try{
        let form=await prisma.survey.findMany()
        res.json({message:"success",form:form})
    }catch(error){
        console.log(error)
        res.json({message:"internal server error occured"})
    }
})


module.exports = router;

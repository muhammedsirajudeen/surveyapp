// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key
const prisma=require("../prisma/prismaClient")
const nodemailer = require('nodemailer');


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

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'muhammedsirajudeen29@gmail.com',
                pass: 'eilq xprp yolv yjrv',
            },
        });
        
        // Setup email data
        const mailOptions = {
            from: 'muhammedsirajudeen29@gmail.com',
            to: 'muhammedsirajudeen.formal@gmail.com',
            subject: 'FORM SUBMITTED',
            text: JSON.stringify(request),
        };
        
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error:', error);
            }
            console.log('Message sent:', info.response);
        });
        
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

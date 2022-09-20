const express = require('express')
const router = express.Router();
const validation = require('./validations/userValidation')
const {body,validationResult} = require('express-validator')
const User = require('../Models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/default').app
const jwtsecret = config.jwtsecret

router.post('/createUser',validation,async (req,res)=>{

    const {firstName,lastName,email,password,gender} = req.body;
    let success = false;
   let user = await User.findOne({email});
   if(user){
     return res.status(400).json({success,error:"User with this email already exists"})
   }
   try {
    const salt = bcrypt.genSaltSync(10);
   const secPwd = bcrypt.hashSync(password,salt);
   user = await User.create({
    firstName,
    lastName,
    email,
    gender,
    password:secPwd,
   });
   const payload = {
    user:{
        id: user.id,
    }
   }
   const authToken = jwt.sign(payload,jwtsecret);
   success=true;
   return res.status(200).json({success,authToken,error:""})
   } catch (error) {
    console.error(error.message)
    return res.status(500).send("Internal server Error occured")
   }
});


router.post("/login",[
    body('email',"Please enter correct email").isEmail(),
    body("password","password should not be empty").isEmpty()
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    const {email,password} = req.body;
    try {
       let user = await User.findOne({email});
       if(!user){
        return res.status(400).json({
            success,error:"Please try to login with correct credentials"
        })}
        const pwdCompare = bcrypt.compareSync(password,user.password);
        if(!pwdCompare){
            return res.status(400).json({
                success, error:"please try to login with correct credentials"
            });

        }
        const payload ={
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(payload,jwtsecret);
        success=true;
        return res.status(200).json({success,authToken})
       
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }


})

router.use((err,req,res,next)=>{
    if(err instanceof ValidationError){
        return res.status(err.statusCode).json(err.message)
    }
    return res.status(500).json(err)
})
module.exports = router
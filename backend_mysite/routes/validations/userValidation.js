const Joi = require('joi')

const schema = {
    body:Joi.object({
            firstName: Joi.string().min(3).max(30).required(),
            lastName:Joi.string().min(3).max(30).required(),
            password:Joi.string().min(5).max(16).required(),
            confirmPassword:Joi.string().min(5).max(16).required(),
            email: Joi.string().email({minDomainSegments:2, tlds:{allow:['com','net']}}),
            gender:Joi.string().required()
        })
}

function validation(req,res,next){
    const {error} = schema.body.validate(req.body);
    if(error){
        res.status(422).json({success:false,error:"invalid data"})
    }
    else{
        next();
    }
}

module.exports=validation
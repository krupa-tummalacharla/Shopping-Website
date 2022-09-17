const Joi = require('joi')

const schema = {
    body:Joi.object({
            firstName: Joi.string().min(3).max(30).required(),
            lastName:Joi.string().min(3).max(30).required(),
            password:Joi.string().min(5).max(16).required(),
            email: Joi.string().email({minDomainSegments:2, tlds:{allow:['com','net']}}),
            gender:Joi.string().required()
        })
}

module.exports=schema
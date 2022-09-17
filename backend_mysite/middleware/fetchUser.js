const jwt = require('jsonwebtoken')
const config = require('../config/default').app

const fetchUser = async function(req,res,next){
 try {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Unauthorized user"})
    }
    let data = jwt.verify(token,config.jwtsecret);
    req.user = data.user;
    next();
 } catch (error) {
    res.status(401).send({error:"Unauthorized user"})
 }

}

module.exports=fetchUser;
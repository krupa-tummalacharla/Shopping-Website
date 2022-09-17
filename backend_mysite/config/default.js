module.exports =  {
    app:{
        port: process.env.PORT,
        mongoUrl: process.env.MONGOURL,
        jwtsecret:process.env.JWTSECRET
    }
}
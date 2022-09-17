const mongoose = require('mongoose');
const mongoUrl = require('../config/default').app.mongoUrl
const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("connected to mongodb successfully")
    })
}

module.exports = connectToMongo;
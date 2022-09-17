const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const authRoute = require('./routes/authRoute')
const cartRoute= require('./routes/cartRoute')
const wishlistRoute = require('./routes/wishlistRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use("/auth",authRoute);
app.use('/cart',cartRoute)
app.use('/wishlist',wishlistRoute)


module.exports=app


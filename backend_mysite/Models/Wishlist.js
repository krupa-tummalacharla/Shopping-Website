const mongoose = require('mongoose')
const {Schema} = mongoose

const CartSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        red:"user"
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('wishlist',CartSchema)
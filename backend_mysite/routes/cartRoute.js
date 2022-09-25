const express = require('express')
const router = express.Router();
const Cart = require('../Models/Cart')
const fetchUser = require('../middleware/fetchUser')

router.put('/addtocart',fetchUser,async(req,res)=>{

    try {
        const {id,title,price,category,description,image,quantity} = req.body;
        let cart = await Cart.findOne({id,user:req.user.id});
        if(!cart){
            cart = new Cart({
                id,
                user:req.user.id,
                title,
                price,
                category,
                description,
                image,
                quantity
            });
            let savedCart = await cart.save();
            res.status(200).json({success:true,savedCart,firstItem:true})
        }
        else{
            const id=cart._id;
            
            cart = await Cart.findByIdAndUpdate(
                {_id:id},
                {quantity:cart.quantity+(req.body.quantity?req.body.quantity:1)},
                {new:true}
            );
            return res.status(200).json({success:true,savedCart:cart,firstItem:false})
        }
       
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }

})

router.get('/getAllCarts',fetchUser,async(req,res)=>{
    try {
        const allCarts = await Cart.find({user:req.user.id});
        res.status(200).json({allCarts})
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }
})


router.delete('/deleteCartItem/:id',fetchUser,async(req,res)=>{
    try {
        console.log(req.params.id)
        let cart = await Cart.findOne({_id:req.params.id});
        if(cart){
            let removed = await Cart.findByIdAndDelete(req.params.id)
            if(removed){
                return res.status(200).json({success:true,cart:removed,message:"removed successfully"})
            }
            else{
                return res.status(400).json({success:false,message:"some error occured"});
            }
            
        }
        else{
            return res.status(400).json({success:false,message:"item not found"});
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }
})

module.exports=router
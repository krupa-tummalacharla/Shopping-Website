const express = require('express')
const router = express.Router();

const WishList = require('../Models/Wishlist')
const fetchUser = require('../middleware/fetchUser');
const Wishlist = require('../Models/Wishlist');

router.put('/addtowishlist',fetchUser,async(req,res)=>{

    try {
        const {id,title,price,category,description,image,quantity} = req.body;
        let wishlist = await Wishlist.findOne({id,user:req.user.id});
        if(!wishlist){
            wishlist = new WishList({
                id,
                user:req.user.id,
                title,
                price,
                category,
                description,
                image,
                quantity
            });
            let savedWishlist = await wishlist.save();
            res.status(200).json({success:true,savedWishlist,firstItem:true})
        }
        else{
            return res.status(400).json({success:false,error:"error while adding item"});
        }
       
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }

})

router.get('/getAllWishlists',fetchUser,async(req,res)=>{
    try {
        const allWishlists = await WishList.find({user:req.user.id});
        res.status(200).json({allWishlists})
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }
})

router.delete('/deleteWishlist/:id',fetchUser,async(req,res)=>{
    try {
        
        let wishlist = await Wishlist.findOne({_id:req.params.id});
        if(wishlist.user.toString()!==req.user.id){
            return res.status(401).json({success:false,message:"user not allowed to delete"})
        }
        if(wishlist){
            let removed = await WishList.findByIdAndDelete(req.params.id)
            if(removed){
                return res.status(200).json({success:true,wishlist:removed,message:"removed successfully"})
            }
            else{
                return res.status(400).json({success:false,message:"some error occured"});
            }
            
        }
        else{
            return res.status(404).json({success:false,message:"item not found"});
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:"Internal Server Error"})
    }
})

module.exports=router
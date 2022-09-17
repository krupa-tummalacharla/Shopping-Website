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
            const id = wishlist._id;
            wishlist = await wishlist.findByIdAndUpdate(
                {_id:id},
                {quantity:wishlist.quantity+1},
                {new:true}
            );
            return res.status(200).json({success:true,savedWishlist:wishlist,firstItem:false})
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

module.exports=router
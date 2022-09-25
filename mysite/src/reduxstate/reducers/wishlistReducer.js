import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    addedWishlist:[],
    getWishlist:[]
}

export const addToWishlistAsync = createAsyncThunk('addtowishlist',async(input)=>{
    const res = await axios({
        method:"put",
        url:`${config.app.backend}/wishlist/addtowishlist`,
        headers:{
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem("token"),
        },
        data:JSON.stringify({
            id:input.id,
            category:input.category,
            description:input.description,
            title:input.title,
            image:input.image,
            price:input.price,
            
        })
    })
    return res.data;
})

export const getAllWishlistAsync = createAsyncThunk('getallwishlist',async()=>{
    const res = await axios({
        method:"Get",
        url:`${config.app.backend}/wishlist/getAllWishlists`,
        headers:{
          "Content-Type":"application",
          "auth-token":localStorage.getItem("token")
        }
    });
    return res.data.allWishlists;
})

export const deleteWishlistAsync = createAsyncThunk('deleteitem',async(input)=>{
    const res = await axios({
        method:"delete",
        url:`${config.app.backend}/wishlist/deleteWishlist/${input._id}`,
        headers:{
            "Content-Type":"application",
          "auth-token":localStorage.getItem("token")
        },
    })

    return res.data.wishlist;
})

const addToWishlistSlice = createSlice({
    name:"addToWishlistReducer",
    initialState,
    reducers:{

    },
    extraReducers:{
        [addToWishlistAsync.fulfilled]:(state,{payload})=>{
             state.addedWishlist.push(payload);
        },
        [getAllWishlistAsync.fulfilled]:(state,{payload})=>{
            return {...state,getWishlist:payload}
        },
        [deleteWishlistAsync.fulfilled]:(state,{payload})=>{
            let arr = JSON.parse(JSON.stringify(current(state.getWishlist)));
            const newWishlist = arr.filter(ele=>ele._id!==payload._id);
            return {...state, getWishlist:newWishlist};
        }
    }
})

export default addToWishlistSlice.reducer;
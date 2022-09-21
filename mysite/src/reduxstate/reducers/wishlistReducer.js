import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
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
            image:input.imageUrl,
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

const addToWishlistSlice = createSlice({
    name:"addToWishlistReducer",
    initialState,
    reducers:{

    },
    extraReducers:{
        [addToWishlistAsync.fulfilled]:(state,{payload})=>{
            return state.addedWishlist.push(payload);
        },
        [getAllWishlistAsync.fulfilled]:(state,{payload})=>{
            return {...state,getWishlist:payload}
        }
    }
})

export default addToWishlistSlice.reducer;
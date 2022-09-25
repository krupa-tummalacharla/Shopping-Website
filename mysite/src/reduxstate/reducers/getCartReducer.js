import {createSlice,createAsyncThunk, current} from '@reduxjs/toolkit'
import config from '../../config/default'
import axios from "axios";

const initialState ={
    userCart:[]
}

export const getAllCartsAsync = createAsyncThunk('getallcarts',async()=>{
    const res = await axios({
        method:"Get",
        url:`${config.app.backend}/cart/getAllCarts`,
        headers:{
          "Content-Type":"application",
          "auth-token":localStorage.getItem("token")
        }
    });
    return res.data.allCarts;
})

export const deleteCartItemAsync = createAsyncThunk('deleteItem',async(input)=>{
    const res = await axios({
        method:"delete",
        url:`${config.app.backend}/cart/deleteCartItem/${input._id}`,
        headers:{
            "Content-Type":"application",
            "auth-token":localStorage.getItem("token")
        }
    })
    return res.data.cart;
})

const getAllCartSlice = createSlice({
    name:"getallcartReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllCartsAsync.fulfilled]:(state,{payload})=>{
            return {...state,userCart:payload};
        },
        [deleteCartItemAsync.fulfilled]:(state,{payload})=>{
            let arr = JSON.parse(JSON.stringify(current(state.userCart)));
            const newCart = arr.filter(ele=>ele._id!==payload._id);
            return {...state, userCart:newCart};
        }
    }
})

export default getAllCartSlice.reducer;

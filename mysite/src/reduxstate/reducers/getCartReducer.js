import {createSlice,createAsyncThunk, current} from '@reduxjs/toolkit'
import config from '../../config/default'
import axios from "axios";

const initialState ={
    userCart:[],
    cartTotal:0,
    cartQuantity:0
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
    reducers:{
    },
    extraReducers:{
        [getAllCartsAsync.fulfilled]:(state,{payload})=>{
            return {...state,userCart:payload,cartTotal:payload.reduce((acc,ele)=>acc+=ele.price,0)};
        },
        [deleteCartItemAsync.fulfilled]:(state,{payload})=>{
            let arr = JSON.parse(JSON.stringify(current(state.userCart)));
            const newCart = arr.filter(ele=>ele._id!==payload._id);
            return {...state, userCart:newCart,cartTotal:state.cartTotal-payload.price};
        }
    }
})
export const {calcTotal}=getAllCartSlice.actions
export default getAllCartSlice.reducer;

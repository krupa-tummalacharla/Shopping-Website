import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    cart:[]
}

export const addToCartAsync = createAsyncThunk('addtocart',async(input)=>{
    const res = await axios({
        method:"put",
        url:`${config.app.backend}/cart/addtocart`,
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
            quantity:(input.quantity?input.quantity:1)
        })
    })
    return res.data;
})

const addToCartSlice = createSlice({
    name:"addToCartReducer",
    initialState,
    reducers:{

    },
    extraReducers:{
        [addToCartAsync.fulfilled]:(state,{payload})=>{
            return state.cart.push(payload);
        }
    }
})

export default addToCartSlice.reducer;
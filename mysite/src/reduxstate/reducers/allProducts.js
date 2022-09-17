import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    allProducts:[],
}

export const allProductsAsync = createAsyncThunk("getAllProducts",async()=>{
    const res = await axios.get(config.app.GetAllProducts)
       return res.data;
})

const allProductsSlice = createSlice({
    name:"allProductsReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [allProductsAsync.fulfilled]:(state,{payload})=>{
            return {...state,allProducts:payload}
        }
    }
})

export default allProductsSlice.reducer;
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    womenProducts:[],
}

export const womenProductsAsync = createAsyncThunk("getWomenClothes",async()=>{
    try {
        const res = await axios.get(config.app.womenProducts)
       return res.data;
    } catch (error) {
        console.error(error.message);
    }
    
})

const womenProductsSlice = createSlice({
    name:"womenProductsReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [womenProductsAsync.fulfilled]:(state,{payload})=>{
            return {...state,womenProducts:payload}
        }
    }
})

export default womenProductsSlice.reducer;
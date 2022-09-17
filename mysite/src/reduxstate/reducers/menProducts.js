import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    menProducts:[],
}

export const menProductsAsync = createAsyncThunk("getMenClothes",async()=>{
    const res = await axios.get(config.app.menProducts)
       return res.data;
})

const menProductsSlice = createSlice({
    name:"menProductsReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [menProductsAsync.fulfilled]:(state,{payload})=>{
            return {...state,menProducts:payload}
        }
    }
})

export default menProductsSlice.reducer;
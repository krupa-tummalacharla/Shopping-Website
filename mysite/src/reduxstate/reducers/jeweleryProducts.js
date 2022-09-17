import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    jewelery:[],
}

export const jeweleryAyncProds = createAsyncThunk("getJewelery",async()=>{
    const res = await axios.get(config.app.jeweleryProducts)
       return res.data;
})

const jewelerySlice = createSlice({
    name:"jeweleryReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [jeweleryAyncProds.fulfilled]:(state,{payload})=>{
            return {...state,jewelery:payload}
        }
    }
})

export default jewelerySlice.reducer;
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
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

const getAllCartSlice = createSlice({
    name:"getallcartReducer",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllCartsAsync.fulfilled]:(state,{payload})=>{
            return {...state,userCart:payload};
        }
    }
})

export default getAllCartSlice.reducer;

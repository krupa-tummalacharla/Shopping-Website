import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState ={
    loginRes:{
       success:"",
       authToken:""
    }
}


export const handleLoginAysnc = createAsyncThunk("loginhandle",async(cred)=>{
    
    const options ={
        method:"post",
        url:"http://localhost:3060/auth/login",
        headers:{
            "Content-Type":"application/json"
        },
        data: JSON.stringify(cred)
    }
    const response = await axios(options)

    if(response.data.success){
        localStorage.setItem("token",response.data.authToken)
    }
   
    return response.data;
})

const loginSlice = createSlice({
    name:"loginReducer",
    initialState,
    reducers:{
        logoutReducer:(state,{payload})=>{
            return {...state,loginRes:{success:false,authToken:""}}
        }
    },
    extraReducers:{
        [handleLoginAysnc.fulfilled]:(state,{payload})=>{
            return {...state,loginRes:payload}
        }
    }
})
export const {logoutReducer} = loginSlice.actions
export default loginSlice.reducer;
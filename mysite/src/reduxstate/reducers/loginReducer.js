import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    loginRes:{
       success:"",
       authToken:"",
       error:""
    }
}


export const handleLoginAysnc = createAsyncThunk("loginhandle",async(cred)=>{
    
    const options ={
        method:"post",
        url:`${config.app.backend}/auth/login`,
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
            return {...state,loginRes:{success:false,authToken:"",error:""}}
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
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config/default'

const initialState ={
    signupRes:{
       success:"",
       authToken:"",
       error:""
    }
}
export const handleSignupAysnc = createAsyncThunk("signuphandle",async(input)=>{
    try {
        const options ={
            method:"Post",
            url:`${config.app.backend}/auth/createuser`,
            headers:{
                "Content-Type":"application/json"
            },
            data: JSON.stringify(input)
        }
        const response = await axios(options)
       if(response.status===200&&response.data.success){
        localStorage.setItem("token",response.data.authToken)
        return response.data;
       }else if(response.status===400||response.status===422){
        return  response.data
       }
        
    } catch (error) {
        return {success:false,authToken:"",error:"Internal error"}
    }
    
})

const signupSlice = createSlice({
    name:"singupReducer",
    initialState,
    reducers:{
        signoutReducer:(state,{payload})=>{
            return {...state,signupRes:{success:false,authToken:"",error:""}}
        }
    },
    extraReducers:{
        [handleSignupAysnc.fulfilled]:(state,{payload})=>{
            return {...state,signupRes:payload}
        }
    }
})
export const {signoutReducer} = signupSlice.actions
export default signupSlice.reducer;
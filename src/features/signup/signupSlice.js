import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

const initialState = {
    isLoading: false,
    message: {},
    errors: {}
}

export const signupAsync = createAsyncThunk(
    'signup/fetchMessage',
    async (formVal, options) => {
        try {
            const {name, email, password, password_confirmation} = formVal;
            console.log("signupSlice.js signupAsync formVal", formVal);

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            
            formData.append("password_confirmation", password_confirmation);

            const {data} = await axios.post(`${conf.laravelBaseUrl}/api/signup`, formData);
           
            console.log("signupSlice.js signupAsync", data);

            return data;
        } catch (error) { 
            console.log("signupSlice.js ", error?.response);
       throw options.rejectWithValue(error?.response?.data);
        }
    }
)

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
       setMessage: (state)=>{
         state.message = {}
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupAsync.pending, (state) => {
                state.isLoading = true;
        })
        .addCase(signupAsync.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.message = action.payload;
        })
        .addCase(signupAsync.rejected, (state, action)=>{
            console.log("signupSlice.js sigunASync.rejcted action.payload", action.payload);
            state.errors = action.payload;
            state.isLoading = false;
        })
    }
})

export const {setMessage} = signupSlice.actions

const signupReducer = signupSlice.reducer

export default signupReducer
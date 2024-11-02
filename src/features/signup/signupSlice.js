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
            const {name, company_name, phone,  email, location, your_requirements} = formVal;
            console.log("signupSlice.js signupAsync formVal", formVal);

            const formData = new FormData();
            formData.append("name", name);
            formData.append("company_name", company_name);
            formData.append("phone", phone);
            formData.append("email", email);
            
            if(location){
                formData.append("location", location);
            }

            if(your_requirements){
                formData.append("your_requirements", your_requirements);
            }

            const randomFourDigit = Math.floor(1000 + Math.random() * 9000);

            formData.append("password", `Tnw@${randomFourDigit}`);
            
            formData.append("password_confirmation", `Tnw@${randomFourDigit}`);

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
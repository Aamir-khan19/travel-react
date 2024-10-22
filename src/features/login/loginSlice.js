import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

const initialState = {
    isLoading: false,
    errors: {},
    tokenState: JSON.parse(localStorage.getItem("token")) || {}
}


export const loginAsync = createAsyncThunk(
    'login/fetchToken',
    async (formVal, {rejectWithValue}) => {
        try {
            const { email, password} = formVal;
            console.log("loginSlice.js signupAsync", email, password);

            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            // formData.append("controller", "login");

            const {data} = await axios.post(`${conf.laravelBaseUrl}/api/login`, formData);
           
            console.log("loginSlice.js loginAsync", data);

            return data;
        } catch (error) { 
            console.log("loginSlice.js error", error);
                throw rejectWithValue(error?.response?.data);
        }
    }
)


export const logoutAsync = createAsyncThunk(
    'logout/removeToken',
    async (formVal = {}, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const {data} = await axios.post(`${conf.laravelBaseUrl}/api/logout`, formVal, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });
           
            console.log("loginSlice.js loginAsync", data);

            return data;
        } catch (error) { 
            console.log("loginSlice.js loginAsync error", error);
       throw options.rejectWithValue(error?.response?.data);
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
       setIsLoggedOut: (state)=>{
        state.isLoggedOut = false
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
        })
        .addCase(loginAsync.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.errors = {};
               localStorage.setItem('token', JSON.stringify(action.payload));
               state.tokenState = action.payload;
        })
        .addCase(loginAsync.rejected, (state, action)=>{
            console.log("loginSlcie.js loginAsync.rejected action.payload", action.payload);
            state.errors = action.payload;
            state.isLoading = false;
        })


        .addCase(logoutAsync.pending, (state) => {
            state.isLoading = true;
    })
    .addCase(logoutAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
           localStorage.removeItem('token');
           state.tokenState = {};
    })
    .addCase(logoutAsync.rejected, (state, action)=>{
        console.log("loginSlcie.js loginAsync.rejected action.payload", action.payload);
        state.errors = action.payload;
        state.isLoading = false;
    })
    
    }
})

export const {setTokenState, setIsLoggedOut} = loginSlice.actions 

const loginReducer = loginSlice.reducer

export default loginReducer
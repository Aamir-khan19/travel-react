import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for companies
const initialState = {
    isLoading: false,
    companies: [],
    errors: {},
};

// Fetch all companies
export const publicGetCompaniesAsync = createAsyncThunk(
    'public/getCompanies',
    async (_, options) => {
        try {

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-companies`);

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);



const publicSlice = createSlice({
    name: 'public',
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder
            .addCase(publicGetCompaniesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetCompaniesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("companiesSlice.js companiesIndexAsync.fulfilled actrion.payload", action.payload);
                state.companies = action.payload;
            })
            .addCase(publicGetCompaniesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })
    }
});

const publicReducer = publicSlice.reducer;

export default  publicReducer

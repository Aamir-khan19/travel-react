import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for companies
const initialState = {
    isLoading: false,
    companies: [],
    errors: {},
    selectedDestinationItineraries: [],
    particularItinerary: {}
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



export const publicGetItinerariesAsync = createAsyncThunk(
    'public/getItineraries',
    async (destination, options) => {
        try {

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-itineraries/${destination}`);

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetParticularItineraryAsync = createAsyncThunk(
    'public/getParticularItinerary',
    async (id, options) => {
        try {

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-itinerary/${id}`);

            console.log("public lol ", data);
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
    setParticularItinerary: (state, action)=>{
    let newParticularItinerary = state.selectedDestinationItineraries?.find((elem)=> elem?.id == action.payload.id);

    state.particularItinerary = newParticularItinerary; 
    }
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


            .addCase(publicGetItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("companiesSlice.js companiesIndexAsync.fulfilled actrion.payload", action.payload);
                state.selectedDestinationItineraries = action.payload;
            })
            .addCase(publicGetItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })


            .addCase(publicGetParticularItineraryAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetParticularItineraryAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("companiesSlice.js companiesIndexAsync.fulfilled actrion.payload", action.payload);
                state.particularItinerary = action.payload;
            })
            .addCase(publicGetParticularItineraryAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })
    }
});

export const { setParticularItinerary } = publicSlice.actions;

const publicReducer = publicSlice.reducer;

export default  publicReducer

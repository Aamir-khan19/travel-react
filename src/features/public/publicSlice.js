import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for companies
const initialState = {
    isLoading: false,
    companies: [],
    errors: {},
    selectedDestinationItineraries: [],
    particularItinerary: {},
    particularItineraryId: null,

    allBlogs: [],
    recentBlogs: [],
    particularBlog: {},

    verifiedTravelAgents: []
};

// Fetch all companies
export const publicGetCompaniesAsync = createAsyncThunk(
    'public/getCompanies',
    async (_ = null, options) => {
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

            console.log("publicSlice.js publicGetItinerariesAsync destination", destination);

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-itineraries/${destination}`);


            console.log("publicSlice.js publicGetItinerariesAsync destination data", data);

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


// Fetch all blogs
export const publicGetAllBlogsAsync = createAsyncThunk(
    'public/getAllBlogs',
    async (_ = null, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-blogs`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllBlogsAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetRecentBlogsAsync = createAsyncThunk(
    'public/getRecentBlogs',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-recent-blogs`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetRecentBlogsAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetParticularBlogAsync = createAsyncThunk(
    'public/getParticularBlog',
    async (id, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-blog/${id}`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetParticularBlogAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// Fetch all verified travel agents
export const publicGetAllVerifiedTravelAgentsAsync = createAsyncThunk(
    'public/getAllVerifiedTravelAgents',
    async (_ = null, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-verified-travel-agents`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllVerifiedTravelAgentsAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);



const publicSlice = createSlice({
    name: 'public',
    initialState,
    reducers: {
    setParticularItineraryId: (state, action)=>{
    state.particularItineraryId = action.payload;
    },
    setParticularItinerary: (state, action)=>{
    let newParticularItinerary = state.selectedDestinationItineraries?.find((elem)=> elem?.id == action.payload.id);

    state.particularItinerary = newParticularItinerary; 
    },
    setParticularBlog: (state, action) => {
        let newParticularBlog = state.allBlogs?.find((elem) => elem?.blog_slug == action.payload);
        state.particularBlog = newParticularBlog;
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


            .addCase(publicGetAllBlogsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllBlogsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allBlogs = action.payload;
            })
            .addCase(publicGetAllBlogsAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated.") {
                    localStorage.removeItem("token");
                }
            })


            .addCase(publicGetParticularBlogAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetParticularBlogAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.particularBlog = action.payload;
            })
            .addCase(publicGetParticularBlogAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated.") {
                    localStorage.removeItem("token");
                }
            })

            .addCase(publicGetRecentBlogsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetRecentBlogsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recentBlogs = action.payload;
            })
            .addCase(publicGetRecentBlogsAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated.") {
                    localStorage.removeItem("token");
                }
            })


            .addCase(publicGetAllVerifiedTravelAgentsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllVerifiedTravelAgentsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.verifiedTravelAgents = action.payload;
            })
            .addCase(publicGetAllVerifiedTravelAgentsAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated.") {
                    localStorage.removeItem("token");
                }
            })

            
    }
});

export const { setParticularItinerary, setParticularItineraryId, setParticularBlog } = publicSlice.actions;

const publicReducer = publicSlice.reducer;

export default  publicReducer

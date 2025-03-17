import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { all } from "axios";
import conf from "../../../conf/conf";

// Initial state for companies
const initialState = {
    isLoading: false,
    companies: [],
    errors: {},
    selectedDestinationItineraries: [],
    randomItineraries: [],
    randomItineraries2: [],
    particularItinerary: {},
    particularItineraryId: null,

    allBlogs: [],
    recentBlogs: [],
    particularBlog: {},

    verifiedTravelAgents: [],
    verifiedTravelAgentDetails: {},

    isLeadCreated: false,
    isCustomizeItineraryCreated: false,
    leadIsLoading: false,

    blogCategories: [],

    fiveInternationalItineraries: [],
    allInternationalItineraries: [],

    fiveDomesticItineraries: [],
    allDomesticItineraries: [],

    fiveDomesticItineraries2: [],
    allDomesticItineraries2: [],
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



export const publicGetRandomItinerariesAsync = createAsyncThunk(
    'public/getRandomItineraries',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-random-itineraries`);

            console.log("publicSlice.js", data);

            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetRandomItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetRandomItinerariesAsync2 = createAsyncThunk(
    'public/getRandomItineraries2',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-random-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetRandomItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// Top most tour package section api endpoints public-five-international-itineraries, public-thirty-international-itineraries, public-five-domestic-itineraries, public-thirty-domestic-itineraries starts here
export const publicGetFiveInternationalItinerariesAsync = createAsyncThunk(
    'public/getFiveInternationalItineraries',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-five-international-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetFiveInternationalItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetAllInternationalItinerariesAsync = createAsyncThunk(
    'public/getAllInternationalItineraries',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-thirty-international-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllInternationalItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);





export const publicGetFiveDomesticItinerariesAsync = createAsyncThunk(
    'public/getFiveDomesticItineraries',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-five-domestic-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetFiveDomesticItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetAllDomesticItinerariesAsync = createAsyncThunk(
    'public/getAllDomesticItineraries',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-thirty-domestic-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllDomesticItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetFiveDomesticItinerariesAsync2 = createAsyncThunk(
    'public/getFiveDomesticItineraries2',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-five-domestic-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetFiveDomesticItinerariesAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


export const publicGetAllDomesticItinerariesAsync2 = createAsyncThunk(
    'public/getAllDomesticItineraries2',
    async (_, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-thirty-domestic-itineraries`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllDomesticItinerariesAsync2 error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Top most tour package section api endpoints public-five-international-itineraries, public-thirty-international-itineraries, public-five-domestic-itineraries, public-thirty-domestic-itineraries ends here


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

            console.log("get all blogs", data);
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


export const publicGetParticularVerifiedTravelAgentAsync = createAsyncThunk(
    'public/getParticularVerifiedTravelAgent',
    async (id, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-verified-travel-agent/${id}`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllVerifiedTravelAgentsAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// lead api endpoints ends here
// Store lead phone and email
export const publicStoreLeadPhoneEmailAsync = createAsyncThunk(
    'public/storeLeadPhoneEmail',
    async (leadData, options) => {
        try {
            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/lead-phone-email`, leadData);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicStoreLeadPhoneEmailAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

export const publicStoreLeadQueryForCustomizeItineraryAsync = createAsyncThunk(
    'public/storeLeadQueryForCustomizeItinerary',
    async (leadData, options) => {
        try {
            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/lead-query-for-customize-itinerary`, leadData);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicStoreLeadQueryForCustomizeItineraryAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

export const publicStoreGeneralLeadAsync = createAsyncThunk(
    'public/storeGeneralLead',
    async (leadData, options) => {
        try {
            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/general-lead`, leadData);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicStoreGeneralLeadAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// lead api endpoints ends here


// Fetch all blog categories
export const publicGetAllBlogCategoriesAsync = createAsyncThunk(
    'public/getAllBlogCategories',
    async (_ = null, options) => {
        try {
            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-blog-categories`);
            return data;
        } catch (error) {
            console.log("publicSlice.js publicGetAllBlogCategoriesAsync error", error);
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
    },
    setIsLeadCreated: (state) => {
        state.isLeadCreated = false;
        
    },
    setIsCustomizeItineraryCreated: (state)=>{
        state.isCustomizeItineraryCreated = false;
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

            })


            .addCase(publicGetRandomItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetRandomItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.randomItineraries = action.payload;
            })
            .addCase(publicGetRandomItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })



            .addCase(publicGetRandomItinerariesAsync2.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetRandomItinerariesAsync2.fulfilled, (state, action) => {
                state.isLoading = false;
                state.randomItineraries2 = action.payload;
            })
            .addCase(publicGetRandomItinerariesAsync2.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
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

            })

            .addCase(publicGetParticularVerifiedTravelAgentAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetParticularVerifiedTravelAgentAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.verifiedTravelAgentDetails = action.payload;
            })
            .addCase(publicGetParticularVerifiedTravelAgentAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })


            // lead api end points pending, fulfilled and rejected cases ends here
            .addCase(publicStoreLeadPhoneEmailAsync.pending, (state) => {
                state.leadIsLoading = true;
            })
            .addCase(publicStoreLeadPhoneEmailAsync.fulfilled, (state, action) => {
                state.leadIsLoading = false;
                state.isLeadCreated = true;
                console.log("publicSlice.js publicStoreLeadPhoneEmailAsync.fulfilled action.payload", action.payload);
            })
            .addCase(publicStoreLeadPhoneEmailAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.leadIsLoading = false;

            })


            .addCase(publicStoreLeadQueryForCustomizeItineraryAsync.pending, (state) => {
                state.leadIsLoading = true;
            })
            .addCase(publicStoreLeadQueryForCustomizeItineraryAsync.fulfilled, (state, action) => {
                state.leadIsLoading = false;
                state.isCustomizeItineraryCreated = true;
                console.log("publicSlice.js publicStoreLeadQueryForCustomizeItineraryAsync.fulfilled action.payload", action.payload);
            })
            .addCase(publicStoreLeadQueryForCustomizeItineraryAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.leadIsLoading = false;
            })


            .addCase(publicStoreGeneralLeadAsync.pending, (state) => {
                state.leadIsLoading = true;
            })
            .addCase(publicStoreGeneralLeadAsync.fulfilled, (state, action) => {
                state.leadIsLoading = false;
                state.isLeadCreated = true;
                console.log("publicSlice.js publicStoreGeneralLeadAsync.fulfilled action.payload", action.payload);
            })
            .addCase(publicStoreGeneralLeadAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.leadIsLoading = false;
            })


            .addCase(publicGetAllBlogCategoriesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllBlogCategoriesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogCategories = action.payload;
            })
            .addCase(publicGetAllBlogCategoriesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })



            // Top most tour package section api endpoints cases public-five-international-itineraries, public-thirty-international-itineraries, public-five-domestic-itineraries, public-thirty-domestic-itineraries starts here

            .addCase(publicGetFiveInternationalItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetFiveInternationalItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fiveInternationalItineraries = action.payload;
            })
            .addCase(publicGetFiveInternationalItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })


            .addCase(publicGetAllInternationalItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllInternationalItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allInternationalItineraries = action.payload;
            })
            .addCase(publicGetAllInternationalItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })


            .addCase(publicGetFiveDomesticItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetFiveDomesticItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fiveDomesticItineraries = action.payload;
            })
            .addCase(publicGetFiveDomesticItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;    
            })

            .addCase(publicGetAllDomesticItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllDomesticItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allDomesticItineraries = action.payload;
            })
            .addCase(publicGetAllDomesticItinerariesAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;    
            })



            .addCase(publicGetFiveDomesticItinerariesAsync2.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetFiveDomesticItinerariesAsync2.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fiveDomesticItineraries2 = action.payload;
            })
            .addCase(publicGetFiveDomesticItinerariesAsync2.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;    
            })

            .addCase(publicGetAllDomesticItinerariesAsync2.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(publicGetAllDomesticItinerariesAsync2.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allDomesticItineraries2 = action.payload;
            })
            .addCase(publicGetAllDomesticItinerariesAsync2.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })


              // Top most tour package section api endpoints cases public-five-international-itineraries, public-thirty-international-itineraries, public-five-domestic-itineraries, public-thirty-domestic-itineraries ends here

            
    }
});

export const { setParticularItinerary, setParticularItineraryId, setParticularBlog, setIsLeadCreated, setIsCustomizeItineraryCreated } = publicSlice.actions;

const publicReducer = publicSlice.reducer;

export default  publicReducer

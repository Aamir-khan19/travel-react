import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";
import { act } from "react";

// Initial state for itineraries
const initialState = {
    isLoading: false,
    itineraries: [],
    isItineraryCreated: false,
    isItineraryUpdated: false,
    errors: {},
    flashMessage: "",
    itinerary: {},
    itineraryForm: {
        title: "",
        metaTitle: "",
        metaDescription: "",
        visibility: "public",
        type: "flexible",
        duration: {},
        selectedDestinations: {},
        selectedThemes: []
    },
    

    destinationDetailText: "",
    // file handling states 
    destinationThumbnail: {},
    destinationImages: [],
   // file handling states

    itineraryDetails: {
        inclusion: "",
        exclusion: ""
    },

    daysInformation: [],

    priceRange: {
        currency: "₹",
        minPrice: "",
        maxPrice: "",
      },
};

// Fetch all itineraries
export const itinerariesIndexAsync = createAsyncThunk(
    'itineraries/Index',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/itinerary`, {
                params: queryParams,
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("itinerariesSlice.js itinerariesIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch a single itinerary by ID
export const itinerariesShowAsync = createAsyncThunk(
    'itineraries/Show',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/itinerary/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("itinerariesSlice.js itinerariesShowAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Create a new itinerary
export const itinerariesStoreAsync = createAsyncThunk(
    'itineraries/Store',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            console.log("ItinerarySlice.js formVal", formVal);
            const {itinerary_name, itinerary_address, itinerary_city, pin_code, itinerary_status, services_offered, number_of_staff, about_itinerary, itinerary_website} = formVal;

            const formData = new FormData();
            formData.append("itinerary_name", itinerary_name);
            formData.append("itinerary_address", itinerary_address);
            formData.append("itinerary_city", itinerary_city);
            formData.append("pin_code", pin_code);
            formData.append("itinerary_status", itinerary_status);
            console.log("services_offered comaplySlcie.js is arr-> ", JSON.stringify(services_offered));
            formData.append("services_offered_string", JSON.stringify(services_offered));
            formData.append("number_of_staff", number_of_staff);
            formData.append("about_itinerary", about_itinerary);

            if(itinerary_website){
                formData.append("itinerary_website", itinerary_website);
            }


            if(formVal?.itinerary_image){
                formData.append("itinerary_image", formVal.itinerary_image);
            }


            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/itinerary`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("itinerariesSlice.js itinerariesStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Update a itinerary
export const itinerariesUpdateAsync = createAsyncThunk(
    'itineraries/Update',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const {itinerary_name, itinerary_address, itinerary_city, pin_code, itinerary_status, services_offered, number_of_staff, about_itinerary, itinerary_website} = formVal;

            const formData = new FormData();
        
            formData.append("itinerary_name", itinerary_name);
            formData.append("itinerary_address", itinerary_address);
            formData.append("itinerary_city", itinerary_city);
            formData.append("pin_code", pin_code);
            formData.append("itinerary_status", itinerary_status);
            console.log("services_offered comaplySlcie.js is arr-> ", JSON.stringify(services_offered));
            formData.append("services_offered_string", JSON.stringify(services_offered));
            formData.append("number_of_staff", number_of_staff);
            formData.append("about_itinerary", about_itinerary);

            if(itinerary_website){
                formData.append("itinerary_website", itinerary_website);
            }

            if(formVal?.itinerary_image){
                formData.append("itinerary_image", formVal.itinerary_image);
            }

            formData.append("_method", "PUT");


            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/itinerary/${formVal?.id}`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("itinerarieslice.js itinerariesUpdateAsync data", data);

            return data;
        } catch (error) {
            console.log("itinerariesSlice.js itinerariesUpdateAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a itinerary
export const itinerariesDestroyAsync = createAsyncThunk(
    'itineraries/Destroy',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

        const {data} = await axios.delete(`${conf.laravelBaseUrl}/api/itinerary/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("itinerariesSlice.js itinerariesDestroyAsync data", data);

            return { id };
        } catch (error) {
            console.log("itinerariesSlice.js itinerariesDestroyAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

const itinerariesSlice = createSlice({
    name: 'itineraries',
    initialState,
    reducers: {
        setIsItineraryCreated: (state, action) => {
            state.isItineraryCreated = false;
        },
        setIsItineraryUpdated: (state, action) => {
            state.isItineraryUpdated = false;
        },
        setFlashMessage: (state)=>{
            state.flashMessage = ""
        },
        setItinerary: (state, action)=>{
            console.log("setComapny action.payload", action.payload);

            state.itinerary = state?.itineraries?.find((itinerary)=> itinerary.user_id == action.payload);
        },

        setItineraryForm: (state, action)=>{
            console.log("itineararySlice.js setItineararyForm actim.paload", action.payload);

            let newItineraryForm = {...state.itineraryForm, ...action?.payload};

            state.itineraryForm = newItineraryForm;
        },

        setItineraryDetails: (state, action) => {
          let newItineraryDetails = {...state.itineraryDetails, ...action?.payload};

          state.itineraryDetails = newItineraryDetails;
        },

        setDaysInformation: (state, action)=>{
            let elementIndex = state.daysInformation.findIndex((element)=> element?.day == action?.payload?.day);

            console.log("itinerarySlice.js action.payload setDaysInformation", action?.payload, elementIndex);

            if(elementIndex != -1){
                console.log("itinerarySlice.js action.payload setDaysInformation 2", action?.payload, elementIndex);
             let newDaysInformation = [...state.daysInformation];

             newDaysInformation?.splice(elementIndex, 1, action?.payload);

             state.daysInformation = newDaysInformation;
            }
            else{
                state.daysInformation = [...(state.daysInformation || []), action?.payload];
            }
        },

        setSliceDaysInformation: (state, action) => {
            if (state?.daysInformation?.length > action?.payload) {
                console.log("itinerarSlice.js setSliceDaysInformation", state.daysInformation.length, action?.payload);
        
                // Assign the result of slice to newDaysInformation
                let newDaysInformation = state.daysInformation.slice(0, Number(action?.payload));
        
                console.log("newDaysInformation sliceDAysinformation", newDaysInformation);
        
                state.daysInformation = newDaysInformation;
            }
        },

        setDestinationDetailText: (state, action)=>{
        state.destinationDetailText = action?.payload
        },

        setDestinationThumbnail: (state, action)=>{
            state.destinationThumbnail = action.payload;
        },

        setDestinationImages: (state, action) =>{
            state.destinationImages = action.payload;
        },

        setPriceRange: (state, action) => {
            state.priceRange = { ...state.priceRange, ...action.payload };
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(itinerariesIndexAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesIndexAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("itinerariesSlice.js itinerariesIndexAsync.fulfilled actrion.payload", action.payload);
                state.itineraries = action.payload;
            })
            .addCase(itinerariesIndexAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })

            .addCase(itinerariesShowAsync.pending, (state) => {
                  state.isLoading = true;
            })
            .addCase(itinerariesShowAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.itinerary = action.payload;
            })
            .addCase(itinerariesShowAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(itinerariesStoreAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesStoreAsync.fulfilled, (state, action) => {
                state.errors = {}
                state.isLoading = false;
                state.isItineraryCreated = true;
                console.log("itinerarieslcie.js itinerariestoreAsync action.payload", action?.payload);
                state.flashMessage = `Itinerary "${action.payload?.itinerary?.name}" created successfully`;
                state.itineraries.push(action.payload);
            })
            .addCase(itinerariesStoreAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(itinerariesUpdateAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isItineraryUpdated = true;
                state.flashMessage = `Itinerary "${action.payload?.updatedItinerary?.itinerary_name}" updated successfully`;
                 
                state.itinerary = action.payload?.updatedItinerary
            })
            .addCase(itinerariesUpdateAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(itinerariesDestroyAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesDestroyAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const indx = state.itineraries.findIndex((itinerary)=> itinerary.id == action.payload.id);
                state.flashMessage = `Itinerary "${state?.itineraries[indx].name}" deleted successfully`;
                state.itineraries = state.itineraries.filter((itinerary) => itinerary.id !== action.payload.id);
            })
            .addCase(itinerariesDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            });
    }
});

export const { setIsItineraryCreated, setIsItineraryUpdated, setFlashMessage, setItinerary, setItineraryForm, setItineraryDetails, setDaysInformation, setSliceDaysInformation, setDestinationThumbnail, setDestinationImages, setDestinationDetailText, setPriceRange } = itinerariesSlice.actions;

const itinerariesReducer = itinerariesSlice.reducer;

export default itinerariesReducer

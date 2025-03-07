import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for itineraries
const initialState = {
    isLoading: false,
    itineraries: [],
    userItineraries: [],
    isItineraryCreated: false,
    isItineraryUpdated: false,
    errors: {},
    flashMessage: "",
    itinerary: {},


    itineraryForm: {
        title: "",
        metaTitle: "",
        keyword: "",
        metaDescription: "",
        visibility: "public",
        type: "flexible",
        duration: {},
        selectedDestination: {},
        selectedThemes: []
    },


    daysInformation: [],

    destinationDetailText: "",

    itineraryDetails: {
        inclusion: "",
        exclusion: "",
        terms_and_conditions: "",
        pricing: ""
    },

   hotelDetails: [
    { type: "Super Deluxe", roomType: "", price: "", discount: "" },
    { type: "Deluxe", roomType: "", price: "", discount: "" },
    { type: "Standard", roomType: "", price: "", discount: "" },
  ],
};


const loginSuccess = createAction("login/fetchToken/fulfilled");

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


// fetch user itineraries
export const itinerariesUserItinerariesAsync = createAsyncThunk(
    'itineraries/userItineraries',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/user-itineraries`, {
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
    async (itineraryPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

       // Destructure the object properties
const {
    days_information_string,
    destination_detail,
    inclusion,
    exclusion,
    pricing,
    terms_and_conditions,
    hotel_details_string,
    title,
    meta_title,
    keyword,
    meta_description,
    itinerary_visibility,
    itinerary_type,
    duration_string,
    selected_destination_string,
    itinerary_theme_string,
    destination_thumbnail_file,
    destination_images_files,
  } = itineraryPayloadObject;
  
  // Create a new FormData instance
  const formData = new FormData();
  
  // Append each property to the FormData
  formData.append("days_information_string", days_information_string);
  formData.append("destination_detail", destination_detail);
  formData.append("inclusion", inclusion);
  formData.append("exclusion", exclusion); 
  formData.append("terms_and_conditions", terms_and_conditions);
  formData.append("hotel_details_string", hotel_details_string);
  formData.append("title", title);
  formData.append("meta_title", meta_title);
  formData.append("keyword", keyword);
  formData.append("meta_description", meta_description);
  formData.append("itinerary_visibility", itinerary_visibility);
  formData.append("itinerary_type", itinerary_type);
  formData.append("duration_string", duration_string);
  formData.append("selected_destination_string", selected_destination_string);
  formData.append("itinerary_theme_string", itinerary_theme_string);


  if(pricing){
    formData.append("pricing", pricing);
  }
 
  
  // Append file objects
  formData.append("destination_thumbnail_file", destination_thumbnail_file);
  
  // If `destination_images_files` is an array of files, append each file individually

  for(var i = 0 ; i < destination_images_files?.length; i++){
    formData.append('destination_images_files[]', destination_images_files[i]);
}  

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/itinerary`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token,
                }
            });

            console.log("itinerarySlice.js itinerariesStoreAsync data ->", data);
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
    async (itineraryPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const {
                days_information_string,
                destination_detail,
                inclusion,
                exclusion,
                pricing,
                terms_and_conditions,
                hotel_details_string,
                title,
                meta_title,
                keyword,
                meta_description,
                itinerary_visibility,
                itinerary_type,
                duration_string,
                selected_destination_string,
                itinerary_theme_string,
                destination_thumbnail_file,
                destination_images_files,
              } = itineraryPayloadObject;
              
              // Create a new FormData instance
              const formData = new FormData();
              
              // Append each property to the FormData
              formData.append("days_information_string", days_information_string);
              formData.append("destination_detail", destination_detail);
              formData.append("inclusion", inclusion);
              formData.append("exclusion", exclusion);
              formData.append("hotel_details_string", hotel_details_string);
              formData.append("title", title);
              formData.append("meta_title", meta_title);
              formData.append("keyword", keyword);
              formData.append("meta_description", meta_description);
              formData.append("itinerary_visibility", itinerary_visibility);
              formData.append("itinerary_type", itinerary_type);
              formData.append("duration_string", duration_string);
              formData.append("selected_destination_string", selected_destination_string);
              formData.append("itinerary_theme_string", itinerary_theme_string);
              

              if(pricing){
                formData.append("pricing", pricing);
              }

              if(terms_and_conditions){
                formData.append("terms_and_conditions", terms_and_conditions);
              }

              // Append file objects
              if(destination_thumbnail_file){
                formData.append("destination_thumbnail_file", destination_thumbnail_file);
              }
              
              // If `destination_images_files` is an array of files, append each file individually
            
              if(destination_images_files){
                for(var i = 0 ; i < destination_images_files?.length; i++){
                    formData.append('destination_images_files[]', destination_images_files[i]);
                }
              }
             
          

            formData.append("_method", "PUT");

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/itinerary/${itineraryPayloadObject?.id}`, formData, {
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
        setIsItineraryCreated: (state, action)=>{
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

          setHotelDetails: (state, action) => {
            console.log("ItineararySlcie.js setHotelDetails", action.payload)
            const { type, name, value } = action.payload;

            let hotelDetailIndex = state.hotelDetails.findIndex((ele)=>ele.type == type);

            state.hotelDetails[hotelDetailIndex] = {
              ...state.hotelDetails[hotelDetailIndex],
              [name]: value,
            };
          },

          resetItinerary: (state)=>{
            state.itineraryForm =  {
                title: "",
                metaTitle: "",
                keyword: "",
                metaDescription: "",
                visibility: "public",
                type: "flexible",
                duration: {},
                selectedDestination: {},
                selectedThemes: []
            },

            state.daysInformation = [];
            
            state.destinationDetailText = "";

            state.itineraryDetails = {
                inclusion: "",
                exclusion: ""
            }

            state.hotelDetails =  [
                { type: "Super Deluxe", name: "", roomType: "", price: "", discount: "" },
                { type: "Deluxe", name: "", roomType: "", price: "", discount: "" },
                { type: "Standard", name: "", roomType: "", price: "", discount: "" },
              ]

          },

          setItinerary: (state, action) => {
            let itinerary = state.userItineraries.find((ele)=> ele?.id == action?.payload);

            console.log("ItineararySlice.js setItinearary itinerary", itinerary);

            state.itineraryForm =  {
                title: itinerary?.title,
                metaTitle: itinerary?.meta_title || "",
                keyword: itinerary?.keyword || "",
                metaDescription: itinerary?.meta_description || "",
                visibility: itinerary?.itinerary_visibility,
                type: itinerary?.itinerary_type,
                duration: itinerary?.duration,
                selectedDestination: itinerary?.selected_destination,
                selectedThemes: itinerary?.itinerary_theme
            },

            state.daysInformation = itinerary?.days_information;
            
            state.destinationDetailText = itinerary?.destination_detail;

            state.itineraryDetails = {
                inclusion: itinerary?.inclusion,
                exclusion: itinerary?.exclusion,
                terms_and_conditions: itinerary?.terms_and_conditions,
                pricing: itinerary?.pricing
            }

            state.hotelDetails = itinerary?.hotel_details;

          },

          resetErrors: (state)=>{
            state.errors = {};
          }
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

            .addCase(itinerariesUserItinerariesAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesUserItinerariesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("itinerariesSlice.js itinerariesIndexAsync.fulfilled actrion.payload", action.payload);
                state.userItineraries = action.payload;
            })
            .addCase(itinerariesUserItinerariesAsync.rejected, (state, action) => {
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
                state.flashMessage = `Itinerary "${action.payload?.itinerary?.title}" created successfully`;
                state.userItineraries.push(action.payload.itinerary);
            })
            .addCase(itinerariesStoreAsync.rejected, (state, action) => {
                console.log("itineararSlice.js itinearariesStoreAsync.rejected", action.payload);
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(itinerariesUpdateAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isItineraryUpdated = true;
                state.flashMessage = `Itinerary updated successfully`;
                 
                let updatedItineraryIndex = state.userItineraries.findIndex((ele) => ele?.id == action?.payload?.updatedItinerary?.id);

                if (updatedItineraryIndex != -1) {
                    state.userItineraries.splice(updatedItineraryIndex, 1, action.payload?.updatedItinerary);
                }
                
            })
            .addCase(itinerariesUpdateAsync.rejected, (state, action) => {
                console.log("itineararyUpdateAsync.rejected action.payload", action.payload);
                
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(itinerariesDestroyAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(itinerariesDestroyAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const indx = state.userItineraries.findIndex((itinerary)=> itinerary.id == action.payload.id);
                state.flashMessage = `"${state?.userItineraries[indx]?.selected_destination}" Itinerary deleted successfully`;
                state.userItineraries = state.userItineraries.filter((itinerary) => itinerary.id != action.payload.id);
            })
            .addCase(itinerariesDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(loginSuccess, (state)=>{
                state.userItineraries = [];
                state.errors = {}
            })
    }
});

export const { setIsItineraryCreated, setIsItineraryUpdated, setFlashMessage, setItinerary, setItineraryForm, setItineraryDetails, setDaysInformation, setSliceDaysInformation, setDestinationDetailText, setHotelDetails, resetItinerary, resetErrors } = itinerariesSlice.actions;

const itinerariesReducer = itinerariesSlice.reducer;

export default itinerariesReducer

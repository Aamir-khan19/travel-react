import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

const initialState = {
    isLoading: false,
    isDeletionLoading: false,
    leadsPhoneEmail: [],
    leadsQueriesCustomizeItinerary: [],
    generalLeads: [],
    flashMessage: "",
    errors: {}
};

const loginSuccess = createAction("login/fetchToken/fulfilled");

// Async thunks for API calls

// Fetch verified leads phone and email
export const fetchVerifiedLeadsPhoneEmail = createAsyncThunk(
    "leads/fetchVerifiedLeadsPhoneEmail",
    async (_, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
            const { data } = await axios.get(
                `${conf.laravelBaseUrl}/api/lead-phone-email`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenObj?.token}`,
                    },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a verified lead phone/email
export const deleteVerifiedLeadPhoneEmail = createAsyncThunk(
    "leads/deleteVerifiedLeadPhoneEmail",
    async (id, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
         const {data} = await axios.delete(
                `${conf.laravelBaseUrl}/api/lead-phone-email/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenObj?.token}`,
                    },
                }
            );

            console.log("leadSlice.js deleteVerifiedLeadPhoneEmail", data);

            return { id };
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch verified leads query for customize itinerary
export const fetchVerifiedLeadsQueryForCustomizeItinerary = createAsyncThunk(
    "leads/fetchVerifiedLeadsQueryForCustomizeItinerary",
    async (_, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
            const { data } = await axios.get(
                `${conf.laravelBaseUrl}/api/lead-query-for-customize-itinerary`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenObj?.token}`,
                    },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a verified lead query for customize itinerary
export const deleteVerifiedLeadQueryForCustomizeItinerary = createAsyncThunk(
    "leads/deleteVerifiedLeadQueryForCustomizeItinerary",
    async (id, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
            await axios.delete(
                `${conf.laravelBaseUrl}/api/lead-query-for-customize-itinerary/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenObj?.token}`,
                    },
                }
            );
            return { id };
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch general leads
export const fetchGeneralLeads = createAsyncThunk(
    "leads/fetchGeneralLeads",
    async (_, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
            const { data } = await axios.get(
                `${conf.laravelBaseUrl}/api/general-lead`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenObj?.token}`,
                    },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a general lead
export const deleteGeneralLead = createAsyncThunk(
    "leads/deleteGeneralLead",
    async (id, { rejectWithValue }) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem("token"));
            await axios.delete(`${conf.laravelBaseUrl}/api/general-lead/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenObj?.token}`,
                },
            });
            return { id };
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Slice
const leadSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {
        setFlashMessage: (state, action) => {
            state.flashMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVerifiedLeadsPhoneEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVerifiedLeadsPhoneEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.leadsPhoneEmail = action.payload;
            })
            .addCase(fetchVerifiedLeadsPhoneEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })

            .addCase(deleteVerifiedLeadPhoneEmail.pending, (state) => {
                state.isDeletionLoading = true;
            })
            .addCase(deleteVerifiedLeadPhoneEmail.fulfilled, (state, action) => {
                state.isDeletionLoading = false;
                state.leadsPhoneEmail = state.leadsPhoneEmail.filter((lead) => lead.id != action.payload.id);
                state.flashMessage = "Lead deleted successfully";
            })
            .addCase(deleteVerifiedLeadPhoneEmail.rejected, (state, action) => {
                state.isDeletionLoading = false;
                state.errors = action.payload;
            })

            .addCase(fetchVerifiedLeadsQueryForCustomizeItinerary.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVerifiedLeadsQueryForCustomizeItinerary.fulfilled, (state, action) => {
                state.isLoading = false;
                state.leadsQueriesCustomizeItinerary = action.payload;
            })
            .addCase(fetchVerifiedLeadsQueryForCustomizeItinerary.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(deleteVerifiedLeadQueryForCustomizeItinerary.pending, (state) => {
                state.isDeletionLoading = true;
            })
            .addCase(deleteVerifiedLeadQueryForCustomizeItinerary.fulfilled, (state, action) => {
                state.isDeletionLoading = false;
                state.leadsQueriesCustomizeItinerary = state.leadsQueriesCustomizeItinerary.filter((lead) => lead.id != action.payload.id);
                state.flashMessage = "Lead deleted successfully";
            })
            .addCase(deleteVerifiedLeadQueryForCustomizeItinerary.rejected, (state, action) => {
                state.isDeletionLoading = false;
                state.errors = true;
            })

            .addCase(fetchGeneralLeads.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGeneralLeads.fulfilled, (state, action) => {
                state.isLoading = false;
                state.generalLeads = action.payload;
            })
            .addCase(fetchGeneralLeads.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(deleteGeneralLead.pending, (state) => {
                state.isDeletionLoading = true;
            })
            .addCase(deleteGeneralLead.fulfilled, (state, action) => {
                state.isDeletionLoading = false;
                state.generalLeads = state.generalLeads.filter((lead) => lead.id != action.payload.id);
                state.flashMessage = "General lead deleted successfully";
            })
            .addCase(deleteGeneralLead.rejected, (state, action) => {
                state.errors = action.payload;
                state.isDeletionLoading = false;
            })


            .addCase(loginSuccess, (state)=>{
                state.leadsPhoneEmail = [],
                state.leadsQueriesCustomizeItinerary = [],
                state.generalLeads = []
                state.errors = {}
            })
    },
});

export const { setFlashMessage } = leadSlice.actions;

const leadReducer = leadSlice.reducer;

export default leadReducer;

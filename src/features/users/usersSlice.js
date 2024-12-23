import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for users
const initialState = {
    isLoading: false,
    users: [],
    isUserCreated: false,
    isUserUpdated: false,
    errors: {},
    flashMessage: "",
    user: {}
};

// Fetch all users
export const usersIndexAsync = createAsyncThunk(
    'users/Index',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/user`, {
                params: queryParams,
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("usersSlice.js usersIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch a single user by ID
export const usersShowAsync = createAsyncThunk(
    'users/Show',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/user/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("usersSlice.js usersShowAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Create a new user
export const usersStoreAsync = createAsyncThunk(
    'users/Store',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/user`, formVal, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("usersSlice.js usersStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Update a user
export const usersUpdateAsync = createAsyncThunk(
    'users/Update',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const {name, company_name, phone, location, your_requirements, gender, preferred_language, is_authorised, is_publicly_present, is_verified } = formVal;

            const formData = new FormData();
            formData.append("name", name);
            formData.append("company_name", company_name);
            formData.append("phone", phone);

            if(formVal?.whatsapp){
                formData?.append("whatsapp", formVal?.whatsapp);
            }

            if(formVal?.facebook){
                formData?.append("facebook", formVal?.facebook);
            }

            if(formVal?.instagram){
                formData?.append("instagram", formVal?.instagram);
            }

            if(formVal?.youtube){
                formData?.append("youtube", formVal?.youtube);
            }
            
            if(formVal?.location){
                formData.append("location", location);
            }
            
            if(formVal?.your_requirements){
                formData.append("your_requirements", your_requirements);
            }
           
            if(formVal?.gender){
                formData.append("gender", gender);
            }
           
            if(formVal?.preferred_language){
                formData.append("preferred_language", preferred_language);
            }

           if(formVal?.is_authorised){
            formData.append("is_authorised", is_authorised);
           }

           if(formVal?.is_publicly_present){
            formData.append("is_publicly_present", is_publicly_present);
           }

           if(formVal?.is_verified){
            formData.append("is_verified", is_verified);
           }

           if(formVal?.verification_date){
            formData.append("verification_date", formVal.verification_date);
           }
            

            if(formVal?.password){
                formData.append("password", formVal?.password);
                formData.append("password_confirmation", formVal?.password_confirmation);
            }
            
            if(formVal?.profileImage){
                formData.append("user_image", formVal.profileImage)
            }

            formData.append("_method", "PUT");



            // const updatedFormVal = { ...formVal, _method: "PUT" };

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/user/${formVal?.id}`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("userSlice.js usersUpdateAsync data", data);

            return data;
        } catch (error) {
            console.log("usersSlice.js usersUpdateAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a user
export const usersDestroyAsync = createAsyncThunk(
    'users/Destroy',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

        const {data} = await axios.delete(`${conf.laravelBaseUrl}/api/user/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("usersSlice.js usersDestroyAsync data", data);

            return { id };
        } catch (error) {
            console.log("usersSlice.js usersDestroyAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsUserCreated: (state, action) => {
            state.isUserCreated = false;
        },
        setIsUserUpdated: (state, action) => {
            state.isUserUpdated = false;
        },
        setFlashMessage: (state)=>{
            state.flashMessage = ""
        },
        setUser: (state, action)=>{
            console.log("usersSlice.js action.payload ", action.payload);

            state.user = state?.users?.find((user)=> user.id == action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(usersIndexAsync.pending, (state) => {
                state.errors = {};
                state.isLoading = true;
            })
            .addCase(usersIndexAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(usersIndexAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })

            .addCase(usersShowAsync.pending, (state) => {
                  state.errors = {};
                  state.isLoading = true;
            })
            .addCase(usersShowAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(usersShowAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(usersStoreAsync.pending, (state) => {
                state.errors = {};
                state.isLoading = true;
            })
            .addCase(usersStoreAsync.fulfilled, (state, action) => {
                state.errors = {}
                state.isLoading = false;
                state.isUserCreated = true;
                console.log("userSlcie.js userStoreAsync action.payload", action?.payload);
                state.flashMessage = `User "${action.payload?.user?.name}" created successfully`;
                state.users.push(action.payload.user);
            })
            .addCase(usersStoreAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(usersUpdateAsync.pending, (state) => {
                state.errors = {};
                state.isLoading = true;
            })
            .addCase(usersUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isUserUpdated = true;
                console.log("userSlcie.js userStoreAsync action.payload", action?.payload);
                state.flashMessage = `User "${action.payload?.updatedUser?.name}" updated successfully`;
                
                state.user = action?.payload?.updatedUser;

                const index = state.users?.findIndex(user => user.id == action.payload?.updatedUser?.id);
                if (index != -1) {
                    console.log("leadsSlcie.js leads", state.leads);
                  state.users[index] = action.payload?.updatedUser;
                }
            })
            .addCase(usersUpdateAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(usersDestroyAsync.pending, (state) => {
                state.errors = {};
                state.isLoading = true;
            })
            .addCase(usersDestroyAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const indx = state.users.findIndex((user)=> user.id == action.payload.id);
                state.flashMessage = `User "${state?.users[indx].name}" deleted successfully`;
                state.users = state.users.filter((user) => user.id !== action.payload.id);
            })
            .addCase(usersDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            });
    }
});

export const { setIsUserCreated, setIsUserUpdated, setFlashMessage, setUser } = usersSlice.actions;

const usersReducer = usersSlice.reducer;

export default usersReducer

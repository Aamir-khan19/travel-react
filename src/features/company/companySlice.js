import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for companies
const initialState = {
    isLoading: false,
    companies: [],
    isCompanyCreated: false,
    isCompanyUpdated: false,
    errors: {},
    flashMessage: "",
    company: {}
};

// Fetch all companies
export const companiesIndexAsync = createAsyncThunk(
    'companies/Index',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/company`, {
                params: queryParams,
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch a single company by ID
export const companiesShowAsync = createAsyncThunk(
    'companies/Show',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/company/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesShowAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Create a new company
export const companiesStoreAsync = createAsyncThunk(
    'companies/Store',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            console.log("CompanySlice.js formVal", formVal);
            const {company_name, company_address, company_city, pin_code, company_status, services_offered, number_of_staff, about_company, company_website} = formVal;

            const formData = new FormData();
            formData.append("company_name", company_name);
            formData.append("company_address", company_address);
            formData.append("company_city", company_city);
            formData.append("pin_code", pin_code);
            formData.append("company_status", company_status);
            console.log("services_offered comaplySlcie.js is arr-> ", JSON.stringify(services_offered));
            formData.append("services_offered_string", JSON.stringify(services_offered));
            formData.append("number_of_staff", number_of_staff);
            formData.append("about_company", about_company);

            if(company_website){
                formData.append("company_website", company_website);
            }


            if(formVal?.company_image){
                formData.append("company_image", formVal.company_image);
            }


            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/company`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Update a company
export const companiesUpdateAsync = createAsyncThunk(
    'companies/Update',
    async (formVal, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const {company_name, company_address, company_city, pin_code, company_status, services_offered, number_of_staff, about_company, company_website} = formVal;

            const formData = new FormData();
        
            formData.append("company_name", company_name);
            formData.append("company_address", company_address);
            formData.append("company_city", company_city);
            formData.append("pin_code", pin_code);
            formData.append("company_status", company_status);
            console.log("services_offered comaplySlcie.js is arr-> ", JSON.stringify(services_offered));
            formData.append("services_offered_string", JSON.stringify(services_offered));
            formData.append("number_of_staff", number_of_staff);
            formData.append("about_company", about_company);

            if(company_website){
                formData.append("company_website", company_website);
            }

            if(formVal?.company_image){
                formData.append("company_image", formVal.company_image);
            }

            formData.append("_method", "PUT");


            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/company/${formVal?.id}`, formData, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("companieslice.js companiesUpdateAsync data", data);

            return data;
        } catch (error) {
            console.log("companiesSlice.js companiesUpdateAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a company
export const companiesDestroyAsync = createAsyncThunk(
    'companies/Destroy',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

        const {data} = await axios.delete(`${conf.laravelBaseUrl}/api/company/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("companiesSlice.js companiesDestroyAsync data", data);

            return { id };
        } catch (error) {
            console.log("companiesSlice.js companiesDestroyAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setIsCompanyCreated: (state, action) => {
            state.isCompanyCreated = false;
        },
        setIsCompanyUpdated: (state, action) => {
            state.isCompanyUpdated = false;
        },
        setFlashMessage: (state)=>{
            state.flashMessage = ""
        },
        setCompany: (state, action)=>{
            console.log("setComapny action.payload", action.payload);

            state.company = state?.companies?.find((company)=> company.user_id == action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(companiesIndexAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(companiesIndexAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("companiesSlice.js companiesIndexAsync.fulfilled actrion.payload", action.payload);
                state.companies = action.payload;
            })
            .addCase(companiesIndexAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })

            .addCase(companiesShowAsync.pending, (state) => {
                  state.isLoading = true;
            })
            .addCase(companiesShowAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.company = action.payload;
            })
            .addCase(companiesShowAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(companiesStoreAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(companiesStoreAsync.fulfilled, (state, action) => {
                state.errors = {}
                state.isLoading = false;
                state.isCompanyCreated = true;
                console.log("companieslcie.js companiestoreAsync action.payload", action?.payload);
                state.flashMessage = `Company "${action.payload?.company?.name}" created successfully`;
                state.companies.push(action.payload);
            })
            .addCase(companiesStoreAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(companiesUpdateAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(companiesUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isCompanyUpdated = true;
                state.flashMessage = `Company "${action.payload?.updatedCompany?.company_name}" updated successfully`;
                 
                state.company = action.payload?.updatedCompany
            })
            .addCase(companiesUpdateAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(companiesDestroyAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(companiesDestroyAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const indx = state.companies.findIndex((company)=> company.id == action.payload.id);
                state.flashMessage = `Company "${state?.companies[indx].name}" deleted successfully`;
                state.companies = state.companies.filter((company) => company.id !== action.payload.id);
            })
            .addCase(companiesDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            });
    }
});

export const { setIsCompanyCreated, setIsCompanyUpdated, setFlashMessage, setCompany } = companiesSlice.actions;

const companiesReducer = companiesSlice.reducer;

export default companiesReducer

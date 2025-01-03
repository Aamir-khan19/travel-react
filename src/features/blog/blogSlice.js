import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../../conf/conf";

// Initial state for blogs
const initialState = {
    isLoading: false,
    blogs: [],
    isBlogCreated: false,
    isBlogUpdated: false,
    errors: {},
    flashMessage: "",
    blog: {},
    blogCategories: [],
    blogCategory: {},
    isBlogCategoryCreated: false,
    isBlogCategoryUpdated: false,
    isDeletionLoading: false
};


// Fetch all blogs
export const blogsIndexAsync = createAsyncThunk(
    'blogs/Index',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/blog`, {
                params: queryParams,
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("blogsSlice.js blogsIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);



// Fetch a single blog by ID
export const blogsShowAsync = createAsyncThunk(
    'blogs/Show',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/blog/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("blogsSlice.js blogsShowAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Create a new blog
export const blogsStoreAsync = createAsyncThunk(
    'blogs/Store',
    async (blogPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/blog`, blogPayloadObject, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogSlice.js blogsStoreAsync data ->", data);
            return data;
        } catch (error) {
            console.log("blogsSlice.js blogsStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Update a blog
export const blogsUpdateAsync = createAsyncThunk(
    'blogs/Update',
    async (blogPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));
          
             const formData = new FormData();

                    Object.entries(blogPayloadObject).forEach(([key, value]) => {
                        formData.append(key, value);
                    });


            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/blog/${blogPayloadObject?.id}`, blogPayloadObject, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogslice.js blogsUpdateAsync data", data);

            return data;
        } catch (error) {
            console.log("blogsSlice.js blogsUpdateAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);

// Delete a blog
export const blogsDestroyAsync = createAsyncThunk(
    'blogs/Destroy',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

        const {data} = await axios.delete(`${conf.laravelBaseUrl}/api/blog/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogsSlice.js blogsDestroyAsync data", data);

            return { id };
        } catch (error) {
            console.log("blogsSlice.js blogsDestroyAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// blog category api endpoints starts here 
// Fetch all blog categories
export const blogCategoriesIndexAsync = createAsyncThunk(
    'blogCategories/Index',
    async (queryParams = null, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.get(`${conf.laravelBaseUrl}/api/blog-category`, {
                params: queryParams,
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            return data;
        } catch (error) {
            console.log("blogsSlice.js blogCategoriesIndexAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// Create a new blog category
export const blogCategoryStoreAsync = createAsyncThunk(
    'blogCategory/Store',
    async (categoryPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.post(`${conf.laravelBaseUrl}/api/blog-category`, categoryPayloadObject, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogSlice.js blogCategoryStoreAsync data ->", data);
            return data;
        } catch (error) {
            console.log("blogsSlice.js blogCategoryStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// Update a blog category
export const blogCategoryUpdateAsync = createAsyncThunk(
    'blogCategory/Update',
    async (categoryPayloadObject, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.put(`${conf.laravelBaseUrl}/api/blog-category/${categoryPayloadObject?.id}`, categoryPayloadObject, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogSlice.js blogCategoryStoreAsync data ->", data);
            return data;
        } catch (error) {
            console.log("blogsSlice.js blogCategoryStoreAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


// Delete a blog category
export const blogCategoryDestroyAsync = createAsyncThunk(
    'blogCategory/Destroy',
    async (id, options) => {
        try {
            const tokenObj = JSON.parse(localStorage.getItem('token'));

            const { data } = await axios.delete(`${conf.laravelBaseUrl}/api/blog-category/${id}`, {
                headers: {
                    Authorization: "Bearer " + tokenObj?.token
                }
            });

            console.log("blogsSlice.js blogCategoryDestroyAsync data", data);

            return { id };
        } catch (error) {
            console.log("blogsSlice.js blogCategoryDestroyAsync error", error);
            throw options.rejectWithValue(error?.response?.data);
        }
    }
);


const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setIsBlogCreated: (state, action)=>{
         state.isBlogCreated = false;
        },
        setIsBlogUpdated: (state, action) => {
            state.isBlogUpdated = false;
        },
        setFlashMessage: (state)=>{
            state.flashMessage = ""
        },
        setBlog: (state, action)=>{
            console.log("setComapny action.payload", action.payload);

            state.blog = state?.blogs?.find((blog)=> blog.id == action.payload);
        },

        setBlogCategory: (state, action) => {
            state.blogCategory = state?.blogCategories?.find((category) => category.id == action.payload);
        },
        setIsBlogCategoryCreated: (state) => {
            state.isBlogCategoryCreated = false;
        },
        setIsBlogCategoryUpdated: (state) => {
            state.isBlogCategoryUpdated = false;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(blogsIndexAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogsIndexAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("blogsSlice.js blogsIndexAsync.fulfilled actrion.payload", action.payload);
                state.blogs = action.payload;
            })
            .addCase(blogsIndexAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated."){
                    localStorage.removeItem("token");
                }
            })


            .addCase(blogsShowAsync.pending, (state) => {
                  state.isLoading = true;
            })
            .addCase(blogsShowAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(blogsShowAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(blogsStoreAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogsStoreAsync.fulfilled, (state, action) => {
                state.errors = {}
                state.isLoading = false;
                state.isBlogCreated = true;
               
                state.flashMessage = `Blog "${action.payload?.blog?.title}" created successfully`;

                state.blogs.push(action.payload.blog);
            })
            .addCase(blogsStoreAsync.rejected, (state, action) => {
                console.log("itineararSlice.js itinearariesStoreAsync.rejected", action.payload);
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(blogsUpdateAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogsUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isBlogUpdated = true;
                state.flashMessage = `Blog updated successfully`;
                 
                let updatedBlogIndex = state.blogs.findIndex((ele) => ele?.id == action?.payload?.blog?.id);

                if (updatedBlogIndex != -1) {
                    state.blogs.splice(updatedBlogIndex, 1, action.payload?.blog);
                }
                
            })
            .addCase(blogsUpdateAsync.rejected, (state, action) => {
                console.log("itineararyUpdateAsync.rejected action.payload", action.payload);
                
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(blogsDestroyAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogsDestroyAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const indx = state.blogs.findIndex((blog)=> blog.id == action.payload.id);

                // state.flashMessage = `"${state?.userBlogs[indx]?.selected_destination}" Blog deleted successfully`;

                state.blogs = state.blogs.filter((blog) => blog.id != action.payload.id);
            })
            .addCase(blogsDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })


            // blog category reducers
            .addCase(blogCategoriesIndexAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogCategoriesIndexAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log("blogsSlice.js blogCategoriesIndexAsync.fulfilled action.payload", action.payload);
                state.blogCategories = action.payload;
            })
            .addCase(blogCategoriesIndexAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;

                if(action?.payload?.message == "Unauthenticated.") {
                    localStorage.removeItem("token");
                }
            })

            .addCase(blogCategoryStoreAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogCategoryStoreAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isBlogCategoryCreated = true;
                state.flashMessage = `Blog category "${action.payload?.name}" created successfully`;
                state.blogCategories.push(action.payload?.blogCategory);
            })
            .addCase(blogCategoryStoreAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(blogCategoryUpdateAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogCategoryUpdateAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isBlogCategoryUpdated = true;
                state.flashMessage = `Blog category "${action.payload?.newBlogCategory?.name}" updated successfully`;
                
                let updatedCategoryIndex = state.blogCategories.findIndex((ele) => ele?.id == action?.payload?.newBlogCategory?.id);

                if (updatedCategoryIndex != -1) {
                    state.blogCategories.splice(updatedCategoryIndex, 1, action.payload?.newBlogCategory);
                }
            })
            .addCase(blogCategoryUpdateAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

            .addCase(blogCategoryDestroyAsync.pending, (state) => {
                state.isDeletionLoading = true;
            })
            .addCase(blogCategoryDestroyAsync.fulfilled, (state, action) => {
                state.isDeletionLoading = false;
                const indx = state.blogCategories.findIndex((category) => category.id == action.payload.id);
                state.blogCategories = state.blogCategories.filter((category) => category.id != action.payload.id);
            })
            .addCase(blogCategoryDestroyAsync.rejected, (state, action) => {
                state.errors = action.payload;
                state.isDeletionLoading = false;
            })
    }
});

export const { setIsBlogCreated, setIsBlogUpdated, setFlashMessage, setBlog, setBlogCategory, setIsBlogCategoryCreated, setIsBlogCategoryUpdated } = blogsSlice.actions;

const blogsReducer = blogsSlice.reducer;

export default blogsReducer

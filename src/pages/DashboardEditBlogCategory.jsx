import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";
import { blogCategoriesIndexAsync, blogCategoryUpdateAsync, setBlogCategory, setIsBlogCategoryUpdated } from '../features/blog/blogSlice';
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardContentContainer from "../components/dashboard/DashboardContentContainer"

function DashboardEditBlogCategory() {
    const dispatch = useDispatch();
    const blogCategories = useSelector(state => state.blogs.blogCategories);
    const blogCategory = useSelector(state => state.blogs.blogCategory);
    const isLoading = useSelector(state => state.blogs.isLoading);
    const isBlogCategoryUpdated  = useSelector(state => state.blogs.isBlogCategoryUpdated);
    const apiErrors = useSelector(state => state.blogs.errors);

    const navigate = useNavigate();
    const {id} = useParams();

    console.log(";id sad sf id ",id);

    const [category_name, setCategoryName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(blogCategoryUpdateAsync({category_name: category_name, id: id}));
    };


    useEffect(()=>{
    if(isBlogCategoryUpdated){
        dispatch(setIsBlogCategoryUpdated());
        setCategoryName('');
        navigate("/dashboard-blog-categories");
    }
    }, [isBlogCategoryUpdated]);


   useEffect(()=>{

    if(blogCategories?.length > 0){
        dispatch(setBlogCategory(id));
    }
    else{
        dispatch(blogCategoriesIndexAsync())
        .then(()=>{
            dispatch(setBlogCategory(id));
        })
    }

   }, [id]);


   useEffect(()=>{
   if(blogCategory?.category_name){
       setCategoryName(blogCategory.category_name);
   }
   }, [blogCategory]);

  return (
    <>
    <DashboardSideBar />


    <DashboardContentContainer>

{
isLoading? 
<div className=' flex justify-center h-[50vh] items-center'>

<div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

</div>

:

<form 
className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto md:mx-0" 
onSubmit={handleSubmit}
>
<h2 className="text-2xl font-semibold text-purple-700 mb-4">Update Blog Category</h2>

<div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Category
        </label>
        <input
            type="text"
            name="category_name"
            value={category_name}
            onChange={(e)=>setCategoryName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
    </div>

<p className=' mb-8 text-sm text-red-500'>{apiErrors?.errors?.category_name && apiErrors?.errors?.category_name[0]}</p>


<div className=" flex justify-between">
<button
    type="submit"
    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
>
    Submit
</button>


<Link 
className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
to="/dashboard-blog-categories">Cancel</Link>

</div>




</form>

}
    

</DashboardContentContainer>
</>
  )
}

export default DashboardEditBlogCategory;
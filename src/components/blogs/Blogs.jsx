import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicGetAllBlogCategoriesAsync, publicGetAllBlogsAsync } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";

const Blogs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.public.isLoading);
  const allBlogs = useSelector((state) => state.public.allBlogs);
  const blogCategories = useSelector((state) => state.public.blogCategories);

  const [category, setCategory] = useState("");
 
  useEffect(() => {
    if(allBlogs.length == 0) {
      dispatch(publicGetAllBlogsAsync());
    }
  }, []);


  useEffect(()=>{
if(blogCategories.length == 0){
dispatch(publicGetAllBlogCategoriesAsync());
}
  }, []);

  return (

    <>
    
    {
      isLoading? <div className=' flex justify-center h-[50vh] items-center'>

      <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
      
      </div>

      :

      <section className="w-full">



<video
        autoPlay
        loop
        muted
        className="w-full md:h-[80vh] object-cover"
      >
        <source src="/Videos/blog.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="relative w-full">
          {/* <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/14/19/37/autumn-4695599_640.jpg"
              alt=""
              className="flex items-center justify-center w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
          </div>
          <div className="absolute flex justify-center top-5 left-5 h-full flex-col space-y-4 max-w-2xl">
            <h1 className="text-white font-bold text-3xl sm:text-6xl">
              All Available Blogs are here
            </h1>
            <p className="text-white text-xl">
              Discover our collection of insightful articles and stories.
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg w-max">
              Explore Blogs
            </button>
          </div> */}




        </div>

        <div className="flex flex-col gap-10 md:py-20 py-10">
          <div className=" flex justify-between items-center ">
            <h2 className=" text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0">
              Latest Posts
            </h2>

            <select
              className="w-[200px] py-2 px-3 bg-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {blogCategories?.map((category) => (
                <option key={category?.id} value={category?.category_name}>
                  {category?.category_name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category
              ? allBlogs?.map((post) => {
                  if (category == post?.blog_category) {
                   
                    return (
                      <Link
                        key={post?.id}
                        to={`/blog/${post?.blog_slug}`}
                     
                        className=" flex cursor-pointer border border-gray-300 p-4 rounded-lg flex-col gap-5 relative group"
                      >
                        <img
                          src={`${conf.laravelBaseUrl}/${
                            post?.blog_image
                          }`}
                          alt=""
                          className="object-cover h-64 rounded-lg"
                        />
                        <div className="flex gap-3 items-center">
                          <div className="bg-blue-300 px-2 py-1 rounded-lg w-fit">
                            <p>{post?.blog_category}</p>
                          </div>
                          <div className="bg-blue-300 px-2 py-1 rounded-lg w-fit">
                            <p>Read More</p>
                          </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
                          {post?.blog_title}
                        </h1>

                        <p className="text-base font-normal text-gray-700 overflow-hidden truncate mb-5">
                    {post?.blog_description}
                      </p>

                    <div className="flex items-center justify-between gap-2 absolute bottom-0 left-0 right-0 px-1">
                      <p>{post?.blog_author_name}</p>
                      <p>{post?.created_at}</p>
                    </div>
                      </Link>
                    );
                  }
                })
              : allBlogs?.map((post) => (
                  <Link
                    key={post?.id}
                    to={`/blog/${post?.blog_slug}`}
                    // to={'/blogs'}
                    className="flex cursor-pointer border border-gray-300 p-4 rounded-lg flex-col gap-5 relative group"
                  >
                    <img
                      src={`${conf.laravelBaseUrl}/${post?.blog_image}`}
                      alt=""
                      className="object-cover h-64 rounded-lg"
                    />
                    <div className="flex gap-3 items-center">
                      <div className="bg-blue-200 px-2 py-1 rounded-lg w-fit">
                        <p>{post?.blog_category}</p>
                      </div>
                      <div className="bg-blue-200 px-2 py-1 rounded-lg w-fit">
                        <p>Read More</p>
                      </div>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
                      {post?.blog_title}
                    </h1>

<p className="text-base font-normal text-gray-700 overflow-hidden truncate mb-5">
                    {post?.blog_description}
                      </p>

                    <div className="flex items-center justify-between gap-2 absolute bottom-0 left-0 right-0 px-1">
                      <p>{post?.blog_author_name}</p>
                      <p>{post?.created_at}</p>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </section>
    }
   
   


    </>
  );
};

export default Blogs;

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import { publicGetAllBlogsAsync, publicGetRecentBlogsAsync, setParticularBlog } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import "./blogDetail.css";

const BlogDetail = () => {
  const { blog_slug } = useParams();
  const dispatch = useDispatch();

  const allBlogs = useSelector(state => state.public.allBlogs);
  const recentBlogs = useSelector(state => state.public.recentBlogs);
  const particularBlog = useSelector(state => state.public.particularBlog);
  const isLoading = useSelector(state => state.public.isLoading);

  useEffect(() => {
    if(allBlogs.length === 0){
    dispatch(publicGetAllBlogsAsync())
    .then(()=>{
      dispatch(setParticularBlog(blog_slug));
    })
    }
   else{
    dispatch(setParticularBlog(blog_slug));
   }

   if(recentBlogs.length === 0){
  dispatch(publicGetRecentBlogsAsync());
   }

   window.scrollTo(0, 0);
  }, [dispatch, blog_slug, recentBlogs]);

  let newParticularBlog = { ...particularBlog };

  newParticularBlog.blog_content = newParticularBlog?.blog_content
    ?.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");  
  
  return (
    <div>
      <Navbar />
{
  isLoading? <div className=' flex justify-center h-[50vh] items-center'>

  <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
  
  </div>

  :

  <div className="md:flex md:flex-row md:justify-between md:items-start px-2 flex-col">

  <div className="bg-blue-50 p-4 shadow-sm hover:shadow-lg rounded-lg transition-all duration-300 flex-grow">

  {particularBlog?.blog_image && (
    <div className="relative overflow-hidden rounded-lg mb-8">
      <img
        src={`${conf.laravelBaseUrl}/${particularBlog?.blog_image}`}
        alt={particularBlog?.blog_image}
        className="w-full md:w-[50%] object-contain rounded-lg transition-transform duration-700 ease-in-out mx-auto"
      />
      
    </div>
  )}

  {/* Blog Title & Info */}
  <div className="space-y-6 text-center">
    <h1 className="text-4xl font-bold text-gray-800 hover:text-indigo-900 transition-colors duration-300">
      {particularBlog?.blog_title}
    </h1>
    <div className="text-gray-600 flex justify-between items-center space-x-4 text-sm font-medium">
      <span className="bg-indigo-100 text-indigo-900 py-1 px-4 rounded-full">
        {particularBlog?.blog_category}
      </span>
      <div className="flex items-center space-x-2">
      {
        particularBlog?.blog_author_name && <span className="text-gray-500">
        By{" "}
        <span className="font-semibold text-gray-800">
          {particularBlog?.blog_author_name}
        </span>
        </span>
      }  
        
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">{particularBlog?.created_at}</span>
      </div>
    </div>
  </div>


{/* Blog Description */}
  <div className="border-t border-gray-300 my-5 mt-5"></div>

  <div
id="particular-blog-description"
className="prose max-w-none text-gray-700"
dangerouslySetInnerHTML={{ __html: particularBlog?.blog_description }}
/>

<div className="border-t border-gray-300 my-5 mb-5"></div>
  

  <div className="mt-8 space-y-16">
  <div
id="particular-blog-content"
className="prose max-w-none text-gray-700"
dangerouslySetInnerHTML={{ __html: newParticularBlog?.blog_content }}
/>
  </div>

  {/* Author Bio */}
  <div className="border-t border-gray-300 my-10"></div>
 
 {
  particularBlog?.blog_author_name &&  <div className="flex items-center space-x-4">
  <div>
    <p className="text-gray-700 font-semibold">
      Written by {particularBlog?.blog_author_name}
    </p>
    <p className="text-sm text-gray-500">
      {particularBlog?.blog_author_name} is a travel enthusiast who loves exploring new
      cultures and places.
    </p>
  </div>
</div>
 }

  {/* Share Buttons */}
  <div className="flex justify-between items-center mt-10">
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-gray-500 hover:text-indigo-900 transition-colors"
      >
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-indigo-900 transition-colors"
      >
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-indigo-900 transition-colors"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </div>
    <div className="flex space-x-4">
      <a
        href="/blogs"
        className="px-6 py-3 bg-indigo-900 text-white font-semibold rounded-full shadow hover:bg-indigo-800 transition-colors duration-300"
      >
        Back to Blogs
      </a>
      <a
        href="/contact"
        className="px-6 py-3 bg-indigo-900 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>


</div>






<div className="mt-10 md:mt-0 bg-blue-100 rounded-md p-4 md:ml-5 min-w-[250px] md:min-w-[300px]">
    <h3 className="text-3xl font-semibold text-gray-800 mb-8 md:text-center">
      Recent Blogs
    </h3>
    <div className="grid grid-cols-1  gap-8">
      {recentBlogs?.map((post) => (
        <div
          key={post.id}
          className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          <img
            src={conf.laravelBaseUrl + "/" + post.blog_image}
            alt={post?.title}
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold mb-2 text-gray-800">
            {post.blog_title}
          </h4>
          <Link
            to={`/blog/${post?.blog_slug}`}
            className="text-indigo-900 font-semibold hover:underline"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  </div>




</div>

}


     


      <Footer />
    </div>
  );
};

export default BlogDetail;

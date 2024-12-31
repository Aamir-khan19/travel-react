import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogsDestroyAsync, blogsIndexAsync } from '../../features/blog/blogSlice';
import conf from '../../../conf/conf';
import { useNavigate } from 'react-router-dom';

function AllBlogs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);
  const isLoading = useSelector(state => state.blogs.isLoading);
  const [currentDeletionId, setCurrentDeletionId] = useState(null);

  useEffect(()=>{
  if(blogs.length == 0){
    dispatch(blogsIndexAsync());
  }
  }, []);

  const handleUpdateBlog = function(id){
   navigate(`/dashboard-edit-blog/${id}`);
  }

  const handleDeleteBlog = function(id){
  if(!confirm("Are you sure you want to delete this blog")){
   
    return;
  }

  setCurrentDeletionId(id);
  dispatch(blogsDestroyAsync(id));
  }


  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      All Blogs
    </h2>

    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {blogs?.map((blog) => {

        if((isLoading) && (currentDeletionId == blog.id)){
          return   ( <div className=' flex justify-center h-[50vh] items-center'>

          <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

          </div>
          )
        }
        
        else{
        return ( <div
        key={blog?.id}
        className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300"
      >
        {/* Card Header */}
        <div className="relative p-2">
          <img
            src={`${conf.laravelBaseUrl}/${blog?.blog_image}`}
            className="w-full aspect-video object-contain"
          />
        
        </div>

        {/* Card Body */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {blog?.blog_title}
          </h3>
        
          <p className="text-sm text-gray-700 mt-1">
          Visibility: {blog?.blog_visibility}
          </p>


          {/* Info */}
          <div className="text-sm text-gray-700 mt-4 space-y-1">
            <p>
              <span className="font-medium">ID:</span> {blog?.id}
            </p>

            <p>
              <span className="font-medium">Last Update:</span>{' '}
              {blog.updated_at}
            </p>
            
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-3">
            <button onClick={()=>handleUpdateBlog(blog?.id)} className="px-4 py-2 w-full bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 transition">
              Edit ✏️
            </button>
            <button onClick={()=>handleDeleteBlog(blog?.id)} className="px-4 py-2 w-full bg-red-500 text-white text-sm font-medium rounded shadow hover:bg-red-600 transition">
              Archive 🗑️
            </button>
          </div>

        </div>
      </div>
      )

        }
        
        
}
      
      
      )}
    </div>
  </div>

  
  )
}

export default AllBlogs
















// {blogs?.map((blog) => {

//   if((isLoading) && (currentDeletionId == blog.id)){
//     return   ( <div className=' flex justify-center h-[50vh] items-center'>

//     <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

//     </div>
//     )
//   }
  
//   else{
//   return ( <div
//   key={blog?.id}
//   className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300"
// >
//   {/* Card Header */}
//   <div className="relative p-2">
//     <img
//       src={`${conf.laravelBaseUrl}/${blog?.blog_image}`}
//       className="w-full aspect-video object-contain"
//     />
  
//   </div>

//   {/* Card Body */}
//   <div className="p-4">
//     <h3 className="text-lg font-semibold text-gray-800">
//       {blog?.blog_title}
//     </h3>
  
//     <p className="text-sm text-gray-700 mt-1">
//     Visibility: {blog?.blog_visibility}
//     </p>


//     {/* Info */}
//     <div className="text-sm text-gray-700 mt-4 space-y-1">
//       <p>
//         <span className="font-medium">ID:</span> {blog?.id}
//       </p>

//       <p>
//         <span className="font-medium">Last Update:</span>{' '}
//         {blog.updated_at}
//       </p>
      
//     </div>

//     {/* Actions */}
//     <div className="mt-4 flex gap-3">
//       <button onClick={()=>handleUpdateBlog(blog?.id)} className="px-4 py-2 w-full bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 transition">
//         Edit ✏️
//       </button>
//       <button onClick={()=>handleDeleteBlog(blog?.id)} className="px-4 py-2 w-full bg-red-500 text-white text-sm font-medium rounded shadow hover:bg-red-600 transition">
//         Archive 🗑️
//       </button>
//     </div>

//   </div>
// </div>
// )

//   }
  
  
// }


// )}
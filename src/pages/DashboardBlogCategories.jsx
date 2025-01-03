import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import animatedLoader from "/Images/animated_images/delete_loader.svg";
import { blogCategoriesIndexAsync, blogCategoryDestroyAsync } from '../features/blog/blogSlice';
import DashboardSideBar from '../components/dashboard/DashboardSideBar';
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer';
import { Link } from 'react-router-dom';

function DashboardBlogCategories() {
     const dispatch = useDispatch();
      const blogCategories = useSelector(state => state.blogs.blogCategories);
      const isLoading = useSelector(state => state.blogs.isLoading);
      const isDeletionLoading = useSelector(state => state.blogs.isDeletionLoading);

      const [currentCategoryDeletionId, setCurrentCategoryDeletionId] = useState(null);

      const handleDelete = function(id){
        setCurrentCategoryDeletionId(id);
       dispatch(blogCategoryDestroyAsync(id));
      }
      
        useEffect(()=>{
        if(blogCategories?.length == 0){
            dispatch(blogCategoriesIndexAsync())
        }
        }, []);

  return (
     <>
     <DashboardSideBar />

<DashboardContentContainer>
    <div>


    {
      isLoading? <div className=' flex justify-center h-[50vh] items-center'>

      <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
    
      </div>

      :


      <div>


  <div className=' flex justify-end items-center py-2 px-2'>
      <Link to="/dashboard-create-blog-category" className=' bg-green-500 px-2 py-1 rounded text-white'>Create Blog Category</Link>
      </div>
      
       
        
            <div className='overflow-auto py-5 mb-5'>


            <table className='text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 mx-auto w-[90%]'>
              <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='text-nowrap'>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>S no.</th>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Category Name</th>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Created At</th>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Updated At</th>

                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Actions</th> 
                </tr>
              </thead>
    
              <tbody>
                {blogCategories?.length > 0 && blogCategories.map((category, i) => (
                  <tr key={category.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
                   <td className='px-3 py-2 border border-gray-500'>{i+1}</td>
                  

                   <td className='px-3 py-2 border border-gray-500'>{category?.category_name}</td>

                    <td className='px-3 py-2 border border-gray-500'>{category?.created_at}</td>
    
                    <td className='px-3 py-2 border border-gray-500'>{category?.updated_at}</td>

                   <td className='px-3 py-2 border border-gray-500'>

<div className='flex justify-between items-center'>
<Link to={`/dashboard-edit-blog-category/${category?.id}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1 text-center'>Edit</Link>

<button disabled={isDeletionLoading} onClick={() => handleDelete(category?.id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1 text-center'>
                        {
                            (isDeletionLoading && (currentCategoryDeletionId == category?.id))? <div className=" flex justify-center">
                                        <img src={animatedLoader} alt="" />
                            
                                        </div>
    
                            :
    
                            <span>Delete</span>
    }
                      </button> 
</div>

                     
    
                    </td>
                    
    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          </div>


}



    </div>
</DashboardContentContainer>

    
    
          </>
  )
}

export default DashboardBlogCategories
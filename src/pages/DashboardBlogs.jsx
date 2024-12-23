import React from 'react'
import { Link } from 'react-router-dom'
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContaier from "../components/dashboard/DashboardContentContainer"
import AllBlogs from '../components/dashboard_blogs/AllBlogs'

function DashboardBlogs(){
  return (
<>
<DashboardSideBar />

<DashboardContentContaier>
<div className=' flex justify-between items-center px-2 py-2 bg-gray-100'>
   
   <div className=' flex flex-col items-start justify-start'>
    <h1 className=' text-2xl font-semibold'>My Blogs</h1>
   </div>

  <Link to="/dashboard-create-blog" className=' px-4 py-1 rounded-xl text-white bg-purple-500'>
    Create Blog
  </Link>

   </div>


   <AllBlogs />

</DashboardContentContaier>
</>
  )
}

export default DashboardBlogs

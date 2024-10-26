import React from 'react'
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'
import SearchComponent from '../components/dashboard_my_itineraries/SearchComponent'
import { Link } from 'react-router-dom'

function DashboardMyItineraries() {
  

  return (
   <>
   <DashboardSideBar/>

   <DashboardContentContainer>
    <div>

   <div className=' flex justify-between items-center px-2 py-2 bg-gray-100'>
   
   <div className=' flex flex-col items-start justify-start'>
    <h1 className=' text-2xl font-semibold'>My Itineraries</h1>
    <p className=' text-sm text-gray-600'>Unlocking possibilities: Explore the potential and personalization of 'My Itineraries'</p>
   </div>

  <Link to="/dashboard-my-itineraries-builder" className=' px-4 py-1 rounded-xl text-white bg-purple-500'>
    Add Itinerary
  </Link>

   </div>


   <SearchComponent />

 </div>
   </DashboardContentContainer>
   </>
  )
}

export default DashboardMyItineraries

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import animatedLoader from "/Images/animated_images/delete_loader.svg";
import { Link } from 'react-router-dom';
import { deleteVerifiedLeadQueryForCustomizeItinerary, fetchVerifiedLeadsQueryForCustomizeItinerary } from '../features/lead/leadSlice';
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'


function UserVerifiedLeadsPhoneEmail() {
  const dispatch = useDispatch();
  const leadsQueriesCustomizeItinerary = useSelector(state => state.leads.leadsQueriesCustomizeItinerary);
  const isLoading = useSelector(state => state.leads.isLoading);
  const isDeletionLoading = useSelector(state => state.leads.isDeletionLoading);

  const [currentLeadDeletionId, setCurrentLeadDeletionId] = useState(null);
  
  const handleDelete = function(id){
    setCurrentLeadDeletionId(id);
   dispatch(deleteVerifiedLeadQueryForCustomizeItinerary(id));
  }
  
    useEffect(()=>{
    if(leadsQueriesCustomizeItinerary.length == 0){
        dispatch(fetchVerifiedLeadsQueryForCustomizeItinerary())
    }
    }, []);


  return (
    <>
    <DashboardSideBar/>

    <DashboardContentContainer>

{
 isLoading? <div className=' flex justify-center h-[50vh] items-center'>

 <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

 </div>

 :


<div>


    
    <div className=' flex justify-end items-center py-2 px-2'>
    <Link to="/dashboard-verifed-leads" className=' bg-green-500 px-2 py-1 rounded text-white'>View Verified Leads Phone Email</Link>
    </div>
   
    
        <div className='overflow-auto py-5 mb-5 mx-2'>
        <table className='text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 mx-auto w-[90%]'>
          <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-nowrap'>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>S no.</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Itinerary Id</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Name</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Email</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Phone Number</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Selected Destination</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Date of Arrival</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Places to Cover</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Number of Person</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Number of Adult</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Number of Child</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Child Age</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Message</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Query Date</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {leadsQueriesCustomizeItinerary?.length > 0 && leadsQueriesCustomizeItinerary.map((lead, i) => (
              <tr key={lead.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
               <td className='px-3 py-2 border border-gray-500'>{i+1}</td>
               <td className='px-3 py-2 border border-gray-500'>

                <div className=' flex justify-between items-center'>
                {lead?.itinerary_id}
                <Link to={`/package-details/${lead?.itinerary_id}`} className=' font-semibold text-blue-500 hover:underline hover:text-blue-600'>View</Link>
                </div>
              
                </td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.name}</td>

               <td className='px-3 py-2 border border-gray-500'>{lead?.email}</td>

                
                <td className='px-3 py-2 border border-gray-500'>{lead?.phone_number}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.selected_destination}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.date_of_arrival}</td>


                <td className='px-3 py-2 border border-gray-500 text-wrap min-w-[100px] md:min-w-[180px]'>{(lead?.places_to_cover?.length > 0) && 
                lead?.places_to_cover?.map((string)=> <span>{string}, </span> )
                }</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.no_of_person}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.no_of_adult}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.no_of_child}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.child_age}</td>

                <td className='px-3 py-2 border border-gray-500 min-w-[120px] md:min-w-[200px]'>{lead?.message}</td>

                <td className='px-3 py-2 border border-gray-500'>{lead?.created_at}</td>

                <td className='px-3 py-2 border border-gray-500'>
                 <button disabled={isDeletionLoading} onClick={() => handleDelete(lead?.id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1 text-center'>
                    {
                        isDeletionLoading && (currentLeadDeletionId == lead?.id)? <div className=" flex justify-center">
                                    <img src={animatedLoader} alt="" />
                        
                                    </div>

                        :

                        <span>Delete</span>
}
                  </button> 

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>


      </div>
      }


      </DashboardContentContainer>
      </>
  )
}

export default UserVerifiedLeadsPhoneEmail

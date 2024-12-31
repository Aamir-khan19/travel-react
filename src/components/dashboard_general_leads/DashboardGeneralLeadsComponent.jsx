import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGeneralLead, fetchGeneralLeads } from '../../features/lead/leadSlice';
import animatedLoader from "/Images/animated_images/delete_loader.svg";

function DashboardGeneralLeadsComponent() {
     const dispatch = useDispatch();
      const generalLeads = useSelector(state => state.leads.generalLeads);
      const isLoading = useSelector(state => state.leads.isLoading);
      const isDeletionLoading = useSelector(state => state.leads.isDeletionLoading);

      const [currentLeadDeletionId, setCurrentLeadDeletionId] = useState(null);

      const handleDelete = function(id){
        setCurrentLeadDeletionId(id);
       dispatch(deleteGeneralLead(id));
      }
      
        useEffect(()=>{
        if(generalLeads.length == 0){
            dispatch(fetchGeneralLeads())
        }
        }, []);

  return (
     <>
     {
      isLoading? <div className=' flex justify-center h-[50vh] items-center'>

      <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
    
      </div>

      :


    
       
        
            <div className='overflow-auto py-5 mb-5'>
            <table className='text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 mx-auto w-[90%]'>
              <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='text-nowrap'>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>S no.</th>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Name</th>
                <th className='px-3 py-2 border-2 border-gray-500 text-right'>Email</th>
                  <th className='px-3 py-2 border-2 border-gray-500 text-right'>Phone</th>
                  <th className='px-3 py-2 border-2 border-gray-500 text-right'>Destination</th>
                  <th className='px-3 py-2 border-2 border-gray-500 text-right'>Date of Arrival</th>
                  <th className='px-3 py-2 border-2 border-gray-500 text-right'>Query Date</th>
                
                
                  {
                    (JSON.parse(localStorage.getItem("token"))?.user?.role == "admin") &&
                    <th className='px-3 py-2 border-2 border-gray-500 text-right'>Actions</th>
                   }  
                
                </tr>
              </thead>
    
              <tbody>
                {generalLeads?.length > 0 && generalLeads.map((lead, i) => (
                  <tr key={lead.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
                   <td className='px-3 py-2 border border-gray-500'>{i+1}</td>
                  

                   <td className='px-3 py-2 border border-gray-500'>{lead?.name}</td>

                   <td className='px-3 py-2 border border-gray-500'>{lead?.email}</td>
    
                    
                    <td className='px-3 py-2 border border-gray-500'>{lead?.phone}</td>

                    <td className='px-3 py-2 border border-gray-500'>{lead?.selected_destination}</td>

                    <td className='px-3 py-2 border border-gray-500'>{lead?.date_of_arrival}</td>

                    <td className='px-3 py-2 border border-gray-500'>{lead?.created_at}</td>
    
                  {
(JSON.parse(localStorage.getItem("token"))?.user?.role == "admin") &&
                   <td className='px-3 py-2 border border-gray-500'>
                     <button disabled={isDeletionLoading} onClick={() => handleDelete(lead?.id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1 text-center'>
                        {
                            (isDeletionLoading && (currentLeadDeletionId == lead?.id))? <div className=" flex justify-center">
                                        <img src={animatedLoader} alt="" />
                            
                                        </div>
    
                            :
    
                            <span>Delete</span>
    }
                      </button> 
    
                    </td>
 }
                    
    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


}
    
          </>
  )
}

export default DashboardGeneralLeadsComponent

import React from 'react'

function CreateItineraryHeader({setCurrentComponent, currentComponent}) {
  return (
    <div className=' mt-5'>

    <div className=' bg-white py-2'>
     <ul className='flex justify-start gap-5 md:gap-10 flex-wrap items-center font-semibold'>
     
       <li>
         <button onClick={()=>setCurrentComponent(0)} className={` font-semibold ${(currentComponent== 0)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Itinerary</button>
       </li>

       <li>
         <button onClick={()=>setCurrentComponent(1)} className={` font-semibold ${(currentComponent== 1)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Destination Details</button>
       </li>

       <li>
       <button onClick={()=>setCurrentComponent(2)} className={` font-semibold ${(currentComponent== 2)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Inclusion</button>
       </li>

       <li>
       <button onClick={()=>setCurrentComponent(3)} className={` font-semibold ${(currentComponent== 3)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Exclusion</button>
       </li>

       <li>
       <button onClick={()=>setCurrentComponent(4)} className={` font-semibold ${(currentComponent== 4)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Terms And Conditions</button>
       </li>

      

       <li>
       <button onClick={()=>setCurrentComponent(5)} className={` font-semibold ${(currentComponent== 5)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Package Pricing</button>
       </li>

       <li>
       <button onClick={()=>setCurrentComponent(6)} className={` font-semibold ${(currentComponent== 6)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Hotel Details</button>
       </li>

     </ul>
    </div>
    
    </div>
  )
}

export default CreateItineraryHeader

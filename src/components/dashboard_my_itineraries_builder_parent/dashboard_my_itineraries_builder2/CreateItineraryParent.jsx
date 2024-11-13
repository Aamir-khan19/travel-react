import React from 'react'
import ItineraryForm from './create_itinerary_parent/ItineraryForm'
import CreateItinerary from './create_itinerary_parent/CreateItinerary'

function CreateItineraryParent() {
  return (
    <>

   <div className=' bg-gray-100 py-5'>

   <h1 className=' font-bold text-2xl'>Create Itinerary</h1>
   <p className=' text-gray-500'>Effortlessly craft your Itinerary with minimal data input: simplify the process and maximize impact.</p>

    <div className=' my-2 border border-gray-400 rounded-md flex flex-col items-center justify-between md:flex-row md:justify-between md:items-start p-5 bg-white w-[99%] mx-auto'>
   
   <CreateItinerary />
     
   <ItineraryForm />
   

    <div className="flex space-x-2 mt-6 md:hidden">
    <button className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
    </div>


    </div>
   

    </div>
    </>
  )
}

export default CreateItineraryParent

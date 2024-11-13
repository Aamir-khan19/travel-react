import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateItineraryHeader from './create_itinerary/CreateItineraryHeader'
import Itinerary from './create_itinerary/Itinerary';

function CreateItinerary() {
    const [currentComponent, setCurrentComponent] = useState(0);

  return (
    <>
    <div className=' md:mr-2'>

   
    <CreateItineraryHeader currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />

    {
      (currentComponent==0) && <Itinerary />
    }

</div>
    </>
  )
}

export default CreateItinerary

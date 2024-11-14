import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateItineraryHeader from './create_itinerary/CreateItineraryHeader'
import Itinerary from './create_itinerary/Itinerary';
import Inclusion from './create_itinerary/Inclusion';
import Exclusion from './create_itinerary/Exclusion';

function CreateItinerary() {
    const [currentComponent, setCurrentComponent] = useState(0);

  return (
    <>
    <div className=' md:mr-2'>

   
    <CreateItineraryHeader currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
    <hr className="border-gray-500 mb-4 border" />
    {
      (currentComponent==0) && <Itinerary setCurrentComponent={setCurrentComponent} />
    }

    {
      (currentComponent==1) && <Inclusion />
    }

    {
      (currentComponent==2) && <Exclusion />
    }

</div>
    </>
  )
}

export default CreateItinerary

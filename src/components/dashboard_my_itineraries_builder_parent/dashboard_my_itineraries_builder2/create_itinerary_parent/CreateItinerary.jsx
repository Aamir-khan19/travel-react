import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateItineraryHeader from './create_itinerary/CreateItineraryHeader'
import Itinerary from './create_itinerary/Itinerary';
import Inclusion from './create_itinerary/Inclusion';
import Exclusion from './create_itinerary/Exclusion';
import DestinationDetails from './create_itinerary/DestinationDetails';
import PriceComponent from './create_itinerary/PriceComponent';
import HotelDetails from './create_itinerary/HotelDetails';
import TermsAndConditions from './create_itinerary/TermsAndConditions';

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
      (currentComponent==1) && <DestinationDetails setCurrentComponent={setCurrentComponent} />
    }

    {
      (currentComponent==2) && <Inclusion setCurrentComponent={setCurrentComponent} />
    }

    {
      (currentComponent==3) && <Exclusion setCurrentComponent={setCurrentComponent} />
    }

    {
    (currentComponent==4) && <TermsAndConditions setCurrentComponent={setCurrentComponent} />
    }

  

    {
      (currentComponent == 5) && <PriceComponent setCurrentComponent={setCurrentComponent} />
    }


{
      (currentComponent == 6) && <HotelDetails  setCurrentComponent={setCurrentComponent} />
    }

</div>
    </>
  )
}

export default CreateItinerary

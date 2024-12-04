import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateItineraryHeader from './update_itinerary/UpdateItineraryHeader';
import Itinerary from './update_itinerary/Itinerary';
import Inclusion from './update_itinerary/Inclusion';
import Exclusion from './update_itinerary/Exclusion';
import DestinationDetails from './update_itinerary/DestinationDetail';
import HotelDetails from './update_itinerary/HotelDetails';
import TermsAndConditions from './update_itinerary/TermsAndConditions';
import PriceComponent from "./update_itinerary/PriceComponent";

function UpdateItinerary() {
    const [currentComponent, setCurrentComponent] = useState(0);

  return (
    <>
    <div className=' md:mr-2'>

   
    <UpdateItineraryHeader currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
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

export default UpdateItinerary

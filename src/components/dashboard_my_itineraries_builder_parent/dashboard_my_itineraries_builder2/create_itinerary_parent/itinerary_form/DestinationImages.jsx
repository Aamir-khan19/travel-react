import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDestinationImages } from '../../../../../features/itinerary/itinerarySlice';

function DestinationImages() {
    const dispatch = useDispatch();
    // const destinationImages = useSelector(state => state.itineraries.destinationImages);

    const handleDestinationImages = function(e){
    dispatch(setDestinationImages(e.target.files));
    }

  return (
    <>

     <label className='block text-gray-700 mt-3 mb-1'>  Destination Images</label>

    <div className=' overflow-x-scroll ' >
    <input
    multiple
          type="file"
          accept="image/*"
          onChange={(e)=>handleDestinationImages(e)}
        />

    </div>

    </>
  )
}

export default DestinationImages

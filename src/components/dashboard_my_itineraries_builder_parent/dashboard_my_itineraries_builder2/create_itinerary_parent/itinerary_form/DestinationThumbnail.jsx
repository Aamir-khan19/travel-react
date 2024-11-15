import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDestinationThumbnail } from '../../../../../features/itinerary/itinerarySlice';

function DestinationThumbnail() {
    const dispatch = useDispatch();
    const destinationThumbnail = useSelector(state => state.itineraries.destinationThumbnail);
   
    const [destinationThumbnailUrl, setDestinationThumbnailUrl] = useState(null);


    const handleDestinationThumbnail = function(e){
    dispatch(setDestinationThumbnail(e.target.files[0]));

    setDestinationThumbnailUrl(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <>

     <label className='block text-gray-700 mt-3 mb-1'>  Destination Thumbnail </label>

    <div className=' overflow-x-scroll ' >
    <input
          type="file"
          accept="image/*"
          onChange={(e)=>handleDestinationThumbnail(e)}
        />

        {
            destinationThumbnail?.name && <img src={destinationThumbnailUrl} alt="" />
        } 
    </div>

    </>
  )
}

export default DestinationThumbnail

import React, { useState } from 'react'
import { useDispatch} from 'react-redux'

function DestinationThumbnail({setDestinationThumbnail, destinationThumbnail}) {
    const [destinationThumbnailUrl, setDestinationThumbnailUrl] = useState(null);

    const handleDestinationThumbnail = function(e){
    if(e.target.files.length > 0){
      console.log("e.target.files[0", e.target.files[0])
      setDestinationThumbnail(e.target.files[0]);
      
    setDestinationThumbnailUrl(URL.createObjectURL(e.target.files[0]));

     }else{
      setDestinationThumbnail({});
      setDestinationThumbnailUrl(null);
     }

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

import React from 'react';

function DestinationImages({setDestinationImages}) {

    const handleDestinationImages = function(e){
    if(e.target.files.length > 0){
      setDestinationImages(e.target.files);

     }else{
      setDestinationImages([]);
     }
     
    }

  return (
    <>

     <label className='block text-gray-700 mt-3 mb-1'>Destination Images</label>

    <div className=' overflow-x-scroll ' >
    <input
    multiple
          type="file"
          name="destination_images_files"
          accept="image/*"
          onChange={(e)=>handleDestinationImages(e)}
        />

    </div>

    </>
  )
}

export default DestinationImages

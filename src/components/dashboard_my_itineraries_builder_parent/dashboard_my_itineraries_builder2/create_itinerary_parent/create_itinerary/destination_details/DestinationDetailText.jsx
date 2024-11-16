import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import { setDestinationDetailText } from '../../../../../../features/itinerary/itinerarySlice';


const DestinationDetailText = () => {
  const dispatch = useDispatch();
  const destinationDetailText = useSelector(state => state.itineraries.destinationDetailText);


  const modules = {
    toolbar: [
      // Add a dropdown with options for 'Heading' and 'Paragraph'
      [{ header: [1, 2, false] }], // 1 -> Heading, false -> Paragraph
    ],
  };


  return (
<>

<button onClick={()=>{
  console.log("dwatils text -> ", destinationDetailText);
}}>detail text</button>

<div className="p-4 mb-10 md:mb-2">

<label className="block text-lg font-bold mb-2">Destination Detail</label>

<ReactQuill
theme="snow"
        value={destinationDetailText}
        onChange={(value) =>dispatch(setDestinationDetailText(value))}
        modules={modules}
        formats={["header"]} 
        placeholder="Enter destination details..."
         className=" h-36 text-gray-700 bg-white"
      />


</div>



    </>
  );
};

export default DestinationDetailText;

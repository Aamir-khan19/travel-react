import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryDetails } from '../../../../../features/itinerary/itinerarySlice';

const Inclusion = () => {
  const dispatch = useDispatch();
  const itineraryDetails = useSelector(state => state.itineraries.itineraryDetails);

  const modules = {
    toolbar: [
      [{ 'bold': true }, { 'italic': true }, { 'underline': true }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ],
  };

  return (
    <div className="p-4 mb-10 md:mb-2">

      <label className="block text-lg font-bold mb-2">Inclusion</label>
      <ReactQuill
        theme="snow"
        value={itineraryDetails?.inclusion}
        onChange={(val)=> dispatch(setItineraryDetails({inclusion: val}))}
        placeholder="Add Inclusion"
        modules={modules}
        className=" h-36 text-gray-700 bg-white"
      />

    </div>
  );
};

export default Inclusion;

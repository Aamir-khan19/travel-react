import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryDetails } from '../../../features/itinerary/itinerarySlice';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const TermsAndConditions = ({setCurrentComponent}) => {
  const dispatch = useDispatch();
  const itineraryDetails = useSelector(state => state.itineraries.itineraryDetails);

  const modules = {
    toolbar: [
      [{ 'bold': true }, { 'italic': true }, { 'underline': true }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ],
  };


  const handleBack = function(){
  setCurrentComponent(3)
  }

  const handleNext = function(){
  setCurrentComponent(5)
  }


  return (

    <>  
   

    <div className="p-4 mb-10 md:mb-2">

      <label className="block text-lg font-bold mb-2">Terms and Conditions</label>
      <ReactQuill
        theme="snow"
        value={itineraryDetails?.terms_and_conditions}
        onChange={(val)=> dispatch(setItineraryDetails({terms_and_conditions: val}))}
        placeholder="Terms And Conditions"
        modules={modules}
        className=" h-52 text-gray-700 bg-white"
      />

   

    </div>





    <div className=' mt-10 flex justify-between'>
      <button onClick={handleBack} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      <HiChevronLeft className="mr-1" /> Back
    </button>
    

      <button onClick={handleNext} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      Next <HiChevronRight className="ml-1" />
    </button>
      </div>

    </>
  );
};

export default TermsAndConditions;

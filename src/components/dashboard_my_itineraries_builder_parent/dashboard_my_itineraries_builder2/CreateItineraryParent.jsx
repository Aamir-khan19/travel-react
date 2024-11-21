import React from 'react'
import ItineraryForm from './create_itinerary_parent/ItineraryForm'
import CreateItinerary from './create_itinerary_parent/CreateItinerary'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';

function CreateItineraryParent() {
const dispatch = useDispatch();
const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
const daysInformation = useSelector(state => state.itineraries.daysInformation);
const destinationDetailText = useSelector(state => state.itineraries.destinationDetailText);
const itineraryDetails = useSelector(state => state.itineraries.itineraryDetails);
const hotelDetails = useSelector(state => state.itineraries.hotelDetails);
const destinationThumbnail = useSelector(state=> state.itineraries.destinationThumbnail);
const destinationImages = useSelector(state => state.itineraries.destinationImages);


const handleCreateItineraryAndItineraryForm = function(){
  console.log("CreateItineraryForm.jsx itineararForm", itineraryForm, "daysInformation", daysInformation, "destinationDetailText",  destinationDetailText, "itineariesDetails", itineraryDetails, "hotelDetails ", hotelDetails, "destinationThumbanil", destinationThumbnail, "destinationImages", destinationImages);


  if(!itineraryForm?.title){
    toast.error("Please Fill Itinerary Title", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    
    return;
  }


  if(!itineraryForm?.visibility){
    toast.error("Please Select Itinerary Visibility", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });

    return;
  }

  if(!itineraryForm?.type){
    toast.error("Please Select Itinerary Type", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }

  if(!itineraryForm?.duration){
    toast.error("Please Select Itinerary Duration", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }


  if(!itineraryForm?.selectedDestination){
    toast.error("Please Select Itinerary Destination", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }

  if(!itineraryForm?.selectedThemes){
    toast.error("Please Select Itinerary Theme", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }


  if(!destinationThumbnail?.name){
    toast.error("Please Select Destination Thumbnail", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }


  if(destinationImages?.length == 0){
    toast.error("Please Select Destination Images", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });
    return;
  }
  


}

  return (
    <>

   <div className=' bg-gray-100 py-5'>

   <h1 className=' font-bold text-2xl'>Create Itinerary</h1>
   <p className=' text-gray-500 mb-5'>Effortlessly craft your Itinerary with minimal data input: simplify the process and maximize impact.</p>


    <div className='border border-gray-400 rounded-md pb-5 bg-white w-[99%] mx-auto'>

    <div className=' my-2 flex flex-col items-center justify-between md:flex-row md:justify-between md:items-start p-5'>
   
   <CreateItinerary />
     
   <ItineraryForm />
   

    <div className="flex space-x-2 mt-6 md:hidden">
    <button className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
    </div>


    </div>

     {/* Publish button div starts here  */}
    <div className=" hidden md:flex justify-center space-x-2 mt-6">
    <button onClick={()=>handleCreateItineraryAndItineraryForm()} className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
    </div>
   {/* Publish button div ends here  */}

    </div>

   

   <ToastContainer />

    </div>
    </>
  )
}

export default CreateItineraryParent

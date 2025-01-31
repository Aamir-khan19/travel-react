import React, { useEffect, useState } from 'react'
import ItineraryForm from './create_itinerary_parent/ItineraryForm'
import CreateItinerary from './create_itinerary_parent/CreateItinerary'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import { itinerariesStoreAsync, resetErrors, resetItinerary, setIsItineraryCreated } from '../../../features/itinerary/itinerarySlice';
import { useNavigate } from 'react-router-dom';

function CreateItineraryParent() {
const dispatch = useDispatch();
const navigate = useNavigate();

const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
const daysInformation = useSelector(state => state.itineraries.daysInformation);
const destinationDetailText = useSelector(state => state.itineraries.destinationDetailText);
const itineraryDetails = useSelector(state => state.itineraries.itineraryDetails);
const hotelDetails = useSelector(state => state.itineraries.hotelDetails);
const isLoading = useSelector(state => state.itineraries.isLoading);
const isItineraryCreated = useSelector(state => state.itineraries.isItineraryCreated);
const apiErrors = useSelector(state => state.itineraries.errors);

const [destinationThumbnail, setDestinationThumbnail] = useState({});
const [destinationImages, setDestinationImages] = useState([]);


const handleCreateItineraryAndItineraryForm = function(){
  dispatch(resetErrors());
  console.log("destinationthumbnail CreateIrtinearayPraent.jsx", destinationThumbnail);
  console.log("Destination Images CreateItinearaParent.jsx", destinationImages);


  console.log("CreateItineraryForm.jsx itineararForm", itineraryForm, "daysInformation", daysInformation, "destinationDetailText",  destinationDetailText, "itineariesDetails", itineraryDetails, "hotelDetails ", hotelDetails, "destinationThumbanil", destinationThumbnail, "destinationImages", destinationImages);


  if(!itineraryForm?.title?.trim()){
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


  if(!itineraryForm?.visibility?.trim()){
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

  if(!itineraryForm?.type?.trim()){
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

  if(!itineraryForm?.duration?.value){
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


  if(!itineraryForm?.selectedDestination?.value){
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

  if(itineraryForm?.selectedThemes?.length == 0){
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
  



  if (itineraryForm?.duration?.value) {
    let daysValue = Number(itineraryForm?.duration?.value?.split("/")[0]?.replace("D", ""));
 
    if(daysInformation?.length != daysValue){
      toast.error("Please Fill All Days Itinerary", {
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


  if(!destinationDetailText?.trim()){
    toast.error("Please write something about destination", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });

    return;
  }


  if(!hotelDetails[0]?.price){

    if(!hotelDetails[0]?.price){
      toast.error("Please input super deluxe hotel price", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    }

    return;

  }



  if(!hotelDetails[1]?.price){

    if(!hotelDetails[1]?.price){
      toast.error("Please input deluxe hotel price", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    }

    return;

  }



  if( !hotelDetails[2]?.price){

    if(!hotelDetails[2]?.price){
      toast.error("Please input standard hotel price", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    }

    return;

  }


let itineraryPayloadObject = {
  days_information_string: JSON.stringify(daysInformation),
 destination_detail:  destinationDetailText,
 hotel_details_string: JSON.stringify(hotelDetails),
 title: itineraryForm?.title,
 meta_title: itineraryForm?.metaTitle,
 keyword: itineraryForm?.keyword,
 meta_description: itineraryForm?.metaDescription,
 itinerary_visibility: itineraryForm?.visibility,
 itinerary_type: itineraryForm?.type,
 duration_string: JSON.stringify(itineraryForm?.duration),
 selected_destination_string: JSON.stringify(itineraryForm?.selectedDestination),
 itinerary_theme_string: JSON.stringify(itineraryForm?.selectedThemes),
 destination_thumbnail_file: destinationThumbnail,
 destination_images_files: destinationImages
};


if(itineraryDetails?.pricing){
  itineraryPayloadObject.pricing = itineraryDetails.pricing;
}

if(itineraryDetails?.inclusion){
  itineraryPayloadObject.inclusion = itineraryDetails.inclusion;
}

if(itineraryDetails?.exclusion){
itineraryPayloadObject.exclusion = itineraryDetails.exclusion;
}

if(itineraryDetails?.terms_and_conditions?.trim()){
itineraryPayloadObject.terms_and_conditions = itineraryDetails.terms_and_conditions;
}

dispatch(itinerariesStoreAsync(itineraryPayloadObject));

}


useEffect(()=>{
  if(isItineraryCreated){
    dispatch(resetItinerary());
    dispatch(setIsItineraryCreated());
    navigate("/dashboard-my-itineraries");
  }
  }, [isItineraryCreated, isLoading]);
  
  

  useEffect(() => {
    if (apiErrors?.errors?.destination_thumbnail_file){
      setTimeout(()=>{
        toast.error(apiErrors.errors.destination_thumbnail_file[0], {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
      }, 100);
    }
  
    if (apiErrors?.message) {
      setTimeout(() => {
        toast.error(apiErrors?.message, {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
      }, 50);
    }
    
  }, [apiErrors]);


  return (
    <>
    {
isLoading? <div className=' flex justify-center h-[50vh] items-center'>

<div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

</div>

:

  

   <div className=' bg-gray-100 py-5'>

   <h1 className=' font-bold text-2xl'>Create Itinerary</h1>
   <p className=' text-gray-500 mb-5'>Effortlessly craft your Itinerary with minimal data input: simplify the process and maximize impact.</p>


    <div className='border border-gray-400 rounded-md pb-5 bg-white w-[99%] mx-auto'>

    <div className=' my-2 flex flex-col items-center justify-between md:flex-row md:justify-between md:items-start p-5'>
   
   <CreateItinerary />
     
   <ItineraryForm setDestinationThumbnail={setDestinationThumbnail} setDestinationImages={setDestinationImages} destinationThumbnail={destinationThumbnail}/>
   

    <div className="flex space-x-2 mt-6 md:hidden">
    <button onClick={()=>handleCreateItineraryAndItineraryForm()} className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
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

}
    </>
  )
}

export default CreateItineraryParent

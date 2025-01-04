import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import animatedLoader from "/Images/animated_images/loader_white_bg.svg";
import { publicStoreLeadQueryForCustomizeItineraryAsync, setIsCustomizeItineraryCreated } from "../../features/public/publicSlice";

const CustomizeItineraryForm = () => {
  const dispatch = useDispatch();
  const particularItinerary = useSelector((state) => state.public.particularItinerary);
  const isLoading = useSelector(state => state.public.leadIsLoading);
  const isCustomizeItineraryCreated = useSelector(state => state.public.isCustomizeItineraryCreated);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dateOfArrival: "",
    placesToCoverArray: [],
    noOfPersons: "",
    noOfAdults: "",
    noOfChildren: "",
    childAge: "",
    message: "",
  });

  const [customItineraryFlashMessage, setCustomItineraryFlashMessage] = useState("");

  const [placesToCoverInputField, setPlacesToCoverInputField] = useState("");

  const handlePlacesToCoverArray = function(){
    let newPlacesToCoverArray = formData?.placesToCoverArray?.includes(placesToCoverInputField) ? formData.placesToCoverArray : [...formData.placesToCoverArray, placesToCoverInputField];
    setFormData({ ...formData, placesToCoverArray: newPlacesToCoverArray });
    setPlacesToCoverInputField("");
  }

  const handleRemovePlace = (index) => {
    const updatedPlacesToCoverArray = formData.placesToCoverArray.filter(
      (place, i) => i !== index
    );
    setFormData({ ...formData, placesToCoverArray: updatedPlacesToCoverArray });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    let customItineraryObject = {
      itinerary_id: particularItinerary?.id,
      name: formData?.name,
      email: formData?.email,
      phone_number: formData?.phone,
      selected_destination: formData?.destination,
      date_of_arrival: formData?.dateOfArrival,
      // places_to_cover: formData?.placesToCoverArray,
      no_of_person: formData?.noOfPersons,
      no_of_adult: formData?.noOfAdults,
      no_of_child: formData?.noOfChildren,
      child_age: formData?.childAge,
      message: formData?.message
    }

    if(formData?.placesToCoverArray?.length > 0){
      customItineraryObject.places_to_cover = formData?.placesToCoverArray
    }


  dispatch(publicStoreLeadQueryForCustomizeItineraryAsync(customItineraryObject));

    
  };


  console.log("placesToCoverInputField", placesToCoverInputField, formData.placesToCoverArray);

  useEffect(()=>{
    if(particularItinerary){

      console.log("particularItinerary", particularItinerary);
      setFormData({
        ...formData,
        destination: particularItinerary?.selected_destination?.label
      })
    }
  }, [particularItinerary]);


  useEffect(()=>{
  if(isCustomizeItineraryCreated){
      dispatch(setIsCustomizeItineraryCreated());
    
            setCustomItineraryFlashMessage(
              "Form submitted successfully you will be contacted soon"
            );


    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      dateOfArrival: "",
      placesToCoverArray: [],
      noOfPersons: "",
      noOfAdults: "",
      noOfChildren: "",
      childAge: "",
      message: "",
    });
  }
  }, [isCustomizeItineraryCreated]);


   useEffect(() => {
      if (customItineraryFlashMessage) {
        setTimeout(() => {
          setCustomItineraryFlashMessage("");
        }, 5000);
      }
    }, [customItineraryFlashMessage]);

  return (
    <div className=" bg-blue-900 p-4 rounded-lg shadow-lg max-w-3xl mx-auto">

<div
              className={`bg-white rounded px-2 py-1 ${
                customItineraryFlashMessage ? "block" : "hidden"
              }`}
            >
              <h1 className=" text-center text-green-500 font-bold">
                {customItineraryFlashMessage}
              </h1>
            </div>


      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Customize Your Itinerary
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mandatory Fields */}
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
          readOnly
            type="text"
            name="destination"
            value={formData.destination}
            placeholder="Destination"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            name="dateOfArrival"
            value={formData.dateOfArrival}
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Optional Fields */}
        <div className="space-y-3">

        <div className=" mb-5 mt-8">

        {
          formData?.placesToCoverArray?.length > 0 && 

          <div className=" bg-white p-2 rounded-md shadow-sm flex flex-wrap gap-2">
            {
              formData?.placesToCoverArray?.map((place, index) => (
                <span key={index} className=" bg-blue-400 text-white px-2 py-1 rounded-md mr-2">
                  {place} 


                  <button 
                  type="button"
          onClick={() => handleRemovePlace(index)} 
          className="ml-2 text-red-600 hover:text-red-800 text-2xl font-semibold"
        >
          &times;
        </button>

                </span>
              ))
            }
          </div>
        }  

        <input
        type="text"
        name="placesToCover"
        value={placesToCoverInputField}
        onChange={(e)=>setPlacesToCoverInputField(e.target.value)}
        placeholder="Places to Cover"
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 my-2"
        />

        <button 
        type="button"
        onClick={handlePlacesToCoverArray} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
        >
        Add
        </button>
        </div>

          


           {/* Number of Persons */}
  <select
    name="noOfPersons"
    value={formData.noOfPersons}
    onChange={handleChange}
    className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="" disabled>
      Number of Persons
    </option>
    {Array.from({ length: 40 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>

  {/* Number of Adults */}
  <select
    name="noOfAdults"
    value={formData.noOfAdults}
    onChange={handleChange}
    className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="" disabled>
      Number of Adults
    </option>
    {Array.from({ length: 20 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>

  {/* Number of Children */}
  <select
    name="noOfChildren"
    value={formData.noOfChildren}
    onChange={handleChange}
    className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="" disabled>
      Number of Children
    </option>
    {Array.from({ length: 20 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>

  {/* Child Age */}
  <select
    name="childAge"
    value={formData.childAge}
    onChange={handleChange}
    className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="" disabled>
      Child Age
    </option>
    {Array.from({ length: 15 }, (_, i) => (
      <option key={i} value={i}>
        {i}
      </option>
    ))}
  </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Message"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
          disabled={isLoading}
            type="submit"
            className=" w-full font-bold text-lg bg-white text-blue-900 px-4 py-2 rounded-md shadow-md hover:from-green-500 hover:to-sky-600 transition duration-300"
          >
            {
            isLoading? <div className=" flex justify-center">
            <img src={animatedLoader} alt="" />

            </div>
            :

            <span>Submit</span>
            }  
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomizeItineraryForm;

// Itinerary.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDaysInformation, setSliceDaysInformation } from '../../../../../features/itinerary/itinerarySlice';
// import Inclusion from './Inclusion';


const Itinerary = () => {
    const dispatch = useDispatch();

    const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
    const daysInformation = useSelector(state => state.itineraries.daysInformation);

    const [daysData, setDaysData] = useState([
        { id: 1, day: 1, title: 'Day 1 Information' },
        { id: 2, day: 2, title: 'Day 2 Information' }
      ]);
    
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const [cityName, setCityName] = useState("");
  const [cityNameReqErr, setCityNameReqErr] = useState("");

  const handleNext = () => {
    console.log("handleNext currentDayIndex days.length", currentDayIndex, daysData?.length);
   
    setCityNameReqErr("");

    if(!cityName?.trim()){
     setCityNameReqErr("Please enter the city name");

     return;
    }

    if (currentDayIndex < daysData.length - 1) {
      setCurrentDayIndex(currentDayIndex+1);
      dispatch(setDaysInformation({day: `${currentDayIndex+1}`, cityName: cityName}));
      
      setCityName("");
    } else {
      dispatch(setDaysInformation({day: `${currentDayIndex+1}`, cityName: cityName}));
      setIsEnd(true);
    }
  };



  const handleCurrentDayIndex = function(index){
    setCityNameReqErr("");

    if(index != 0){
      for (let i = 0; i <= index; i++) {
        let cityExists = daysInformation.find((element)=> element?.day == (i+1) );
        
        if(!cityExists){
         setCityNameReqErr(`Please enter city name for day ${i+1}`);
         setCurrentDayIndex(i);
          return;
        }
      }
    }
    setCurrentDayIndex(index);
  }

 
  console.log("Itinerary.jsx itineararyForm ", itineraryForm);

  useEffect(()=>{
  if(itineraryForm?.duration?.value){
    console.log("itinerarForm.jsx", itineraryForm?.duration?.value);

    let days = itineraryForm?.duration?.value?.split("/");

    let daysValue = Number(days[0]?.replace("D", ""));

    let newDaysData = [];

    for (let index = 0; index < daysValue; index++) {

        console.log("itinerary.jsx ", index, daysValue);
        
        newDaysData?.push({id: (index+1), day: (index+1), title: `Day ${(index+1)} Information` });

    }

    setDaysData(newDaysData);
    setCurrentDayIndex(0);
    dispatch(setSliceDaysInformation(daysValue));

  }
  }, [itineraryForm])

  return (
    <div className=" md:min-h-screen">

<button onClick={()=>{
  console.log("lol", daysData)
}}>see days data</button>      

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex">

              <div className="w-1/4 border-r border-gray-200 pr-4">
                <div className="text-lg font-semibold mb-4">Day Plan</div>
                <ul  className="list-disc">
                  {daysData.map((day, index) => (
                    <li
                    onClick={()=>handleCurrentDayIndex(index)}
                      key={day.id}
                      className={`py-2 cursor-pointer ${index == currentDayIndex ? ' font-bold text-gray-700 text-xl' : 'text-gray-500'}`}
                    >
                     Day {day?.id}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-3/4 pl-6">
                <h2 className="text-xl font-semibold mb-4 bg-purple-400 rounded-lg px-4 py-2  text-white">{ daysData[currentDayIndex]?.title}</h2>
                <div className="mb-4">
                  <label className=" bg-gray-500 px-2 py-1 rounded-t-md inline-block text-white">City</label>
                  
                  <p className="text-gray-500 my-4">Craft extraordinary journeys by selecting the perfect destination for travelers.</p>
                  
                  <input
                  value={cityName}
                  onChange={(e)=>setCityName(e.target.value)}
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter city name"
                  />

                  <p className=' text-sm text-red-500 w-[200px]'>{cityNameReqErr}</p>
                </div>
               

                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>

            </div>
          </div>
        
      
    </div>
  );
};

export default Itinerary;

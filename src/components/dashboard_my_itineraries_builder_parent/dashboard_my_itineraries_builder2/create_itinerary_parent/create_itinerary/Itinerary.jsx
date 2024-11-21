// Itinerary.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDaysInformation, setSliceDaysInformation } from '../../../../../features/itinerary/itinerarySlice';
import { HiChevronRight } from 'react-icons/hi';


const Itinerary = ({setCurrentComponent}) => {
    const dispatch = useDispatch();

    const itineraryForm = useSelector(state => state.itineraries.itineraryForm);
    const daysInformation = useSelector(state => state.itineraries.daysInformation);

    const [daysData, setDaysData] = useState([
        { id: 1, day: 1, title: 'Day 1 Information' },
        { id: 2, day: 2, title: 'Day 2 Information' }
      ]);
    
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const [locationName, setLocationName] = useState("");
  const [locationNameReqErr, setLocationNameReqErr] = useState("");

  const [locationDetail, setLocationDetail] = useState("");
  const [locationDetailReqErr, setLocationDetailReqErr] = useState("");


  // handleNext function starts here
  const handleNext = () => {
    console.log("handleNext currentDayIndex days.length", currentDayIndex, daysData?.length);
   
    setLocationNameReqErr("");
    setLocationDetailReqErr("");

    if(!locationName?.trim()){
     setLocationNameReqErr("Please enter the location name");

     return;
    }

    if(!locationDetail?.trim()){
      setLocationDetailReqErr("Please enter the location description");
 
      return;
     }

    if (currentDayIndex < daysData.length - 1) {
      setCurrentDayIndex(currentDayIndex+1);
      dispatch(setDaysInformation({day: `${currentDayIndex+1}`, locationName: locationName, locationDetail: locationDetail}));
      
      setLocationName("");
      setLocationDetail("");

    } else {
      dispatch(setDaysInformation({day: `${currentDayIndex+1}`, locationName: locationName, locationDetail: locationDetail}));

      setCurrentComponent(1);
      setIsEnd(true);
    }
  };
  // handleNext function ends here


// direct navigate to particular day function starts here
  const handleCurrentDayIndex = function(index){
    setLocationNameReqErr("");

    if(index != 0){
      for (let i = 0; i <= index; i++) {
        let locationExists = daysInformation.find((element)=> element?.day == (i+1) );
        
        if(!locationExists){
          setLocationName("");
          setLocationDetail("");
          setLocationDetailReqErr(`Please enter localtion description for day ${i+1}`);
         setLocationNameReqErr(`Please enter location name for day ${i+1}`);
         setCurrentDayIndex(i);
          return;
        }
      }

    }

    setCurrentDayIndex(index);
  }
  // direct navigate to particular day function ends here

 
  console.log("Itinerary.jsx itineararyForm ", itineraryForm);

  // useEffect starts here 
  useEffect(() => {
    if (itineraryForm?.duration?.value) {
      let daysValue = Number(itineraryForm?.duration?.value?.split("/")[0]?.replace("D", ""));
      let newDaysData = Array.from({ length: daysValue }, (_, i) => ({
        id: i + 1,
        day: i + 1,
        title: `Day ${i + 1} Information`
      }));
      setDaysData(newDaysData);
      setCurrentDayIndex(0);
      dispatch(setSliceDaysInformation(daysValue));
    }
  }, [itineraryForm, dispatch]);
  // useEffect ends here 


  // useEffect starts here
  useEffect(()=>{
  // if((daysInformation?.length - 1) == currentDayIndex){
   if(daysInformation[currentDayIndex]?.locationName && daysInformation[currentDayIndex]?.locationDetail){
    setLocationName(daysInformation[currentDayIndex]?.locationName);
    setLocationDetail(daysInformation[currentDayIndex]?.locationDetail);
   }
  // }
  }, [daysInformation, currentDayIndex]);
  // useEffect ends here

  return (
    <div className=" md:min-h-screen">

          <div className="bg-white shadow rounded-lg md:p-6">



        {/* list of days div starts here  */}
        <div className="text-lg font-semibold md:hidden">Day Plan</div>
        <div className=" w-[90vw] overflow-x-scroll md:hidden mb-5 bg-gray-100">
        

        <div className="flex space-x-4 py-2 ">
        {daysData.map((day, index) => (
        <div
        key={index}
        className={`px-4 py-2 min-w-[90px] max-w-[120px] text-center rounded-md cursor-pointer transition-colors duration-200 ${
        index == currentDayIndex
        ? 'bg-gray-500 text-white'
        : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleCurrentDayIndex(index)}
        >
        Day {day?.id}
        </div>
        ))}
        </div>
        </div>
        {/* list of days div ends here  */}


            <div className="flex">


              <div className=" hidden md:block md:w-1/4 border-r border-gray-200 pr-4">
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

              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-xl font-semibold mb-4 bg-purple-400 rounded-lg px-4 py-2  text-white">{ daysData[currentDayIndex]?.title}</h2>
                <div className="mb-4">
                  <label className=" bg-gray-500 px-2 py-1 rounded-t-md inline-block text-white">Location</label>
                  
                  <p className="text-gray-500 my-4">Craft extraordinary journeys by selecting the perfect destination for travelers.</p>
                  
                  <input
                  value={locationName}
                  onChange={(e)=>setLocationName(e.target.value)}
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location title"
                  />

                  <p className=' text-sm text-red-500 w-[250px]'>{locationNameReqErr}</p>


                  <textarea
                  value={locationDetail}
                  onChange={(e)=>setLocationDetail(e.target.value)}
                  type="text"
                  className=" mt-5 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter location description"
                   ></textarea>
<p className=' text-sm text-red-500 w-[250px]'>{locationDetailReqErr}</p>

                </div>
               

                <div className="flex justify-end">


                  <button onClick={handleNext} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
      Next <HiChevronRight className="ml-1" />
    </button>

                </div>
              </div>

            </div>
          </div>
        
      
    </div>
  );
};

export default Itinerary;

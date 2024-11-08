import React, { useRef, useState } from 'react';
import DashboardSideBar from '../components/dashboard/DashboardSideBar';
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer';
import TourSelection from '../components/dashboard_my_itineraries_builder/TourSelection';
import ItineraryTheme from '../components/dashboard_my_itineraries_builder/ItineraryTheme';
import UploadModal from '../components/dashboard_my_itineraries_builder/UploadModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardMyItinerariesBuilder = () => {
  const createNewRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itineraryFile, setItineraryFile] = useState({});

  const notify = () => toast.error("Please Fill Tour Destinations",  {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true
  });


  return (
<>
<DashboardSideBar />

<DashboardContentContainer>


<div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">Create Itinerary</h1>
      <p className="text-gray-600 mb-6">
        Effortlessly craft your itinerary with minimal data input: simplify the process and maximize impact.
      </p>

      {/* Build Itinerary */}
      <div className="mb-4 bg-white border rounded border-gray-300 px-2 py-2">
        <h2 className="font-bold text-lg mb-2">Build Itinerary</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <label className="flex items-center">
            <input ref={createNewRef} type="radio" name="buildItinerary" className="mr-2" defaultChecked />
            Create New
          </label>

          <label className="flex items-center md:px-4">
            <input type="radio" name="buildItinerary" className="mr-2" onClick={(e)=>setIsModalOpen(true)}
             />
            Upload Document (.pdf, .docx files only)
          </label>



{isModalOpen && <UploadModal setIsModalOpen={setIsModalOpen} setItineraryFile={setItineraryFile} createNewRef={createNewRef} />}

          <label className="flex flex-col">
            <div>
            <input type="radio" name="buildItinerary" className="mr-2" disabled />
            Copy from library
            </div>
            
            <span className=' text-red-500'>Coming Soon</span>
          </label>
        </div>
      </div>

      <hr className="my-4" />

      {/* Itinerary Visibility */}
      <div className="mb-4 bg-white border rounded border-gray-300 px-2 py-2">
        <h2 className="font-bold text-lg mb-2">
          Itinerary Visibility <span className="text-gray-500">(Control how this itinerary is viewed)</span>
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <label className="flex flex-col">
            <div>
            <input type="radio" name="visibility" className="mr-2" defaultChecked />
            Public
            </div>
            
            <span className="ml-2 text-gray-500 hidden sm:inline text-sm">Visible to everyone</span>
          </label>

          <label className="flex flex-col md:px-4">
          <div>
          <input type="radio" name="visibility" className="mr-2" />
          Private
          </div>
            
            <span className="ml-2 text-gray-500 hidden sm:inline text-sm">Itinerary viewable only by the shared traveler</span>
          </label>


          <label className="flex flex-col">
            <div>
            <input type="radio" name="visibility" className="mr-2" disabled />
            Password protected
            </div>
            <span className="text-red-500 ml-1">Coming Soon</span>
          </label>
        </div>
      </div>

      <hr className="my-4" />

      {/* Itinerary Type */}
      <div className="mb-4 bg-white border rounded border-gray-300 px-2 py-2">
      <h2 className="font-bold text-lg mb-2">Itinerary Type</h2>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">

      <label className="flex flex-col md:pr-4">
      <div>
      <input type="radio" name="itineraryType" className="mr-2" defaultChecked />
      Flexible departure
      </div>
      <span className="ml-2 text-gray-500 hidden sm:inline text-sm">Departure dates can be changed by customers</span>
      </label>

      <label className="flex flex-col">
      <div>
      <input type="radio" name="itineraryType" className="mr-2" />
      Fixed departure
      </div> 
      <span className="ml-2 text-gray-500 hidden sm:inline text-sm">Departure dates cannot be changed by customers</span>
      </label>
      </div>
      </div>

      <hr className="my-4" />

      <TourSelection />

      <hr className='my-4' />

      <ItineraryTheme />

      <hr className='my-4' />

      <div className=' flex justify-center'>
      <button onClick={notify} className=' bg-purple-500 px-4 py-1 rounded-full text-white'>Next</button>
    </div>

    </div>

    <ToastContainer />

    </DashboardContentContainer>

    </>
  );
};

export default DashboardMyItinerariesBuilder;
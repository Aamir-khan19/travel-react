import React from 'react';
import DashboardSideBar from '../components/dashboard/DashboardSideBar';
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer';

const DashboardMyItinerariesBuilder = () => {

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
            <input type="radio" name="buildItinerary" className="mr-2" defaultChecked />
            Create New
          </label>
          <label className="flex items-center">
            <input type="radio" name="buildItinerary" className="mr-2" />
            Upload Document (.pdf, .docx files only)
          </label>
          <label className="flex items-center">
            <input type="radio" name="buildItinerary" className="mr-2" disabled />
            <span>Copy from library <span className="text-red-500">Coming Soon</span></span>
          </label>
        </div>
      </div>

      <hr className="my-4" />

      {/* Itinerary Visibility */}
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">
          Itinerary Visibility <span className="text-gray-500">(Control how this itinerary is viewed)</span>
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <label className="flex items-center">
            <input type="radio" name="visibility" className="mr-2" defaultChecked />
            Public
            <span className="ml-2 text-gray-500 hidden sm:inline">Visible to everyone</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="visibility" className="mr-2" />
            Private
            <span className="ml-2 text-gray-500 hidden sm:inline">Itinerary viewable only by the shared traveler</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="visibility" className="mr-2" disabled />
            Password protected <span className="text-red-500 ml-1">Coming Soon</span>
          </label>
        </div>
      </div>

      <hr className="my-4" />

      {/* Itinerary Type */}
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Itinerary Type</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <label className="flex items-center">
            <input type="radio" name="itineraryType" className="mr-2" defaultChecked />
            Flexible departure
            <span className="ml-2 text-gray-500 hidden sm:inline">Departure dates can be changed by customers</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="itineraryType" className="mr-2" />
            Fixed departure
            <span className="ml-2 text-gray-500 hidden sm:inline">Departure dates cannot be changed by customers</span>
          </label>
        </div>
      </div>
    </div>

    </DashboardContentContainer>

    </>
  );
};

export default DashboardMyItinerariesBuilder;




















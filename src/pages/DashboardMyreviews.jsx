import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import DashboardEditUser from './DashboardEditUser';
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer';
import DashboardSideBar from '../components/dashboard/DashboardSideBar';

const DashboardMyreviews = () => {

  return (
    <>
    <DashboardSideBar/>

<DashboardContentContainer>



    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">My Reviews</h2>
      <p className="text-gray-600 mb-4">
        Enhance your reputation and boost customer satisfaction by effectively managing and showcasing feedback.
      </p>

      {/* Stats Section */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-4 text-center mb-6">
        <div>
          <div className="text-4xl font-bold">0</div>
          <div className="flex items-center justify-center text-gray-500 mt-2">
            <FaUser className="mr-2" />
            Total Reviews
          </div>
        </div>
        <div>
          <div className="text-4xl font-bold flex items-center justify-center">
            0.0 <BsStarFill className="ml-2 text-yellow-500" />
          </div>
          <div className="text-gray-500 mt-2">Average Rating</div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <div key={index} className="flex items-center mb-2">
            <BsStarFill className={`text-${['green', 'lime', 'yellow', 'orange', 'red'][index]}-500 mr-2`} />
            <span className="w-full bg-gray-200 h-2 rounded-full">
              <span className="bg-gray-300 h-2 block rounded-full" style={{ width: '0%' }}></span>
            </span>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <select className="border-gray-300 rounded-lg p-2 mr-2 rever">
          <option> All Ratings</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          {/* Add more options as needed */}
        </select>
        <input
          type="text"
          placeholder="Search Destination"
          className="border border-gray-300 rounded-lg p-2 flex-grow mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.71 20.29l-4.16-4.16a8 8 0 10-1.41 1.41l4.16 4.16a1 1 0 001.41-1.41zM10 16a6 6 0 116-6 6 6 0 01-6 6z" />
          </svg>
        </button>
      </div>

      {/* No Record Available */}
      <div className="mt-6 text-center text-gray-500">No Record Available</div>
    </div>
    </DashboardContentContainer>
</>
  );
};
export default DashboardMyreviews;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import tripIdeas from '../components/packages/Allpackages/tripIdeas';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

function TripIdeaPage() {
  const { name, id } = useParams(); // Extract name and id from URL params
  const [tripData, setTripData] = useState(null); // State to hold the trip data

  useEffect(() => {
    // Find the object that matches the id
    const foundTrip = tripIdeas.find((trip) => trip.id.toString() === id);
    setTripData(foundTrip); // Save the found trip data to state
  }, [id]);

  if (!tripData) {
    return <div className="text-center text-lg text-gray-700 py-20">Loading...</div>; // Show loading if data is not yet available
  }

  return (
    <>
    <Navbar />
   
    <div className="p-5">
      {/* Display the layout text at the top center */}
      <h2 className="text-xl font-semibold text-gray-600 text-center mb-4">{tripData.text}</h2>

      {/* Create a flex layout for the trip details */}
      {tripData.content.map((content) => (
        <div key={content.heading} className="bg-white border border-gray-200 mb-8 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:justify-between">
          
          {/* Display the heading above the image */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4  text-center md:text-start">{content.heading}</h3>

            <img
              src="https://images.pexels.com/photos/63638/roses-flower-nature-macro-63638.jpeg?cs=srgb&dl=bloom-blossom-flora-63638.jpg&fm=jpg"
              className="w-[80%] object-cover rounded-md mb-4"
              alt={content.heading} // Added alt text for accessibility
            />
          </div>

          {/* Display the information on the right side */}
          <div className="md:w-1/2 flex  flex-col justify-between p-4 rounded-md mt-10">
            {/* Information at the top */}
            <p className="text-gray-600 mb-4 flex-1 text-start">{content.information}</p>

            {/* Button at the bottom */}
            <button className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
            <Link to="/contact">Enquire Now</Link>  
            </button>
          </div>

        </div>
      ))}
    </div>

<Footer />
    </>
  );
}

export default TripIdeaPage;

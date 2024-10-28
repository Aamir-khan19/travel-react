import React, { useState } from 'react';
import Select from 'react-select';

const TourSelection = () => {

  // Options for Tour Destinations
  const destinationOptions = [
    { value: 'Shimla, India', label: 'Shimla, India' },
    { value: 'Kerala, India', label: 'Kerala, India' },
    { value: 'Kashmir, India', label: 'Kashmir, India' },
    { value: 'Dubai, UAE', label: 'Dubai, UAE' },
  ];

  // Options for Itinerary Durations
  const itineraryOptions = [
    { value: '2D/1N', label: '2D/1N' },
    { value: '3D/2N', label: '3D/2N' },
    { value: '4D/3N', label: '4D/3N' },
    { value: '22D/21N', label: '22D/21N' },
  ];


  const [tourDestinations, setTourDestinations] = useState([]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#7C3AED' : provided.backgroundColor, // Purple background when selected
      color: state.isSelected ? 'white' : 'black',                             // White text when selected
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#7C3AED', // Purple background for selected items
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      '&:hover': { backgroundColor: '#5B21B6' }, // Darker purple on hover
    }),
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className="w-full md:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tour-destination">
          Tour Destination
        </label>
        <Select
        onChange={(e)=>setTourDestinations(e)}
          id="tour-destination"
          options={destinationOptions}
          styles={customStyles}
          isMulti
          placeholder="Select Destinations"
          className="rounded-md border-gray-300 shadow-sm"
          classNamePrefix="select"
        />
      </div>

      <div className="w-full md:w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itinerary-duration">
          Itinerary Duration*
        </label>
        <Select
          id="itinerary-duration"
          options={itineraryOptions}
          placeholder="Select Duration"
          className="rounded-md border-gray-300 shadow-sm"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default TourSelection;

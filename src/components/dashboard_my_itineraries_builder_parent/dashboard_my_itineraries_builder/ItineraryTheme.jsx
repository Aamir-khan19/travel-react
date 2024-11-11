import React, { useState } from 'react';

const ItineraryTheme = () => {
  // Define the available themes
  const themes = [
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Art', label: 'Art' },
    { value: 'Backpacking', label: 'Backpacking' },
    { value: 'Beach', label: 'Beach' },
    { value: 'Culture', label: 'Culture' },
    { value: 'Desert', label: 'Desert' },
    { value: 'Eco-Friendly', label: 'Eco-Friendly' },
    { value: 'Family Holidays', label: 'Family Holidays' },
    { value: 'Festivals', label: 'Festivals' },
    { value: 'Food', label: 'Food' },
    { value: 'Hills', label: 'Hills' },
    { value: 'History', label: 'History' },
    { value: 'Honeymoon', label: 'Honeymoon' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Pilgrimage', label: 'Pilgrimage' },
    { value: 'Road Trips', label: 'Road Trips' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Solo trips', label: 'Solo trips' },
    { value: 'Trekking', label: 'Trekking' },
    { value: 'Wellness', label: 'Wellness' },
    { value: 'Wildlife', label: 'Wildlife' },
    { value: 'Yoga', label: 'Yoga' }
  ];

  // State to hold selected themes
  const [selectedThemes, setSelectedThemes] = useState([]);

  // Handle checkbox changes
  const handleCheckboxChange = (themeValue) => {
    setSelectedThemes((prevSelectedThemes) =>
      prevSelectedThemes.includes(themeValue)
        ? prevSelectedThemes.filter((item) => item !== themeValue)
        : [...prevSelectedThemes, themeValue]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Itinerary Theme<span className='text-red-500'>*</span></h2>
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <label key={theme.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={theme.value}
              checked={selectedThemes.includes(theme.value)}
              onChange={() => handleCheckboxChange(theme.value)}
              className="hidden"
            />
            <span
              className={`inline-flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer ${
                selectedThemes.includes(theme.value) ? 'bg-orange-500 text-white' : 'border-gray-300'
              }`}
            >
              {selectedThemes.includes(theme.value) && <span className="text-xs">✓</span>}
            </span>
            <span className="text-gray-700">{theme.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ItineraryTheme;

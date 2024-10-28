import React, { useState } from 'react';

const ItineraryTheme = () => {
  // Define the available themes
  const themes = [
    'Adventure', 'Art', 'Backpacking', 'Beach', 'Culture', 'Desert', 'Eco-Friendly', 'Family Holidays',
    'Festivals', 'Food', 'Hills', 'History', 'Honeymoon', 'Luxury', 'Pilgrimage', 'Road Trips', 'Romance',
    'Solo trips', 'Trekking', 'Wellness', 'Wildlife', 'Yoga'
  ];

  // State to hold selected themes
  const [selectedThemes, setSelectedThemes] = useState([]);

  // Handle checkbox changes
  const handleCheckboxChange = (theme) => {
    setSelectedThemes((prevSelectedThemes) =>
      prevSelectedThemes.includes(theme)
        ? prevSelectedThemes.filter((item) => item !== theme)
        : [...prevSelectedThemes, theme]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Itinerary Theme</h2>
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <label key={theme} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={theme}
              checked={selectedThemes.includes(theme)}
              onChange={() => handleCheckboxChange(theme)}
              className="hidden"
            />
            <span
              className={`inline-flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer ${
                selectedThemes.includes(theme) ? 'bg-orange-500 text-white' : 'border-gray-300'
              }`}
            >
              {selectedThemes.includes(theme) && <span className="text-xs">✓</span>}
            </span>
            <span className="text-gray-700">{theme}</span>

          </label>
        ))}
      </div>
    </div>
  );
};

export default ItineraryTheme;

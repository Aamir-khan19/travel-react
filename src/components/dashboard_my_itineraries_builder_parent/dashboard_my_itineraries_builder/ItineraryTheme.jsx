import React from 'react';
import themeOptions from "../themeOptions";
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../features/itinerary/itinerarySlice';

const ItineraryTheme = () => {
  const dispatch = useDispatch();
  const itineraryForm = useSelector((state) => state.itineraries.itineraryForm);

  // Handle checkbox changes directly with Redux
  const handleCheckboxChange = (theme) => {
    const updatedThemes = itineraryForm?.selectedThemes?.includes(theme)
      ? itineraryForm.selectedThemes.filter((item) => item !== theme)
      : [...(itineraryForm?.selectedThemes || []), theme];

    dispatch(setItineraryForm({ selectedThemes: updatedThemes }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Itinerary Theme<span className="text-red-500">*</span>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {themeOptions?.map((theme) => (
          <label key={theme.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={theme.value}
              checked={itineraryForm?.selectedThemes?.includes(theme)}
              onChange={() => handleCheckboxChange(theme)}
              className="hidden"
            />
            <span
              className={`inline-flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer ${
                itineraryForm?.selectedThemes?.includes(theme)
                  ? 'bg-orange-500 text-white'
                  : 'border-gray-300'
              }`}
            >
              {itineraryForm?.selectedThemes?.includes(theme) && <span className="text-xs">✓</span>}
            </span>
            <span className="text-gray-700">{theme.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ItineraryTheme;

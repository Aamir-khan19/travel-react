import React from 'react'
import Select from 'react-select';

function ItineraryTheme({themeOptions, selectedThemes, setSelectedThemes}) {
  return (
    <label className="block text-gray-700 mb-2">
    Itinerary Theme
    <Select
      isMulti
      options={themeOptions}
      value={selectedThemes}
      onChange={setSelectedThemes}
      className="mt-1"
      placeholder="Select Themes"
    />
  </label>
  )
}

export default ItineraryTheme

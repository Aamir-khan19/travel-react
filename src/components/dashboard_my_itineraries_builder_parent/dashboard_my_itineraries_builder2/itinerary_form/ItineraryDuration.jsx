import React from 'react'

function ItineraryDuration({duration, setDuration, durationOptions}) {
  return (
    <label className="block text-gray-700 mb-2">
    Itinerary Duration
    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
    >
      {durationOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </label>
  )
}

export default ItineraryDuration

import React from 'react'
import Select from 'react-select';
import themeOptions from "../../dashboard_my_itineraries_builder_parent/themeOptions";
import { useDispatch, useSelector } from 'react-redux';
import { setItineraryForm } from '../../../features/itinerary/itinerarySlice';

function ItineraryTheme() {
const dispatch = useDispatch();
const itineraryForm = useSelector(state => state.itineraries.itineraryForm);

console.log("ItinearayTghems", itineraryForm)

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
    <label className="block text-gray-700 mb-2">
    Itinerary Theme
    <Select
    styles={customStyles}
      isMulti
      options={themeOptions}
      value={itineraryForm?.selectedThemes}
      onChange={(e)=> {dispatch(setItineraryForm({selectedThemes: e}))}}
      className="mt-1"
      placeholder="Select Themes"
    />
  </label>
  )
}

export default ItineraryTheme

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import { setDestinationDetailText } from '../../../../features/itinerary/itinerarySlice';

const DestinationDetailText = () => {
  const dispatch = useDispatch();
  const destinationDetailText = useSelector(state => state.itineraries.destinationDetailText);

  const modules = {
    toolbar: [
      // Add formatting options for the toolbar
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header sizes
      ['bold', 'italic', 'underline', 'strike'], // Text styles
      [{ color: [] }, { background: [] }], // Color and background color
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      [{ indent: '-1' }, { indent: '+1' }], // Indentation
      [{ align: [] }], // Alignment
      ['blockquote', 'code-block'], // Block elements
      ['link'], // Insert options
      ['clean'], // Remove formatting
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'bullet',
    'indent',
    'align',
    'blockquote',
    'code-block',
    'link'
  ];

  return (
    <>

      <div className="p-4 mb-10 md:mb-2">
        <label className="block text-lg font-bold mb-2">Destination Detail</label>
        <ReactQuill
          theme="snow"
          value={destinationDetailText}
          onChange={(value) => dispatch(setDestinationDetailText(value))}
          modules={modules}
          formats={formats}
          placeholder="Enter destination details..."
          className="h-[400px] text-gray-700 bg-white"
        />
      </div>
    </>
  );
};

export default DestinationDetailText;

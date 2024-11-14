import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS for styling

const Exclusion = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'bold': true }, { 'italic': true }, { 'underline': true }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ],
  };

  return (
    <div className="p-4 mb-10 md:mb-2">
      <label className="block text-lg font-bold mb-2">Exclusion</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Add Inclusion"
        modules={modules}
        className=" h-36 text-gray-700 bg-white"
      />
    </div>
  );
};

export default Exclusion;

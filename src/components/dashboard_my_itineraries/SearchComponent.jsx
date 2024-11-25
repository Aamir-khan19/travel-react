import React from 'react';

const SearchComponent = () => {
  return (
    <div className="flex items-start space-x-4 my-4 bg-white shadow-md w-[99%] min-h-[100px] px-2 overflow-x-scroll md:overflow-x-auto">
      <select className="p-2 border rounded-md">
        <option>ID</option>
        <option>Status</option>
        <option>Travel Duration</option>
        <option>Type</option>
        <option>Visibility</option>
      </select>
      
      <input 
        type="text" 
        placeholder="Enter ID..." 
        className="p-2 border rounded-md w-52" 
      />
      
      <button 
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
      >
        GO
      </button>
    </div>
  );
};

export default SearchComponent;

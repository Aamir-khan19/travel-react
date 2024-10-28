import React, { useRef, useState } from 'react';

const UploadModal = ({ setIsModalOpen, setItineraryFile, createNewRef=null }) => {
    const itineraryFileRef = useRef(null);

    const handleModalClose = function(){
     createNewRef.current.checked = true;
      setIsModalOpen(false);
    }

    const handleFileRef = function(){
    itineraryFileRef.current.click();
    }


    const handleItineraryFile = function(e){
      setItineraryFile(e.target.files[0]);

      setIsModalOpen(false);
    }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Upload Document</h2>
        <div className="border-dotted border-2 border-gray-300 rounded-lg bg-gray-50 p-6 text-center">
        
          <div onClick={handleFileRef} className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <div className="text-4xl text-indigo-600">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p className="text-indigo-600 font-semibold">Click here to upload .pdf, .docx files only</p>
            <p className="text-gray-600">(Maximum file size: 25 MB)</p>

            <input ref={itineraryFileRef} type="file" className='hidden' onChange={(e)=>handleItineraryFile(e)} accept='.pdf, .docx, .doc'/>
          </div>

        </div>
        <div className="mt-6 text-right">
          <button
            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg px-4 py-2 transition"
            onClick={handleModalClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;

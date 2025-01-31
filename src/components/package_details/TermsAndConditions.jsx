import React from "react";
import { useSelector } from "react-redux";

const TermsAndConditions = () => {
  // Fetching terms and conditions from Redux state
  const terms_and_conditions = useSelector(
    (state) => state.public.particularItinerary?.terms_and_conditions
  );

  return (
    <>


{
  (terms_and_conditions != "<p><br></p>" && terms_and_conditions != "undefined") &&

<div className="flex justify-center items-center shadow-lg rounded-lg bg-blue-100 overflow-x-hidden">
      <div className="max-w-lg w-full rounded-lg shadow-lg overflow-x-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-900 border-b pb-3 mb-4">
            Terms and Conditions
          </h2>
          {terms_and_conditions ? (
            // Render HTML content safely
            <div
              className="text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: terms_and_conditions }}
            ></div>
          ) : (
            <p className="text-gray-700 text-center">
              Loading terms and conditions...
            </p>
          )}
        </div>
       
      </div>
    </div>
}




    
   
    

    </>
  );
};

export default TermsAndConditions;

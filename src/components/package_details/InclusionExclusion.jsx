import React from "react";
import { useSelector } from "react-redux";

const InclusionExclusion = () => {
  const inclusion = useSelector((state) => state.public.particularItinerary?.inclusion);
  const exclusion = useSelector((state) => state.public.particularItinerary?.exclusion);


  console.log("inclusion exclusion.jsx" , inclusion, exclusion);

  return (
    <div className=" md:flex md:justify-between md:items-stretch">
      {/* Inclusion Section */}

      {
        (inclusion != "<p><br></p>" && inclusion != "undefined") && <div className="bg-green-50 border border-green-300 p-6 rounded-lg shadow-lg md:w-[50%]">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Inclusion</h3>
        <div
          className="text-gray-700 leading-relaxed text-sm"
          dangerouslySetInnerHTML={{ __html: inclusion }}
        />
      </div>
      }
      

      {/* Exclusion Section */}
      {
        (exclusion != "<p><br></p>" && exclusion != "undefined") &&  <div className="bg-red-50 border border-red-300 p-6 rounded-lg shadow-lg md:w-[50%]">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Exclusion</h3>
        <div
          className="text-gray-700 leading-relaxed text-sm"
          dangerouslySetInnerHTML={{ __html: exclusion }}
        />
      </div>
      }
     
    </div>
  );
};

export default InclusionExclusion;

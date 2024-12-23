import React from 'react'
import DestinationDetailText from './destination_details/DestinationDetailText'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function DestinationDetails({setCurrentComponent}) {


  const handleBack = function(){
    setCurrentComponent(0)
    }
  
    const handleNext = function(){
    setCurrentComponent(2)
    }


  return (
    <div>
      <DestinationDetailText />



      <div className=' mt-20 flex justify-between'>
<button onClick={handleBack} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
<HiChevronLeft className="mr-1" /> Back
</button>

<button onClick={handleNext} className="flex items-center text-blue-600 font-semibold underline hover:text-blue-800 mb-4">
Next <HiChevronRight className="ml-1" />
</button>
</div>
    </div>
  )
}

export default DestinationDetails

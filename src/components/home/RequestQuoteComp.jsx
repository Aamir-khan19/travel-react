import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

function RequestQuoteComp({handleRequestQuoteOpenModal}) {

  return (
    <>
    
    <div className=' fixed z-50 bottom-[10px] right-[10px]'>
    <button onClick={handleRequestQuoteOpenModal} className=" text-white px-4 py-4 flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden" >
      
      <FaMessage  className=' text-4xl' />
     
    </button>
    </div>
    </>
  )
}

export default RequestQuoteComp




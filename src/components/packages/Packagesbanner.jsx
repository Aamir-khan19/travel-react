import React from 'react'

const Packagesbanner = () => {
  return (
    <div
    className="w-full h-full bg-cover bg-transparent bg-center "
    style={{
      backgroundImage:
        "url(' /Images/PackageImages/package.jpg')",
        
    }}
  >
    <div className="px-5 py-10 md:py-20 my-10 md:my-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="md:w-3/4 lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Ready To Travel With Us <br className="hidden md:block" />
              <span className="text-white">On Your Next</span> Trip?
            </h1>

            
            <div  className=" flex flex-col  justify-center items-center" >
            <button 
                type="button"
                className="p-4 mt-4 w-fit bg-blue-500 text-white hover:bg-white hover:text-blue-400 rounded-md  flex items-center justify-center gap-2 transform transition-transform hover:scale-105"
              >
                See Tour packages
              </button>
            </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Packagesbanner


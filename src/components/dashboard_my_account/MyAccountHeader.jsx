import React from 'react'

function MyAccountHeader({currentComponent, setCurrentComponent}) {
    
  return (
    <div className=' mt-5'>

    <div className=' bg-white py-2 pl-5'>
     <ul className='flex justify-start gap-10 items-center font-semibold'>
     <li>
         <button onClick={()=>setCurrentComponent(0)} className={` font-semibold ${(currentComponent== 0)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>My Plans</button>
       </li>
       <li>
         <button onClick={()=>setCurrentComponent(1)} className={` font-semibold ${(currentComponent== 1)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Lead Management</button>
       </li>
       <li>
         <button onClick={()=>setCurrentComponent(2)} className={` font-semibold ${(currentComponent== 2)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Profile</button>
       </li>
       <li>
       <button onClick={()=>setCurrentComponent(3)} className={` font-semibold ${(currentComponent== 3)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Kyc</button>
       </li>
       <li>
       <button onClick={()=>setCurrentComponent(4)} className={` font-semibold ${(currentComponent== 4)? "text-purple-500 border-b-2 border-purple-600" : ""}`}>Settings</button>
       </li>
     </ul>
    </div>
    
    </div>
  )
}

export default MyAccountHeader

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../../features/login/loginSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import animatedLoader from "/Images/animated_images/delete_loader.svg";

function DashboardContentContainer({children}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const tokenState = useSelector(state => state.login.tokenState);
  const isLoading = useSelector(state => state.login.isLoading);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);


  const handleDashboardContainer = function(e){
    if(modalRef.current && !modalRef.current.contains(e.target)){
      setIsModalOpen(false);
     }
  }

  
  const toggleModal = (e) => {
    setIsModalOpen(!isModalOpen);
  };
  

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  useEffect(() => {
    if (!tokenState?.token) {
      navigate("/b2b-login");
    }
  }, [tokenState, navigate]);

  return (
    <div onClick={(e)=>handleDashboardContainer(e)} className=" mt-12 lg:mt-0 lg:ml-[245px] pl-0 lg:pl-3 pt-2">
       
       {/* Header */}
       <header className="flex justify-between items-center bg-white p-4 shadow">
          <h1 className="text-2xl font-bold">Travel n world</h1>
          <div className="relative">
            <button
              onClick={toggleModal}
              className="text-gray-800 font-medium hover:text-gray-500 focus:outline-none"
            >
              {tokenState?.user?.name}
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div ref={modalRef} className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
                <div className="p-4">

                  <div className=' border-b border-gray-600 px-2 mb-2'>
                  <h2 className=' text-gray-700 my-1'>{tokenState?.user?.name}</h2>
                  <h3 className=' text-gray-600 my-1 text-sm'>{tokenState?.user?.email}</h3>
                  </div>

<div className=' flex justify-start items-center my-2 gap-2'>
<FaUser /> <Link to="/dashboard-my-account">My Account</Link>
</div>
               
                  
                  <button
                  disabled={isLoading}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded focus:outline-none"
                    onClick={handleLogout}
                  >
                      {
                                                  isLoading? <div className=" flex justify-center">
                                                  <img src={animatedLoader} alt="" />
                                  
                                                  </div>
                                                  :
                                  
                                                 <span>Logout</span>
                                                } 
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>


       {children}
       
      </div>
  )
}

export default DashboardContentContainer

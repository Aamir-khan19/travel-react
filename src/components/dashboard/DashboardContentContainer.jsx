import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';

function DashboardContentContainer({children}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const tokenState = useSelector(state => state.login.tokenState);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
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
    <div className=" mt-12 lg:mt-0 lg:ml-[245px] pl-0 lg:pl-2 pt-2">
       
       {/* Header */}
       <header className="flex justify-between items-center bg-white p-4 shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="relative">
            <button
              onClick={toggleModal}
              className="text-gray-800 font-medium hover:text-gray-500 focus:outline-none"
            >
              {tokenState?.user?.name}
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <div className="p-4">
                    <h3 className=' text-gray-600 my-2'>{tokenState?.user?.email}</h3>
                  <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded focus:outline-none"
                    onClick={handleLogout}
                  >
                    Logout
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

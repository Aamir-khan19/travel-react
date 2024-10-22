import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenState = useSelector(state=> state.login.tokenState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
 dispatch(logoutAsync());
  };

  useEffect(()=>{
if(!tokenState?.token){
    navigate("/b2b-login");
}
  }, [tokenState])

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
        {/* <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Profile</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Settings</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Analytics</a>
          </li>
        </ul> */}
      </div>

      {/* Main Content Area */}
      <div className="w-4/5 bg-gray-100 p-6">
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

        {/* Dashboard Content */}
        <main className="mt-6">
          <p>Welcome to your dashboard!</p>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

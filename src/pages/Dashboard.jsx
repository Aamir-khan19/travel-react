import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardContentContainer from "../components/dashboard/DashboardContentContainer";

const Dashboard = () => {
  const navigate = useNavigate();

  const tokenState = useSelector((state) => state.login.tokenState);

  useEffect(() => {
    if (!tokenState?.token) {
      navigate("/b2b-login");
    }
  }, [tokenState]);

  return (
    <>
      <DashboardSideBar />

      <DashboardContentContainer>

      <main className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Your Dashboard!</h1>
  {/* <p className="text-gray-600 mb-8">Here you can manage Hotelier's Registered, Free-listed Travel Agent and Verified Agents Registered</p>

  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700">Free-listed Travel Agent</h2>
      <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700">Verified Agents Registered</h2>
      <p className="text-3xl font-bold text-green-600 mt-2">32</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700"> Hotelier's Registered</h2>
      <p className="text-3xl font-bold text-purple-600 mt-2">58</p> 
     </div>
    
  </section> */}


</main>


      </DashboardContentContainer>
    </>
  );
};


export default Dashboard;

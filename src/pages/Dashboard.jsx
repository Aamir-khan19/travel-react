import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardSideBar from '../components/dashboard/DashboardSideBar';
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer';

const Dashboard = () => {
  const navigate = useNavigate();

  const tokenState = useSelector(state=> state.login.tokenState);

  useEffect(()=>{
if(!tokenState?.token){
    navigate("/b2b-login");
}
  }, [tokenState])

  return (
    <>
    <DashboardSideBar />

    <DashboardContentContainer>
        

        {/* Dashboard Content */}
        <main>
          <p>Welcome to your dashboard!</p>
         
        </main>

    </DashboardContentContainer>
    </>
  );
};

export default Dashboard;

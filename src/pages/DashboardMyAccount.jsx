import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'
import MyAccountHeader from '../components/dashboard_my_account/MyAccountHeader';
import MyAccountContent from '../components/dashboard_my_account/MyAccountContent';

function DashboardMyAccount(){
  const [currentComponent, setCurrentComponent] = useState(0);


  return (
    <>
  <DashboardSideBar />

  <DashboardContentContainer >
    <div className=' bg-gray-100 h-[88vh] pt-5'>

   <div className=' pl-2'>
    <h1 className=' text-2xl font-semibold'>My Account</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad eligendi ut error voluptatum cupiditate ab! Id animi doloribus vitae eius inventore at cumque magni? Distinctio pariatur ab saepe illum.</p>
   </div>

   <MyAccountHeader currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />


   <MyAccountContent currentComponent={currentComponent}/>

   </div>
  </DashboardContentContainer>
      </>
   
  )
}

export default DashboardMyAccount

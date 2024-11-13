import React from 'react'
import DashboardSideBar from "../dashboard/DashboardSideBar";
import DashboardContentContainer from '../dashboard/DashboardContentContainer';
import CreateItineraryParent from './dashboard_my_itineraries_builder2/CreateItineraryParent';

function DashboardMyitinerariesBuilder2() {
  return (
    <>
    <DashboardSideBar />

    <DashboardContentContainer>
       <CreateItineraryParent />
    </DashboardContentContainer>
    </>
  )
}

export default DashboardMyitinerariesBuilder2

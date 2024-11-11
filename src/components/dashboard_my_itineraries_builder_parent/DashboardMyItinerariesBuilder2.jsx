import React from 'react'
import DashboardSideBar from "../dashboard/DashboardSideBar";
import DashboardContentContainer from '../dashboard/DashboardContentContainer';
import ItineraryForm from './dashboard_my_itineraries_builder2/ItineraryForm';

function DashboardMyitinerariesBuilder2() {
  return (
    <>
    <DashboardSideBar />

    <DashboardContentContainer>
        <ItineraryForm />
    </DashboardContentContainer>
    </>
  )
}

export default DashboardMyitinerariesBuilder2

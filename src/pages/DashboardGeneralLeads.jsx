import React from 'react'
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'
import DashboardGeneralLeadsComponent from '../components/dashboard_general_leads/DashboardGeneralLeadsComponent'

function DashboardGeneralLeads() {
  return (
    <>
    <DashboardSideBar/>

    <DashboardContentContainer>
    <DashboardGeneralLeadsComponent />
        
    </DashboardContentContainer>
    </>
  )
}

export default DashboardGeneralLeads

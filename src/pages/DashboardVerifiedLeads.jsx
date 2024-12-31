import React from 'react'
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'
import UserVerifiedLeadsPhoneEmail from '../components/dashboard_verified_leads/UserVerifiedLeadsPhoneEmail'

function DashboardVerifiedLeads() {
  return (
    <>
    <DashboardSideBar/>

    <DashboardContentContainer >
    <UserVerifiedLeadsPhoneEmail />

    </DashboardContentContainer>
    </>
  )
}

export default DashboardVerifiedLeads

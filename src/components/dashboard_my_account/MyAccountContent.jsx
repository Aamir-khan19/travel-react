import React from 'react'
import MyPlans from './MyPlans'
import LeadManagement from './LeadManagement'
import Profile from './Profile'
import Settings from './Settings'
import Kyc from './Kyc'

function MyAccountContent({currentComponent}) {

  return (
    <div>


    {
    (currentComponent == 0) &&
    <Profile/>
    }


    {
    (currentComponent == 1) &&
    <Kyc/>
    }


    {
    (currentComponent == 2) &&
    <Settings/>
    }


    </div>
  )
}

export default MyAccountContent

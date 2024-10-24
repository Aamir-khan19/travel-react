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
    <MyPlans/>
    }

    {
    (currentComponent == 1) &&
    <LeadManagement/>
    }


    {
    (currentComponent == 2) &&
    <Profile/>
    }


    {
    (currentComponent == 3) &&
    <Kyc/>
    }


    {
    (currentComponent == 4) &&
    <Settings/>
    }


    </div>
  )
}

export default MyAccountContent

import React from 'react'
import Profile from './Profile'
import Settings from './Settings'
import Kyc from './Kyc'

function MyAccountContent({currentComponent=0}) {

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

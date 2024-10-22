import React, { useEffect } from 'react'
import SignUpForm from '../components/SignIn-SignUp/SignUpForm'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'


const SignUp= () => {

  useEffect(()=>{
    scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);
  return (
  <>
    <Navbar/>
    <SignUpForm/>
    <Footer/>
    </>
  )
}

export default SignUp
import React, { useEffect } from 'react'
import SignInForm from '../components/SignIn-SignUp/SignInForm'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'


const SignIn = () => {

  useEffect(()=>{
    scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <>
    <Navbar/>
    <SignInForm/>
    <Footer/>
    </>
  )
}

export default SignIn
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMessage, signupAsync } from "../../features/signup/signupSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const message = useSelector(state=> state.signup.message);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Signupform.sjx", formData);

    dispatch(signupAsync(formData));
  };



  useEffect(()=>{
    if(message?.message){
      setTimeout(()=>{
        dispatch(setMessage())
      }, 5000);
    }
    
  
  }, [message])

  return (
    
              <div className="min-h-screen flex  flex-col items-center justify-center md:w-full sm:w-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center   justify-center gap-4 m w-full  flex-col  sm:w-full  max-w-7xl  mx-auto o md:py-20  py-10 ">
          <div className="border border-gray-300 rounded-lg p-5 w-full mx-auto md:mx-0">
            <form
              className="space-y-4  w-full  md:w-full sm:w-full"
              onSubmit={handleSubmit}
            >
              <div className="mb-8">

            <h1 className=" text-center text-green-500 font-bold text-lg">
              {message?.message}
            </h1>
          
                <h3 className="text-[#01055b] text-3xl font-extrabold">
                  Sign up
                </h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign up to your account and 
                  Your journey begins here.
                </p>
              </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]`}
                  placeholder="Enter your name"
                />
                
              </div>
              
                <p className="text-red-500 text-sm mt-1"></p>
            
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]`}
                  placeholder="Enter your email"
                />
            
              </div>
              
                <p className="text-red-500 text-sm mt-1"></p>
            
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full text-sm text-gray-800 border  px-4 py-3 rounded-lg outline-[#01055b]`}
                  placeholder="Enter your password"
                />

              </div>
             
                <p className="text-red-500 text-sm mt-1"></p>
              
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password_confirmation"
                  type="password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                  className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]`}
                  placeholder="Confirm your password"
                />
       
              </div>
             
                <p className="text-red-500 text-sm mt-1">
                 
                </p>
              
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#01055b] hover:bg-[#16174b] focus:outline-none"
              >
                Sign up
              </button>
            </div>

            <p className="text-sm mt-8 text-center text-gray-800">
              Already have an account?{" "}
              <Link
                to ="/b2b-login"
                className="text-[#01055b] font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
        <div className="lg:h-[400px] md:h-[300px] mt-8 md:mt-0 w-full">
          <img
            src="/Images/Signin-signup/signin.png"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

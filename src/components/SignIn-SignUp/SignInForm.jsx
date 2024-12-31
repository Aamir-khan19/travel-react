import React, { useEffect, useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync } from "../../features/login/loginSlice";
import animatedLoader from "/Images/animated_images/loader.svg";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiErrors = useSelector((state) => state.login.errors);
  const isLoading = useSelector((state) => state.login.isLoading);
  const tokenState = useSelector((state) => state.login.tokenState);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(formData));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (tokenState?.token) {
      navigate("/dashboard");
    }
  }, [tokenState, navigate]);

  return (
    <div className="px-5">
      <div className="min-h-screen flex flex-col items-center justify-center md:w-full sm:w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 w-full flex-col sm:w-full max-w-7xl mx-auto md:py-20 py-10">
          <div className="border border-gray-300 rounded-lg p-5 w-full mx-auto md:mx-0">
            <form
              className="space-y-4 w-full md:w-full sm:w-full"
              onSubmit={handleSubmit}
            >
              <div className="mb-8">
                <h3 className="text-[#01055b] text-3xl font-extrabold">
                  Sign in
                </h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and Your journey begins here.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-red-500 text-sm mt-1">
                  {!apiErrors?.errors && apiErrors?.message}
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]"
                    placeholder="Enter user Email Id"
                  />
                  <FaUser className="w-[18px] h-[18px] absolute right-4 text-gray-400" />
                </div>
                <p className="text-red-500 text-sm mt-1">
                  {apiErrors?.errors?.email && apiErrors?.errors?.email[0]}
                </p>
              </div>

              

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]"
                    placeholder="Enter password"
                  />
                  {!showPassword ? (
                    <FaEyeSlash
                      onClick={togglePasswordVisibility}
                      className="w-[18px] h-[18px] absolute right-4 text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={togglePasswordVisibility}
                      className="w-[18px] h-[18px] absolute right-4 text-gray-400 cursor-pointer"
                    />
                  )}
                </div>
                <p className="text-red-500 text-sm mt-1">
                  {apiErrors?.errors?.password &&
                    apiErrors?.errors?.password[0]}
                </p>
              </div>

              <div className="mt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-900 focus:outline-none"
                >
                   {
                                                isLoading? <div className=" flex justify-center">
                                                <img src={animatedLoader} alt="" />
                                
                                                </div>
                                                :
                                
                                               <span>Submit</span>
                                              }  
                </button>
              </div>

              {/* <p className="text-sm mt-8 text-center text-gray-800">
                Don't have an account?{" "}
                <Link
                  to="/b2b-signup"
                  className="text-[#01055b] font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p> */}

            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] mt-8 md:mt-0">
            <img
              src="Images/Signin-signup/signin.png"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignInForm;

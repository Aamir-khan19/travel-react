import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    if (!formData.email) {
      emailError = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailError = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      passwordError = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors({
      email: emailError,
      password: passwordError,
    });

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className="px-5">
      <div className="min-h-screen flex  flex-col items-center justify-center md:w-full sm:w-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center   justify-center gap-4 m w-full  flex-col  sm:w-full  max-w-7xl  mx-auto o md:py-20  py-10 ">
          <div className="border border-gray-300 rounded-lg p-5 w-full mx-auto md:mx-0">
            <form
              className="space-y-4  w-full  md:w-full sm:w-full"
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
                    className={`w-full text-sm text-gray-800 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-lg outline-[#01055b]`}
                    placeholder="Enter user Email Id"
                  />
                  <FaUser className="w-[18px] h-[18px] absolute right-4 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
                    className={`w-full text-sm text-gray-800 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-lg outline-[#01055b]`}
                    placeholder="Enter password"
                  />
                  <FaLock className="w-[18px] h-[18px] absolute right-4 text-gray-400 cursor-pointer" />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-[#01055b] focus:ring-[#01055b] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="text-[#01055b] hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#01055b] hover:bg-[#16174b] focus:outline-none"
                >
                  Log in
                </button>
              </div>

              <p className="text-sm mt-8 text-center text-gray-800">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#01055b] font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                  
                </Link>
              </p>
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

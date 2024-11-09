import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { usersUpdateAsync } from '../../../features/users/usersSlice';

export default function PasswordReset({user}) {
  const dispatch = useDispatch();
  const apiErrors = useSelector((state) => state.users.errors);

  const [password, setPassword] = useState('');
  const [passwordReqErr, setPasswordReqErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log("PasswordReset.jsx  user", user);

  const handlePasswordReset = function(){
    if(password){
    dispatch(usersUpdateAsync({id: user?.id, password: password, password_confirmation: password, name: user?.name, company_name: user?.company_name, phone: user?.phone}));
    }
    else{
    setPasswordReqErr("Password can't be empty");
    }
  }
 
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  useEffect(()=>{
   if(apiErrors?.errors?.password &&
    apiErrors?.errors?.password[0]){
      setToggle(true);
    }
    else{
      setToggle(false);
    }
  }, [apiErrors]);

  return (
    <div className="flex flex-col">

    <div className=' flex items-center gap-5'>
    <h2 className="text-2xl font-semibold">Reset Your Password</h2>

    <button
    type='button'
          onClick={() => setToggle(!toggle)}
          className={`w-10 h-5 flex items-center rounded-full p-1 ${
            toggle ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full transition-all duration-200 shadow-md transform ${
              toggle ? 'translate-x-5' : 'translate-x-0'
            }`}
          />

        </button>

    </div>

      
      <div className="flex mb-4">
        <span className="mr-2 text-gray-600">Secure your account with a new password</span>
      
      </div>

      
{
    toggle &&
<div>
<label htmlFor="password" className="block text-sm font-medium mb-1">
New Password
</label>
<div className="relative flex items-center">
<input
name="password"
type={showPassword ? "text" : "password"}
value={password}
onChange={(e)=>{
  setPasswordReqErr("");
  setPassword(e.target.value);
} }
required
className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-[#01055b]"
placeholder="Reset your password"
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

{
  passwordReqErr
}
</p>


<div className=' flex justify-end items-center'>
<button onClick={handlePasswordReset} type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
Save Password
</button>
</div>
</div>
}



      
    </div>
  );
}

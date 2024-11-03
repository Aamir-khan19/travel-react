import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, usersIndexAsync, usersUpdateAsync } from '../../features/users/usersSlice';
import conf from '../../../conf/conf';

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector(state=> state.users.users);
  const user = useSelector(state => state.users.user);
  const isLoading = useSelector(state=> state.users.isLoading);

  const tokenState = useSelector(state=> state.login.tokenState);

  const [profileImage, setProfileImage] = useState({});
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    preferred_language: ""
  })

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setProfileImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUserDetails = function(e){
    setUserDetails((preVal)=> ({...preVal, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("use4rDeatils", userDetails);
    
    console.log("Settings.jsx", {...user, ...userDetails});

    if(profileImage?.name){
      dispatch(usersUpdateAsync({...user, ...userDetails, profileImage}));
    }
    else{
      dispatch(usersUpdateAsync({...user, ...userDetails}));
    }

  };


  useEffect(()=>{
    if(users.length == 0){
      dispatch(usersIndexAsync())
      .then(()=>{
      dispatch(setUser(tokenState?.user?.id));
      })
    }
    else{
      dispatch(setUser(tokenState?.user?.id));
    }
  
  }, [])


  console.log("Settings.jsx", user);

  useEffect(() => {
    setUserDetails({
      name: user?.name || "", 
      email: user?.email || "", 
      phone: user?.phone || "", 
      gender: user?.gender || "", 
      preferred_language: user?.preferred_language || ""
    });
  }, [user]);

  return (
    <div className=" md:w-[70%] p-6 ">
{
isLoading? 
<div className=' flex justify-center h-[50vh] items-center'>

<div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

</div>

:


    <div>

      <h2 className="text-2xl font-bold mb-2">Settings</h2>
      <p className="text-gray-600 mb-6">
        Personalize your information and secure your account with email & mobile verification
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div className="flex items-center gap-4">
          <p className="text-gray-700">Upload Your Photo</p>
          <label 
            className="w-36 h-36 flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 cursor-pointer rounded-lg overflow-hidden"
          >
            {user?.your_photo || profileImageUrl ? (
              <img src={profileImageUrl || `${conf?.laravelBaseUrl}/storage/${user?.your_photo}`} alt="Uploaded Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Select Image</span>
            )}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </label>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Your Name</label>
          <input 
          value={userDetails?.name}
          onChange={(e)=> handleUserDetails(e)}
            type="text" 
            name="name"
            placeholder="Enter Your Name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />


{/* <input type="checkbox" checked={something} onChange={e => setSomething(e.target.checked)} /> */}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email Address</label>
          <input 
          readOnly={true}
           value={userDetails?.email}
           onChange={(e)=> handleUserDetails(e)}
            type="email" 
            name="email"
            placeholder="Enter Your Email Address" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
          <input
           value={userDetails?.phone}
           onChange={(e)=> handleUserDetails(e)} 
            type="number" 
            name="phone"
            placeholder="Enter Your Phone Number" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Gender</label>
          <select 
           value={userDetails?.gender}
           onChange={(e)=> handleUserDetails(e)}
          name="gender"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Preferred Language</label>
          <input 
           value={userDetails?.preferred_language}
           onChange={(e)=> handleUserDetails(e)}
            type="text" 
            name='preferred_language'
            placeholder="Enter Preferred Language" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>

      <div className=' flex justify-end'>
      <button 
          type="submit" 
          className=" bg-purple-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-purple-700 transition duration-300"
        >
          Save Changes
        </button>
      </div>
      </form>

      </div>
      
      }

    </div>
  );
};

export default Settings;

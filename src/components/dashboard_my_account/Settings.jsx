import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlashMessage, setUser, usersIndexAsync, usersUpdateAsync } from '../../features/users/usersSlice';
import conf from '../../../conf/conf';
import PasswordReset from './settings/PasswordReset';

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector(state=> state.users.users);
  const user = useSelector(state => state.users.user);
  const isLoading = useSelector(state=> state.users.isLoading);
  const flashMessage = useSelector(state => state.users.flashMessage);

  const tokenState = useSelector(state=> state.login.tokenState);

  const [profileImage, setProfileImage] = useState({});
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    youtube: "",
    gender: "",
    preferred_language: ""
  });

  const [verificationDate, setVerificationDate] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);

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


  console.log("Settings.jsx user", user);

  useEffect(() => {
    setUserDetails({
      name: user?.name || "", 
      email: user?.email || "", 
      phone: user?.phone || "", 
      whatsapp: user?.whatsapp || "",
      facebook: user?.facebook || "",
      instagram: user?.instagram || "",
      youtube: user?.youtube || "",
      gender: user?.gender || "", 
      preferred_language: user?.preferred_language || ""
    });


    if(user?.verification_date){
      let verificationDate = new Date(user?.verification_date);
      const verificationDateFormat = `${verificationDate.getDate().toString().padStart(2, '0')}/${(verificationDate.getMonth() + 1).toString().padStart(2, '0')}/${verificationDate.getFullYear()}`;
      setVerificationDate(verificationDateFormat);
  
  
      let newExpirationDate = new Date(verificationDate);
      newExpirationDate.setMonth(verificationDate.getMonth() + 3);
      const expirationDateFormat = `${newExpirationDate.getDate().toString().padStart(2, '0')}/${(newExpirationDate.getMonth() + 1).toString().padStart(2, '0')}/${newExpirationDate.getFullYear()}`;
      setExpirationDate(expirationDateFormat);
    }

  

  }, [user]);



  useEffect(()=>{
    if(flashMessage){
      setTimeout(()=>{
        dispatch(setFlashMessage());
      }, 5000)
      
    }
    }, [flashMessage]);

  return (
    <div className=" md:w-[70%] p-6 ">
{
isLoading? 
<div className=' flex justify-center h-[50vh] items-center'>

<div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

</div>

:


    <div>

{
    flashMessage && 
<div>
   <hr />
   <p className=" text-center text-green-500 text-3xl font-bold">{flashMessage}</p>
  <hr />
   </div>
  }

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
              <img src={profileImageUrl || `${conf?.laravelBaseUrl}/${user?.your_photo}`} alt="Uploaded Profile" className="w-full h-full object-cover" />
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
          <label className="block font-medium text-gray-700 mb-1">Whatsapp</label>
          <input
           value={userDetails?.whatsapp}
           onChange={(e)=> handleUserDetails(e)} 
            type="number" 
            name="whatsapp"
            placeholder="Enter Your Whatsapp Number" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            
          />
        </div>


      
        <div>
          <label className="block font-medium text-gray-700 mb-1">Facebook</label>
          <input 
          value={userDetails?.facebook}
          onChange={(e)=> handleUserDetails(e)}
            type="text" 
            name="facebook"
            placeholder="Enter Your Facebook link" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            
          />

        </div>



        <div>
          <label className="block font-medium text-gray-700 mb-1">Instagram</label>
          <input 
          value={userDetails?.instagram}
          onChange={(e)=> handleUserDetails(e)}
            type="text" 
            name="instagram"
            placeholder="Enter Your Instagram link" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            
          />

        </div>



        <div>
          <label className="block font-medium text-gray-700 mb-1">Youtube</label>
          <input 
          value={userDetails?.youtube}
          onChange={(e)=> handleUserDetails(e)}
            type="text" 
            name="youtube"
            placeholder="Enter Your Yotube link" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
      
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


{
  verificationDate && 
  <div>
    <hr />

<div>
  <h1 className=' text-lg font-semibold'>Verfication Date: {verificationDate} Expiration Date: {expirationDate} </h1>
</div>
  </div>
}


<hr />


      <PasswordReset user={user} />
      </form>

      </div>
      
      }



     
    </div>
  );
};

export default Settings;

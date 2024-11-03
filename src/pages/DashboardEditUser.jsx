import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usersShowAsync, usersUpdateAsync, setIsUserUpdated, setUser } from '../features/users/usersSlice'; // Adjust the import path as needed

const DashboardEditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const isUserUpdated = useSelector((state) => state.users.isUserUpdated);
  const apiErrors = useSelector((state) => state.users.errors);
  const users = useSelector(state => state.users.users);

const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    phone: "",
    location: "",
    your_requirements: "",
    gender: "",
    preferred_language: "",
    password: "",
    password_confirmation: "",
    isAuthorised: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [profileImage, setProfileImage] = useState({});
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    if (id) {
      if(users?.length > 0){
      dispatch(setUser(id));
      }
      else{
        dispatch(usersShowAsync(id));
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
     setFormData(preVal=> ({ name: user?.name, company_name: user?.company_name, phone: user?.phone, location: user?.location || "", your_requirements: user?.your_requirements || "", gender: user?.gender || "", preferred_language: user?.preferred_language || "", isAuthorised: user?.isAuthorised}));
    }

  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(profileImage?.name){
      dispatch(usersUpdateAsync({...user, ...formData, profileImage}));
    }
    else{
      dispatch(usersUpdateAsync({...user, ...formData}));
    }

  };

  useEffect(() => {
    if (isUserUpdated) {
      dispatch(setIsUserUpdated());
      navigate("/dashboard-users"); // Adjust route as necessary
    }
  }, [isUserUpdated]);


  console.log("DashboardEditUser.jsx user", user);

  console.log("DashboardEditUser.jsx users", users);


  console.log("Dashboard.jsx FormDataIsAuthorised", formData.isAuthorised);


  return (
 <>
 
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Enter name"
          />
         
          <p className='text-sm text-red-500'>{apiErrors?.errors?.name && apiErrors.errors.name[0]}</p>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Company name</label>
          <input
            type="text"
            name="company_name"
            value={formData?.company_name}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Enter company name"
          />
         
          <p className='text-sm text-red-500'>{apiErrors?.errors?.company_name && apiErrors.errors.company_name[0]}</p>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData?.phone}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Enter phone number"
          />
          <p className='text-sm text-red-500'>{apiErrors?.errors?.phone && apiErrors.errors.phone[0]}</p>
        </div>


        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData?.location}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Enter location"
          />
          <p className='text-sm text-red-500'>{apiErrors?.errors?.location && apiErrors.errors.location[0]}</p>
        </div>


        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Your requirements</label>
        
          <textarea
          value={formData?.your_requirements}
          onChange={(e)=>handleChange(e)}
          className="border rounded-md p-2"
          placeholder="Your requirements"
          name="your_requirements"></textarea>

          <p className='text-sm text-red-500'>{apiErrors?.errors?.your_requirements && apiErrors.errors.your_requirements[0]}</p>
        </div>


        <div>
          <label className="block font-medium text-gray-700 mb-1">Gender</label>
          <select 
           value={formData?.gender}
           onChange={(e)=> handleChange(e)}
          name="gender"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Preferred language</label>
          <input
            type="text"
            name="preferred_language"
            value={formData?.preferred_language}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Preferred language"
          />
         
          <p className='text-sm text-red-500'>{apiErrors?.errors?.preferred_language && apiErrors.errors.preferred_language[0]}</p>
        </div>


        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Is Authorised</label>

          <select name="isAuthorised" value={formData?.isAuthorised} onChange={(e)=>handleChange(e)}>
           <option value="">Authorise user</option>
           <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
          <p className='text-sm text-red-500'>{apiErrors?.errors?.isAuthorised && apiErrors.errors.isAuthorised[0]}</p>
        </div>


        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">New Password</label>
          <input
            type="text"
            name='password'
            value={formData?.password}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Enter new password"
          />
         
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Confirm New Password</label>
          <input
            type="text"
            name='password_confirmation'
            value={formData?.password_confirmation}
            onChange={(e)=>handleChange(e)}
            className="border rounded-md p-2"
            placeholder="Confirm new password"
          />
          
          <p className='text-sm text-red-500'>{apiErrors?.errors?.password && apiErrors.errors.password[0]}</p>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Profile Image</label>
          
          <input 
    id="image"
    type="file" 
    name="image"
    accept="image/*"
    className=" mt-1 block w-full"
    onChange={e =>{
     if(e.target.files.length > 0){
      console.log("e.target.files[0", e.target.files[0])
      setProfileImage(e.target.files[0]);
        setProfileImageUrl(URL.createObjectURL(e.target.files[0]));

     }else{
      setProfileImage({});
        setProfileImageUrl("");
     }
     
    }
    }
    />


          <p className='text-sm text-red-500'>{apiErrors?.errors?.image && apiErrors.errors.image[0]}</p>
        </div>


      {/* display image div starts here  */}

        {
        (profileImageUrl || user?.image ) && 
        <div className=' mb-4'>
        <img src={profileImageUrl || user?.image} width={200} />
        </div>
        }

        {/* display image div ends here  */}


        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update
          </button>

          <Link to="/dashboard-users" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Cancel
          </Link>
        </div>
      </form>
    </div>


    </>
  );
};

export default DashboardEditUser;

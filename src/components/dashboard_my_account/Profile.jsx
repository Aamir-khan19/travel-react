import React, { useEffect, useState } from 'react';
import CreateCompanyDetails from './profile/CreateCompanyDetails';
import { useDispatch, useSelector } from 'react-redux';
import { companiesIndexAsync, setCompany, setFlashMessage } from '../../features/company/companySlice';
import UpdateCompanyDetails from './profile/UpdateCompanyDetails';
import { setUser, usersIndexAsync } from '../../features/users/usersSlice';

const CompanyProfile = () => {
  const dispatch = useDispatch();

  const companies = useSelector(state=> state.companies.companies);
  const company = useSelector(state=> state.companies.company);
  const tokenState = useSelector(state=> state.login.tokenState);
  const isLoading = useSelector(state=> state.companies.isLoading);
  const isCompanyCreated = useSelector(state=> state.companies.isCompanyCreated);

  const flashMessage = useSelector(state => state.companies.flashMessage);

  const users = useSelector(state=> state.users.users);


  const [howItWorks, setHowItWorks] = useState({
    title: '',
    description: '',
    images: []
  });

  const [termsAndConditions, setTermsAndConditions] = useState({
    title: '',
    description: ''
  });


  useEffect(()=>{
    if(companies?.length == 0){
      dispatch(companiesIndexAsync())
      .then(()=>{
        dispatch(setCompany(tokenState?.user?.id));
      })
    }
    else{
      dispatch(setCompany(tokenState?.user?.id));
    }

  }, [isCompanyCreated]);



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


  console.log("Profile.jsx company", company, companies);


  useEffect(()=>{
  if(flashMessage){
    setTimeout(()=>{
      dispatch(setFlashMessage());
    }, 5000)
    
  }
  }, [flashMessage]);


  return (
    <div className="p-8 space-y-8 md:w-[70%]">
    

  {
    flashMessage && 
<div>
   <hr />
   <p className=" text-center text-green-500 text-3xl font-bold">{flashMessage}</p>
  <hr />
   </div>
  } 

    

      <div>
        <h1 className=' text-[#594cda] text-2xl'>Company Profile</h1>
        <h2 className="text-gray-700">Set or Edit Your Company Information for a Professional Presence</h2>
      </div>

      {/* Profile Section */}
      {
          isLoading?  <div className=' flex justify-center h-[50vh] items-center'>

          <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

          </div>

             :

            company?
            
              
<UpdateCompanyDetails />
           
            

            :

           
              
            <CreateCompanyDetails />
           
      }
      
       
       

      
      
     

      {/* How It Works Section */}
      <div>
      <hr />

      <div>
        <h1 className=' text-[#594cda] text-2xl'>How it works</h1>
        <h2 className="text-gray-700">Enhance Your Profile: Showcase your expertise by adding a 'How It Works' section</h2>
      </div>

        <div className="space-y-4 mt-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" placeholder="Title" className="w-full p-3 border border-gray-300 rounded-md" value={howItWorks.title} onChange={e => setHowItWorks({ ...howItWorks, title: e.target.value })} />

          <label className="block text-gray-700">Description</label>
          <textarea placeholder="Description" className="w-full p-3 border border-gray-300 rounded-md" value={howItWorks.description} onChange={e => setHowItWorks({ ...howItWorks, description: e.target.value })}></textarea>

          <div className="border-2 border-dashed border-gray-300 p-4 text-center">
            <label htmlFor="image-upload" className="cursor-pointer">Click to upload images</label>
            <input id="image-upload" type="file" className="hidden" multiple onChange={e => setHowItWorks({ ...howItWorks, images: [...e.target.files] })} />
          </div>

          <div className=' flex justify-end items-center my-4'>
       <button className="bg-purple-600 text-white px-5 py-2 rounded-md">Add</button>
       </div>
        </div>
      
      </div>

      {/* Terms and Conditions Section */}
      <div>
        
      <div>
        <h1 className=' text-[#594cda] text-2xl'>Terms and Conditions</h1>
        <h2 className="text-gray-700"> Centralized Compliance: Add Terms & Conditions once for all your itineraries</h2>
      </div>
       
        <div className="space-y-4 mt-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" placeholder="Enter Title" className="w-full p-3 border border-gray-300 rounded-md" value={termsAndConditions.title} onChange={e => setTermsAndConditions({ ...termsAndConditions, title: e.target.value })} />

          <label className="block text-gray-700">Description</label>
          <textarea placeholder="write your description..." className="w-full p-3 border border-gray-300 rounded-md" value={termsAndConditions.description} onChange={e => setTermsAndConditions({ ...termsAndConditions, description: e.target.value })}></textarea>
        </div>

       <div className=' flex justify-end items-center my-4'>
       <button className="bg-purple-600 text-white px-5 py-2 rounded-md">Add Policies</button>
       </div>
        
      </div>


    </div>
  );
};

export default CompanyProfile;

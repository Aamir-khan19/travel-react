import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersIndexAsync, usersDestroyAsync, setFlashMessage } from '../features/users/usersSlice'; // Update with your actual slice import
import { Link } from 'react-router-dom';
import conf from '../../conf/conf';
import DashboardSideBar from '../components/dashboard/DashboardSideBar'
import DashboardContentContainer from '../components/dashboard/DashboardContentContainer'

function DashboardUsers() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users.users);
  const isLoading = useSelector(state => state.users.isLoading);
  const flashMessage = useSelector(state=> state.users.flashMessage);

  useEffect(() => {
    if(users?.length == 0){
      console.log("Users.jsx yes length is 0");
      dispatch(usersIndexAsync());
    }
  }, []);

  const handleDelete = (userId) => {
    if(!confirm("Are your sure you want to delete this user")){
      return;
    }

    dispatch(usersDestroyAsync(userId));
  };

  console.log("users", users)



  useEffect(()=>{
    if(flashMessage){
      setTimeout(()=>{
      dispatch(setFlashMessage())
      }, 5000)
    }
    }, [flashMessage])


  return (
    <>
  <DashboardSideBar />

  <DashboardContentContainer >
    {
      isLoading? <div className=' flex justify-center h-[50vh] items-center'>

      <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
     
      </div>

      :


    
     <div className='overflow-auto py-5 mb-5 mx-2'>
        <table className='text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 mx-auto w-[90%]'>
          <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-nowrap'>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>S no.</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Name</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Email</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Profile</th>
            <th className='px-3 py-2 border-2 border-gray-500 text-right'>Company name</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Role</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Is Authorised</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Phone</th>
              <th className='px-3 py-2 border-2 border-gray-500 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users?.length > 0 && users.map((user, i) => (
              <tr key={user.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
               <td className='px-3 py-2 border border-gray-500'>{i+1}</td>
               <td className='px-3 py-2 border border-gray-500'>{user?.name}</td>
               <td className='px-3 py-2 border border-gray-500'>{user?.email}</td>

                <td className='px-3 py-2 border border-gray-500'>
                {
                  (user?.your_photo)? 
                  <div className=' flex justify-center items-center'>

                  <img
                  src={conf.laravelBaseUrl+"/"+user?.your_photo}
                  alt="Profile"
                  className="w-10 h-10 object-cover rounded-full"
                  />

                  </div>

                :

                <p>Not Available</p>
                } 
                </td>
                
                <td className='px-3 py-2 border border-gray-500'>{user?.company_name}</td>
                
                <td className='px-3 py-2 border border-gray-500'>{user?.role}</td>
                <td className='px-3 py-2 border border-gray-500'>{user?.is_authorised? "YES" : "NO"}</td>
               
                <td className='px-3 py-2 border border-gray-500'>{user?.phone}</td>

                <td className='px-3 py-2 border border-gray-500'>
               {((JSON.parse(localStorage.getItem("token"))?.user?.id == user?.id) || (JSON.parse(localStorage.getItem("token"))?.user?.role == "admin")) &&  
               <Link to={`/dashboard-edit-user/${user?.id}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                    Edit
                  </Link>
               }

                {
                 ((JSON.parse(localStorage.getItem("token"))?.user?.role == "admin") && (user?.role == "user")) &&
                 <button onClick={() => handleDelete(user?.id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
                    Delete
                  </button>
                }  

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

}

  </DashboardContentContainer>
      </>
   
  )
}

export default DashboardUsers

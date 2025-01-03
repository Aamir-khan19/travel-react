import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaClipboardList, FaUsers, FaUserShield, FaRegChartBar, FaStar, FaBlog, FaChevronUp, FaChevronDown, FaCheckCircle } from 'react-icons/fa';

function DashboardSideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const tokenState = useSelector((state) => state.login.tokenState);

  const [isOpen, setIsOpen] = useState(false);

  const [isLeadMenuOpen, setIsLeadMenuOpen] = useState(false);

  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const toggleLeadMenu = () => {
    setIsLeadMenuOpen((prev) => !prev);
  };

  const toggleBlogMenu = () => {
    setIsBlogMenuOpen((prev) => !prev);
  }


 useEffect(()=>{
 if(location.pathname == "/dashboard-verifed-leads"){
  setIsOpen(false);
    setIsLeadMenuOpen(true)
 }
  if(location.pathname == "/dashboard-general-leads"){  
    setIsOpen(false);
    setIsLeadMenuOpen(true)
  }

  if(location.pathname == "/dashboard-blogs"){
    setIsOpen(false);
    setIsBlogMenuOpen(true);
  }

  if(location.pathname == "/dashboard-blog-categories"){
    setIsOpen(false);
    setIsBlogMenuOpen(true);
  }
 }, [location]);


 useEffect(() => {
  if (!tokenState?.token) {
    navigate("/b2b-login");
  }
}, [tokenState, navigate]);

  return (
    <>
      {/* Hamburger Menu for mobile */}
      <div
        className="block lg:hidden p-4 cursor-pointer z-40 fixed top-0 left-0"
        onClick={toggleSidebar}
      >
        <span className="text-3xl text-gray-800">☰</span>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen px-2 lg:px-5 pb-4 lg:min-w-[250px] bg-gray-800 text-white transition-transform duration-700 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Button */}
        <div
          className="text-5xl cursor-pointer text-white pb-4 lg:hidden"
          onClick={toggleSidebar}
        >
          <p className="text-end">×</p>
        </div>

        <h2 className="text-xl font-bold mb-6 p-5">Dashboard Menu</h2>

        <ul className="text-center">
          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaHome /> Dashboard
            </NavLink>
          </li>

          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard-my-itineraries"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaClipboardList /> Itineraries
            </NavLink>
          </li>



          <li className="md:mx-8 mb-6">
      <button
        onClick={toggleLeadMenu}
        className={`flex items-center gap-2 duration-200`}
      >
      {isLeadMenuOpen ? <FaChevronUp /> : <FaChevronDown />}  Leads
      </button>
      
      {isLeadMenuOpen && (
        <ul className="mt-2 w-full flex flex-col items-start justify-between">

          <li>
          <NavLink
      to="/dashboard-verifed-leads"
      className={({ isActive }) =>
        `flex items-center gap-2 duration-200 ${
          (isActive)? "bg-purple-600 px-2 py-1 rounded-xl" : "text-white"
        }`
      }
    >
      <FaCheckCircle /> Verified Leads
    </NavLink>
          </li>

          <li>
          <NavLink
              to="/dashboard-general-leads"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-2 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaUser /> General Leads
            </NavLink>
          </li>

        </ul>
      )}
    </li>


          {tokenState?.user?.role === "admin" && (
            <li className="md:mx-8 mb-5">
              <NavLink
                to="/dashboard-users"
                className={({ isActive }) =>
                  `flex items-center gap-2 duration-200 ${
                    (isActive)
                      ? "bg-purple-600 px-4 py-1 rounded-xl"
                      : "text-white"
                  }`
                }
              >
                <FaUserShield /> Users
              </NavLink>
            </li>
          )}

          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard-my-account"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaUser /> My Account
            </NavLink>
          </li>

          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard-my-team"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaUsers /> My Team
            </NavLink>
          </li>

          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard-my-reviews"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaStar /> My Reviews
            </NavLink>
          </li>

          <li className="md:mx-8 mb-5">
            <NavLink
              to="/dashboard-my-report"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-4 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaRegChartBar /> My Report
            </NavLink>
          </li>






          
{
  (tokenState?.user?.role === "admin") && (
<li className="md:mx-8 mb-6">
      <button
        onClick={toggleBlogMenu}
        className={`flex items-center gap-2 duration-200`}
      >
      {isBlogMenuOpen ? <FaChevronUp /> : <FaChevronDown />}  Blog
      </button>
      
      {isBlogMenuOpen && (
        <ul className="mt-2 w-full flex flex-col items-start justify-between">

          <li>
              <NavLink
                to="/dashboard-blogs"
                className={({ isActive }) =>
                  `flex items-center gap-2 duration-200 ${
                    (isActive)
                      ? "bg-purple-600 px-4 py-1 rounded-xl"
                      : "text-white"
                  }`
                }
              >
                <FaBlog /> Blogs
              </NavLink>
            </li>


          <li>
          <NavLink
              to="/dashboard-blog-categories"
              className={({ isActive }) =>
                `flex items-center gap-2 duration-200 ${
                  (isActive)? "bg-purple-600 px-2 py-1 rounded-xl" : "text-white"
                }`
              }
            >
              <FaClipboardList /> Blog Categories
            </NavLink>
          </li>

        </ul>
      )}
    </li>
  )
}

        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default DashboardSideBar;

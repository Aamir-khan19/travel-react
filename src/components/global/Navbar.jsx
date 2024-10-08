import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import RequestQuoteModal from "../home/RequestQuoteModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white px-5 py-3 relative z-50 w-full">
      <nav className="flex justify-between items-center  mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks menuOpen={menuOpen} />
        <MenuToggle onClick={onToggleMenu} menuOpen={menuOpen} />
        <ContactUs menuOpen={menuOpen} />
      </nav>
    </header>
  );
};

const Logo = () => (
  <div className="z-50">
    <img
      className="w-20 cursor-pointer ml-10"
      src="/Images/Homepageimages/logo.png"
      alt="Logo"
    />
  </div>
);

const NavLinks = ({ menuOpen }) => {
  const [isOnDropDownMenu, setIsOnDropDownMenu] = useState(false);

  return (
    <div
      className={`nav-links duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 ${
        menuOpen ? "top-[60px]" : "top-[-500%]"
      } lg:w-auto w-full flex items-center px-5 lg:px-0`}
    >
      <ul
        className={`flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto ${
          menuOpen
            ? "flex flex-col items-center justify-center"
            : "hidden lg:flex"
        }`}
      >
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        {/* /TourPackages */}

        <button>
          <NavLinkWithDropdown
            text="Packages"
            isOnDropDownMenu={isOnDropDownMenu}
            setIsOnDropDownMenu={setIsOnDropDownMenu}
          >
            <DropdownMenu
              isOnDropDownMenu={isOnDropDownMenu}
              setIsOnDropDownMenu={setIsOnDropDownMenu}
              items={dropdownItems}
            />
          </NavLinkWithDropdown>
        </button>

        <NavLink to="/blogs" text="Blogs" />
        <NavLink to="/contact" text="Contact" />
        {menuOpen && <ContactUs mobile />}
      </ul>
    </div>
  );
};

const NavLink = ({ to, text }) => (
  <li className="relative">
    <Link className="hover:text-[#eb6734] text-base font-semibold" to={to}>
      {text}
    </Link>
  </li>
);

const NavLinkWithDropdown = ({
  text,
  children,
  isOnDropDownMenu,
  setIsOnDropDownMenu,
}) => {
  const handleMouseEnter = function () {
    const ele = document.querySelector(".custom-showHide");

    if (ele.classList.contains("hidden")) {
      ele.classList.remove("hidden");
    }
  };

  const handleMouseLeave = function () {
    const ele = document.querySelector(".custom-showHide");

    if (isOnDropDownMenu == false) {
      if (!ele.classList.contains("hidded")) {
        setTimeout(() => {
          ele.classList.add("hidden");
        }, 800);
      }
    }
  };

  return (
    <li className="relative group">
      <span
        className="hover:text-[#eb6734] text-base font-semibold cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
      {children}
    </li>
  );
};
const DropdownMenu = ({ items, isOnDropDownMenu, setIsOnDropDownMenu }) => {
  const handleMouseEnter = function () {
    console.log("mouseEnter");

    console.log("isOnDropDownMenu", isOnDropDownMenu);

    const ele = document.querySelector(".custom-showHide");

    if (ele.classList.contains("hidden")) {
      console.log("yes it contains hidden class");

      ele.classList.remove("hidden");
    }
  };

  const handleMouseLeave = function () {
    console.log("onMouseLeave");

    const ele = document.querySelector(".custom-showHide");

    console.log("ele over", ele);

    if (!ele.classList.contains("hidded")) {
      ele.classList.add("hidden");
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute z-[100]  lg:translate-x-[-30%]  translate-x-[-50%] px-2  md:px-3 -sm:px-5  md:right-8 sm:left-5 left-1/2 lg:left-6 sm:w-[470px] w-[95vw] bg-white  border border-gray-200  justify-evenly rounded-lg hidden transition-opacity duration-300 flex mr-4 mt-6 gap-4 sm:gap-6 p-4 custom-showHide`}
    >
      <div onMouseEnter={() => setIsOnDropDownMenu(true)}>
        <h1 className="font-bold py-4">Domestic Packages</h1>
        <ul className="flex flex-col md:justify-center align-center">
          {items.indian.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="block py-2 hover:bg-gray-100">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onMouseEnter={() => setIsOnDropDownMenu(true)}>
        <h1 className="font-bold py-4 ">International Packages</h1>
        <ul className="flex flex-col ">
          {items.international.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="block py-2 hover:bg-gray-100">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const dropdownItems = {
  indian: [
    { to: `/tour-packages/Manali` , text: "Manali" },
    { to: `/tour-packages/Shimla` , text: "Shimla" },
    { to: `/tour-packages/Kerala` , text: "Kerala" },
    { to: `/tour-packages/Goa` , text: "Goa" },
    { to: `/tour-packages/Rajasthan` , text: "Rajasthan" },
    { to: `/tour-packages/Andaman` , text: "Andaman" },
  ],
  international: [
    { to: `/tour-packages/Indonesia` , text: "Indonesia" },
    { to: `/tour-packages/Malaysia` , text: "Malaysia" },
    { to: `/tour-packages/Mauritius` , text: "Mauritius" },
    { to:  `/tour-packages/China` , text: "China" },
    { to:  `/tour-packages/Azerbaijan` , text: "Azerbaijan" },
    { to:  `/tour-packages/Europe` , text: "Europe" },
  ],
};

const MenuToggle = ({ onClick, menuOpen }) => (
  <div onClick={onClick} className="text-2xl cursor-pointer lg:hidden z-50">
    {menuOpen ? (
      <svg
        className="h-6 w-6 text-gray-700 transition-transform transform rotate-90"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-700 transition-transform transform rotate-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )}
  </div>
);

const ContactUs = ({ mobile = false }) => {

  const [isRequestQuoteModalOpen, setIsRequestQuoteModalOpen] = useState(false);

  

  const handleRequestQuoteOpenModal = () => {
    setIsRequestQuoteModalOpen(true);
  };

  const handleRequestQuoteCloseModal = () => {
    setIsRequestQuoteModalOpen(false);
  };

  return <div
    className={`flex items-center gap-6 ${
      mobile ? "lg:mt-0 lg:hidden" : "hidden lg:flex md:hidden"
    }`}
  >
    <Link
      to="/B2BLogin"
      className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl"
    >
      <CiUser color="white" size={20} />
      Login
    </Link>


    <button
      onClick={handleRequestQuoteOpenModal}
      className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl"
    >
      
      Trip Planner
     
    </button>


    <RequestQuoteModal
            isRequestQuoteModalOpen={isRequestQuoteModalOpen}
            handleRequestQuoteCloseModal={handleRequestQuoteCloseModal}
          />

  </div>
}

export default Navbar;

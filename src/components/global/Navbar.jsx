import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import RequestQuoteModal from "../home/RequestQuoteModal";
import {
  FaCaretDown,
  FaCaretUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import tripIdeaItems from "../packages/Allpackages/tripIdeas";





const domesticLinks = [
  { to: `/tour-packages/Andhra-Pradesh`, text: "Andhra Pradesh" },
  { to: `/tour-packages/Arunachal-Pradesh`, text: "Arunachal Pradesh" },
  { to: `/tour-packages/Assam`, text: "Assam" },
  { to: `/tour-packages/Andaman`, text: "Andaman" },
  { to: `/tour-packages/Bihar`, text: "Bihar" },
  { to: `/tour-packages/Chhattisgarh`, text: "Chhattisgarh" },
  { to: `/tour-packages/Delhi`, text: "Delhi" },
  { to: `/tour-packages/Goa`, text: "Goa" },
  { to: `/tour-packages/Gujarat`, text: "Gujarat" },
  { to: `/tour-packages/Haryana`, text: "Haryana" },
  { to: `/tour-packages/Himachal-Pradesh`, text: "Himachal Pradesh" },
  { to: `/tour-packages/Jharkhand`, text: "Jharkhand" },
  { to: `/tour-packages/Karnataka`, text: "Karnataka" },
  { to: `/tour-packages/Kerala`, text: "Kerala" },
  { to: `/tour-packages/Madhya-Pradesh`, text: "Madhya Pradesh" },
  { to: `/tour-packages/Maharashtra`, text: "Maharashtra" },
  { to: `/tour-packages/Manipur`, text: "Manipur" },
  { to: `/tour-packages/Meghalaya`, text: "Meghalaya" },
  { to: `/tour-packages/Mizoram`, text: "Mizoram" },
  { to: `/tour-packages/Nagaland`, text: "Nagaland" },
  { to: `/tour-packages/Odisha`, text: "Odisha" },
  { to: `/tour-packages/Punjab`, text: "Punjab" },
  { to: `/tour-packages/Rajasthan`, text: "Rajasthan" },
  { to: `/tour-packages/Sikkim`, text: "Sikkim" },
  { to: `/tour-packages/Tamil-Nadu`, text: "Tamil Nadu" },
  { to: `/tour-packages/Telangana`, text: "Telangana" },
  { to: `/tour-packages/Tripura`, text: "Tripura" },
  { to: `/tour-packages/Uttar-Pradesh`, text: "Uttar Pradesh" },
  { to: `/tour-packages/Uttarakhand`, text: "Uttarakhand" },
  { to: `/tour-packages/West-Bengal`, text: "West Bengal" },
  { to: `/tour-packages/Chandigarh`, text: "Chandigarh" },
  { to: `/tour-packages/Lakshadweep`, text: "Lakshadweep" },
  { to: `/tour-packages/Puducherry`, text: "Puducherry" },
  { to: `/tour-packages/Kashmir`, text: "Kashmir" },
  { to: `/tour-packages/Ladakh`, text: "Ladakh" }
];

const internationalLinks = [
{ to: `/tour-packages/Thailand`, text: "Thailand" },
{ to: `/tour-packages/UAE`, text: "UAE" },
{ to: `/tour-packages/Indonesia`, text: "Indonesia" },
{ to: `/tour-packages/Maldives`, text: "Maldives" },
{ to: `/tour-packages/Saudi-Arabia`, text: "Saudi Arabia" },
{ to: `/tour-packages/Malaysia`, text: "Malaysia" },
{ to: `/tour-packages/USA`, text: "USA" },
{ to: `/tour-packages/Spain`, text: "Spain" },
{ to: `/tour-packages/Israel`, text: "Israel" },
{ to: `/tour-packages/France`, text: "France" },
{ to: `/tour-packages/China`, text: "China" },
{ to: `/tour-packages/Vietnam`, text: "Vietnam" },
{ to: `/tour-packages/UK`, text: "United Kingdom" },
{ to: `/tour-packages/Tunisia`, text: "Tunisia" },
{ to: `/tour-packages/Sri-Lanka`, text: "Sri Lanka" },
{ to: `/tour-packages/Russia`, text: "Russia" },
{ to: `/tour-packages/Japan`, text: "Japan" },
{ to: `/tour-packages/Great-Britain`, text: "Britain" },
{ to: `/tour-packages/Italy`, text: "Italy" },
{ to: `/tour-packages/Estonia`, text: "Estonia" },
{ to: `/tour-packages/Australia`, text: "Australia" },
{ to: `/tour-packages/Turkey`, text: "Turkey" },
];





const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white px-5 py-3 relative z-[70] w-full">
      <nav className="flex justify-between items-center mx-auto">
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

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoDivClick = function () {
    // navigate("/");
    // location.reload();
  }

  return <div onClick={() => handleLogoDivClick()} className="z-50">
    <img
      className="w-20 cursor-pointer ml-10"
      src="/Images/Homepageimages/logo.png"
      alt="Logo"
    />
  </div>
}




function TripIdeasComponent() {

  return (<div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center my-4 mx-2 w-[250px] md:w-[600px] gap-5 p-4 bg-white shadow-md border border-gray-300 text-gray-700 rounded text-sm">

    {
      tripIdeaItems?.map((tripIdeaItem, i) => (
        <div key={i} >
          <h1 className=" text-start hover:text-indigo-400" >
            <Link to={`/trip-ideas/${tripIdeaItem?.to}/${tripIdeaItem?.id}`} >{tripIdeaItem?.text}</Link>
            </h1>
        </div>
      ))
    }

  </div>
  )

}

const NavLinks = ({ menuOpen }) => {
  const [isDomesticDropDownMenu, setIsDomesticDropDownMenu] = useState(false);
  const [isInternationalDropDownMenu, setIsInternationalDropDownMenu] = useState(false);

  const [isTripIdeasVisible, setIsTripIdeasVisible] = useState(false);

  return (
    <div
      className={`duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 ${menuOpen ? "top-[60px]" : "top-[-500%]"
        } lg:w-auto w-full flex items-center px-5 lg:px-0`}
    >
      <ul
        className={`flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto ${menuOpen
            ? "flex flex-col items-center justify-center"
            : "hidden lg:flex"
          }`}
      >
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />


        <button onMouseEnter={() => setIsDomesticDropDownMenu(true)} onMouseLeave={() => setIsDomesticDropDownMenu(false)} >

          <NavLinkWithDropdown
            text="Domestic"
          >
            {
              isDomesticDropDownMenu &&

              <div className=" relative">
                <div className=" absolute top-0 bg-transparent left-0 right-0 h-10" />
              </div>
            }


            {
              isDomesticDropDownMenu &&
              <div className=" relative" >

                <div className=" absolute left-1/2 -translate-x-1/2 h-fit w-fit">

                  <DomesticDropdownMenu
                    items={domesticLinks}
                  />

                </div>
              </div>

            }

          </NavLinkWithDropdown>

        </button>




        <button onMouseEnter={() => setIsInternationalDropDownMenu(true)} onMouseLeave={() => setIsInternationalDropDownMenu(false)} >
<NavLinkWithDropdown
  text="International"

>
  {
    isInternationalDropDownMenu &&

    <div className=" relative">
      <div className=" absolute top-0 bg-transparent left-0 right-0 h-10" />
    </div>
  }


  {
    isInternationalDropDownMenu &&
    <div className=" relative" >
      <div className=" absolute left-1/2 -translate-x-1/2 h-fit w-fit">
        <InternationalDropdownMenu
          items={internationalLinks}
        />

      </div>
    </div>

  }

</NavLinkWithDropdown>

</button>




        <NavLink to="/blog" text="Blogs" />
        <NavLink to="/contact" text="Contact" />
        <button onMouseEnter={() => setIsTripIdeasVisible(true)} onMouseLeave={() => setIsTripIdeasVisible(false)} className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl relative">
          Trip ideas


          {isTripIdeasVisible &&

            <div className=" absolute left-1/2 -translate-x-1/2 top-10 h-fit w-fit">
              <div className=" absolute bg-transparent left-1/2 -translate-x-1/2 w-[100px] h-4" />

              <TripIdeasComponent />

            </div>
          }


        </button>

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


  return (
    <li className="relative group z-50 md:z-auto">
      <span
        className="hover:text-[#eb6734] text-base font-semibold cursor-pointer"

      >
        {text}
      </span>
      {children}
    </li>
  );
};

const DomesticDropdownMenu = ({items}) => {

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const visibleIndianItems = showMore ? items : items.slice(0, 12);

  return (
    <div
    className="absolute z-[100] translate-x-[-50%] left-1/2 lg:w-[480px] md:w-[450px] sm:w-[300px] xs:w-[250px] bg-gradient-to-r from-white to-gray-50 shadow-lg border border-gray-200 rounded-xl p-2 transition-opacity duration-300 mt-6"
  >
   
      {/* Domestic Packages Section */}
      <div>
        <ul className="grid md:grid-cols-3 grid-cols-1 gap-1">
          {visibleIndianItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block py-1 bg-gray-100 hover:bg-[#3d71cc] hover:text-white rounded-lg font-medium text-sm transition"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleToggle}
          className="mt-4 bg-gradient-to-r from-[#3d71cc] to-[#1a2f53] text-white px-3 py-2 rounded-lg font-semibold hover:shadow-lg hover:opacity-90 transition"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

      </div>

  </div>
  
  );
};







const InternationalDropdownMenu = ({items}) => {

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const visibleInternationalItems = showMore ? items : items.slice(0, 12);

  return (
    <div
    className="absolute z-[100] translate-x-[-50%] left-1/2 lg:w-[480px] md:w-[450px] sm:w-[300px] xs:w-[250px] bg-gradient-to-r from-white to-gray-50 shadow-lg border border-gray-200 rounded-xl p-2 transition-opacity duration-300 mt-6"
  >
   
      {/* Domestic Packages Section */}
      <div>
        <ul className="grid md:grid-cols-3 grid-cols-1 gap-1">
          {visibleInternationalItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block py-1 bg-gray-100 hover:bg-[#3d71cc] hover:text-white rounded-lg font-medium text-sm transition"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleToggle}
          className="mt-4 bg-gradient-to-r from-[#3d71cc] to-[#1a2f53] text-white px-3 py-2 rounded-lg font-semibold hover:shadow-lg hover:opacity-90 transition"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

      </div>

  </div>
  
  );
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

  return (
    <div
      className={`flex items-center gap-6 ${mobile ? "lg:mt-0 lg:hidden" : "hidden lg:flex md:hidden"
        }`}
    >
     

      <button
        onClick={handleRequestQuoteOpenModal}
        className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl"
      >
        Trip Planners
      </button>

      <RequestQuoteModal
        isRequestQuoteModalOpen={isRequestQuoteModalOpen}
        handleRequestQuoteCloseModal={handleRequestQuoteCloseModal}
      />
    </div>
  );
};

export default Navbar;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// import RequestQuoteModal from "../home/RequestQuoteModal";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const onToggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-white px-5 py-3 relative z-50 w-full">
//       <nav className="flex justify-between items-center mx-auto">
//         <Link to="/">
//           <Logo />
//         </Link>
//         <NavLinks menuOpen={menuOpen} />
//         <MenuToggle onClick={onToggleMenu} menuOpen={menuOpen} />
//         <ContactUs menuOpen={menuOpen} />
//       </nav>
//     </header>
//   );
// };

// const Logo = () => (
//   <div className="z-50">
//     <img
//       className="w-20 cursor-pointer ml-10"
//       src="/Images/Homepageimages/logo.png"
//       alt="Logo"
//     />
//   </div>
// );

// const NavLinks = ({ menuOpen }) => {
//   const [isOnDropDownMenu, setIsOnDropDownMenu] = useState(false);

//   return (
//     <div
//       className={`duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 ${
//         menuOpen ? "top-[60px]" : "top-[-500%]"
//       } lg:w-auto w-full flex items-center px-5 lg:px-0`}
//     >
//       <ul
//         className={`flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto ${
//           menuOpen ? "flex flex-col items-center justify-center" : "hidden lg:flex"
//         }`}
//       >
//         <NavLink to="/" text="Home" />
//         <NavLink to="/about" text="About" />
//         <button>
//           <NavLinkWithDropdown
//             text="Packages"
//             isOnDropDownMenu={isOnDropDownMenu}
//             setIsOnDropDownMenu={setIsOnDropDownMenu}
//           >
//             <DropdownMenu
//               isOnDropDownMenu={isOnDropDownMenu}
//               setIsOnDropDownMenu={setIsOnDropDownMenu}
//               items={dropdownItems}
//             />
//           </NavLinkWithDropdown>
//         </button>
//         <NavLink to="/blogs" text="Blogs" />
//         <NavLink to="/contact" text="Contact" />
//         {menuOpen && <ContactUs mobile />}
//       </ul>
//     </div>
//   );
// };

// const NavLink = ({ to, text }) => (
//   <li className="relative">
//     <Link className="hover:text-[#eb6734] text-base font-semibold" to={to}>
//       {text}
//     </Link>
//   </li>
// );

// const NavLinkWithDropdown = ({
//   text,
//   children,
//   isOnDropDownMenu,
//   setIsOnDropDownMenu,
// }) => {
//   const handleMouseEnter = () => {
//     const ele = document.querySelector(".custom-showHide");
//     if (ele?.classList.contains("hidden")) {
//       ele.classList.remove("hidden");
//     }
//   };

//   const handleMouseLeave = () => {
//     const ele = document.querySelector(".custom-showHide");
//     if (!isOnDropDownMenu && !ele?.classList.contains("hidden")) {
//       setTimeout(() => {
//         ele?.classList.add("hidden");
//       }, 800);
//     }
//   };

//   return (
//     <li className="relative group">
//       <span
//         className="hover:text-[#eb6734] text-base font-semibold cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {text}
//       </span>
//       {children}
//     </li>
//   );
// };

// const DropdownMenu = ({ items, isOnDropDownMenu, setIsOnDropDownMenu }) => {
//   const handleMouseEnter = () => {
//     const ele = document.querySelector(".custom-showHide");
//     if (ele?.classList.contains("hidden")) {
//       ele.classList.remove("hidden");
//     }
//   };

//   const handleMouseLeave = () => {
//     const ele = document.querySelector(".custom-showHide");
//     if (!ele?.classList.contains("hidden")) {
//       ele.classList.add("hidden");
//     }
//   };

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="absolute z-[100] lg:translate-x-[-30%] translate-x-[-50%] px-2 md:px-3 sm:px-5 md:right-8 sm:left-5 left-1/2 lg:left-6 sm:w-[700px]  w-[900px] bg-white border border-gray-200 rounded-lg hidden transition-opacity duration-300 flex mr-4 mt-6 gap-4 sm:gap-6 p-4 custom-showHide"
//     >
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* First Row for Indian Packages */}
//         <div onMouseEnter={() => setIsOnDropDownMenu(true)}>
//           <h1 className="font-bold py-4">Domestic Packages</h1>
//           <ul className="grid  lg:grid-cols-2 grid-cols-2 md:grid-cols-3  sm:grid-cols-2 gap-4">
//             {items.indian.map((item, index) => (
//               <li key={index}>
//                 <Link to={item.to} className="block py-2 hover:bg-gray-100">
//                   {item.text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Second Row for International Packages */}
//         <div onMouseEnter={() => setIsOnDropDownMenu(true)}>
//           <h1 className="font-bold py-4">International Packages</h1>
//           <ul className="grid  lg:grid-cols-2  grid-cols-2  md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {items.international.map((item, index) => (
//               <li key={index}>
//                 <Link to={item.to} className="block py-2 hover:bg-gray-100">
//                   {item.text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// const dropdownItems = {
  
//   indian: [
//     { to: `/tour-packages/Kashmir`, text: "Kashmir" },
//     { to: `/tour-packages/Manali`, text: "Manali" },
//     { to: `/tour-packages/Goa`, text: "Goa" },
//     { to: `/tour-packages/Varanasi`, text: "Varanasi" },
//     { to: `/tour-packages/Gulmarg`, text: "Gulmarg" },
//     { to: `/tour-packages/Shimla`, text: "Shimla" },
//     { to: `/tour-packages/Jammu`, text: "Jammu" },
//     { to: `/tour-packages/Coorg`, text: "Coorg" },
//     { to: `/tour-packages/Kullu`, text: "Kullu" },
//     { to: `/tour-packages/Manikaran`, text: "Manikaran" },
//     { to: `/tour-packages/Lonavala`, text: "Lonavala" },
//     { to: `/tour-packages/Madurai`, text: "Madurai" },
//     { to: `/tour-packages/Kanyakumari`, text: "Kanyakumari" },
//     { to: `/tour-packages/Kerala`, text: "Kerala" },
//     { to: `/tour-packages/Darjeeling`, text: "Darjeeling" },
//     { to: `/tour-packages/Udaipur`, text: "Udaipur" },
//     { to: `/tour-packages/Rameswaram`, text: "Rameswaram" },
//     { to: `/tour-packages/Ooty`, text: "Ooty" },
//     { to: `/tour-packages/Andaman`, text: "Andaman" },
//     { to: `/tour-packages/Mount-Abu`, text: "Mount Abu" },
//     { to: `/tour-packages/Rishikesh`, text: "Rishikesh" },
//     { to: `/tour-packages/Gangtok`, text: "Gangtok" },
//     { to: `/tour-packages/Sikkim`, text: "Sikkim" },
//     { to: `/tour-packages/Munnar`, text: "Munnar" },
//   ],

//   international: [
//     { to: `/tour-packages/Thailand`, text: "Thailand" },
//     { to: `/tour-packages/UAE`, text: "United Arab Emirates" },
//     { to: `/tour-packages/Indonesia`, text: "Indonesia" },
//     { to: `/tour-packages/Maldives`, text: "Maldives" },
//     { to: `/tour-packages/Saudi-Arabia`, text: "Saudi Arabia" },
//     { to: `/tour-packages/Malaysia`, text: "Malaysia" },
//     { to: `/tour-packages/USA`, text: "United States of America" },
//     { to: `/tour-packages/Spain`, text: "Spain" },
//     { to: `/tour-packages/Israel`, text: "Israel" },
//     { to: `/tour-packages/France`, text: "France" },
//     { to: `/tour-packages/Bhutan`, text: "Bhutan" },
//     { to: `/tour-packages/China`, text: "China" },
//     { to: `/tour-packages/Vietnam`, text: "Vietnam" },
//     { to: `/tour-packages/UK`, text: "United Kingdom" },
//     { to: `/tour-packages/Tunisia`, text: "Tunisia" },
//     { to: `/tour-packages/Sri-Lanka`, text: "Sri Lanka" },
//     { to: `/tour-packages/Russia`, text: "Russia" },
//     { to: `/tour-packages/Japan`, text: "Japan" },
//     { to: `/tour-packages/Great-Britain`, text: "Great Britain" },
//     { to: `/tour-packages/Italy`, text: "Italy" },
//     { to: `/tour-packages/Estonia`, text: "Estonia" },
//     { to: `/tour-packages/Australia`, text: "Australia" },
//     { to: `/tour-packages/Turkey`, text: "Turkey" },
//     { to: `/tour-packages/Nepal`, text: "Nepal" },
//   ],
// };


// const MenuToggle = ({ onClick, menuOpen }) => (
//   <div onClick={onClick} className="text-2xl cursor-pointer lg:hidden z-50">
//     {menuOpen ? (
//       <svg
//         className="h-6 w-6 text-gray-700 transition-transform transform rotate-90"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     ) : (
//       <svg
//         className="h-6 w-6 text-gray-700 transition-transform transform rotate-0"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4 6h16M4 12h16m-7 6h7"
//         />
//       </svg>
//     )}
//   </div>
// );

// const ContactUs = ({ mobile = false }) => {

//   const [isRequestQuoteModalOpen, setIsRequestQuoteModalOpen] = useState(false);

  

//   const handleRequestQuoteOpenModal = () => {
//     setIsRequestQuoteModalOpen(true);
//   };

//   const handleRequestQuoteCloseModal = () => {
//     setIsRequestQuoteModalOpen(false);
//   };

//   return <div
//     className={`flex items-center gap-6 ${
//       mobile ? "lg:mt-0 lg:hidden" : "hidden lg:flex md:hidden"
//     }`}
//   >
//     <Link
//       to="/B2BLogin"
//       className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl"
//     >
//       <CiUser color="white" size={20} />
//       Login
//     </Link>


//     <button
//       onClick={handleRequestQuoteOpenModal}
//       className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl"
//     >
      
//       Trip Planner
     
//     </button>


//     <RequestQuoteModal
//             isRequestQuoteModalOpen={isRequestQuoteModalOpen}
//             handleRequestQuoteCloseModal={handleRequestQuoteCloseModal}
//           />

//   </div>
// }

// export default Navbar;










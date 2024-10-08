import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Blogs from "./pages/BlogsPage.jsx";

import Testimonials from "./pages/Testimonials.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermandconditionPage from "./pages/TermandconditionPage.jsx";

import TourPackages from "./pages/TourPackages.jsx";
import BlogDetail from "./pages/BlogPage/BlogDetail.jsx";
import Packagedetails from "./pages/Package/Packagedetails.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="font-dm-sans ">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/B2BLogin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tour-packages/:name" element={<TourPackages />} />
          <Route path="/destination" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
      
          <Route path="/testimonails" element={<Testimonials />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicyPage/>} />
          <Route path="/terms" element={<TermandconditionPage/>} />
          <Route path="/blogdetail/:id" element={<BlogDetail/>} />
          <Route path="/package-details/:id" element={<Packagedetails/>} />

          
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

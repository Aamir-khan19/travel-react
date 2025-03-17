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
import TripIdeaPage from "./pages/TripIdeaPage.jsx";

import { store } from "./app/store";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardUsers from "./pages/DashboardUsers.jsx";
import DashboardEditUser from "./pages/DashboardEditUser.jsx";
import DashboardMyAccount from "./pages/DashboardMyAccount.jsx";
import DashboardMyItineraries from "./pages/DashboardMyItineraries.jsx";
import DashboardMyreviews from "./pages/DashboardMyreviews.jsx";
import DashboardMyreport from "./pages/DashboardMyreport.jsx";
import DashboardMyteam from "./pages/DashboardMyteam.jsx";
import DashboardMyItinerariesBuilderParent from "./pages/DashboardMyItinerariesBuilderParent.jsx";
import DashboardUpdateItineraryParent from "./pages/DashboardUpdateItineraryParent.jsx";
import DashboardBlogs from "./pages/DashboardBlogs.jsx";
import DashboardCreateBlog from "./pages/DashboardCreateBlog.jsx";
import DashboardEditBlog from "./pages/DashboardEditBlog.jsx";
import DashboardVerifiedLeads from "./pages/DashboardVerifiedLeads.jsx";
import DashBoardQueriesCustomizeItinerary from "./pages/DashboardQueriesCustomizeItinerary.jsx";
import DashboardGeneralLeads from "./pages/DashboardGeneralLeads.jsx";
import DashboardBlogCategories from "./pages/DashboardBlogCategories.jsx";
import DashboardCreateBlogCategory from "./pages/DashboardCreateBlogCategory.jsx";
import DashboardEditBlogCategory from "./pages/DashboardEditBlogCategory.jsx";
import SitemapComponent from "./pages/Sitemap.jsx";
import DashboardBlogContentImages from "./pages/DashboardBlogContentImages.jsx";
import DashboardCreateBlogContentImages from "./pages/DashboardCreateBlogContentImages.jsx";
import DashboardEditBlogContentImages from "./pages/DashboardEditBlogContentImages.jsx";
import AllInternationalItinerariesPage from "./pages/AllInternationalItinerariesPage.jsx";
import AllDomesticItinerariesPage from "./pages/AllDomesticItinerariesPage.jsx";
import AllPlacesToVisit from "./pages/AllPlacesToVisit.jsx";
import ParticularVerifiedTravelAgentDetailsPage from "./pages/ParticularVerifiedTravelAgentDetailsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
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
            <Route path="/blog" element={<Blogs />} />

            <Route path="/testimonails" element={<Testimonials />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermandconditionPage />} />
            <Route path="/blog/:blog_slug" element={<BlogDetail />} />
            <Route path="/package-details/:id" element={<Packagedetails />} />

            <Route path="/trip-ideas/:name/:id" element={<TripIdeaPage />} />

            <Route path="/b2b-signup" element={<SignUp />} />
            <Route path="/b2b-login" element={<SignIn />} />
            <Route path="/all-international-itineraries" element={<AllInternationalItinerariesPage />} />
            <Route path='/all-domestic-itineraries' element={<AllDomesticItinerariesPage />} />
            <Route path="/all-places-to-visit" element={<AllPlacesToVisit />} />
            <Route path="/verified-travel-agent/:id" element={<ParticularVerifiedTravelAgentDetailsPage />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-users" element={<DashboardUsers />} />
            <Route
              path="/dashboard-edit-user/:id"
              element={<DashboardEditUser />}
            />
            <Route
              path="/dashboard-my-account"
              element={<DashboardMyAccount />}
            />
            <Route
              path="/dashboard-my-itineraries"
              element={<DashboardMyItineraries />}
            />
            <Route
              path="/dashboard-my-itineraries-builder"
              element={<DashboardMyItinerariesBuilderParent />}
            />

            <Route
            path="/dashboard-update-itinerary/:id"
            element={<DashboardUpdateItineraryParent />}
            />

            <Route
            path="/dashboard-blogs"
            element={<DashboardBlogs />}
            />

            <Route
            path="/dashboard-create-blog"
            element={<DashboardCreateBlog />}
            />

            <Route
            path="/dashboard-edit-blog/:id"
            element={<DashboardEditBlog />}
            />

            <Route 
            path="/dashboard-blog-categories"
            element={<DashboardBlogCategories />}
            />

      

            <Route
            path="/dashboard-create-blog-category"
            element={<DashboardCreateBlogCategory />}
            />

<Route
            path="/dashboard-edit-blog-category/:id"
            element={<DashboardEditBlogCategory />}
            />

<Route
            path="/dashboard-blog-content-images"
            element={<DashboardBlogContentImages />}
            />

<Route
            path="/dashboard-create-blog-content-images"
            element={<DashboardCreateBlogContentImages />}
            />


<Route
            path="/dashboard-edit-blog-content-images/:id"
            element={<DashboardEditBlogContentImages />}
            />


           <Route
           path="/dashboard-verifed-leads"
           element={<DashboardVerifiedLeads />}
           />

           <Route
           path="/dashboard-queries-customize-itinerary"
           element={<DashBoardQueriesCustomizeItinerary />}
           />

<Route
           path="/dashboard-general-leads"
           element={<DashboardGeneralLeads />}
           />


           <Route
           path="/sitemap.xml"
           element={<SitemapComponent />} 
           />

            <Route path="/dashboard-my-reviews" element={<DashboardMyreviews />} />
          <Route path="/dashboard-my-report" element={<DashboardMyreport/>} /> 
          <Route path="/dashboard-my-team" element={<DashboardMyteam/>} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

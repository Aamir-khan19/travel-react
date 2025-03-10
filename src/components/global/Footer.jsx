import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="global_footer" className=" bg-gradient-to-br from-[#fb3203] via-[#61616177] to-[#01055b] text-white dark:bg-neutral-700 dark:text-white/75 w-full">



      <div className="px-5 py-1">


        <div className="grid gap-1 sm:grid-cols-3 lg:grid-cols-6">

        <div className="flex flex-col gap-2">

<div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
    <h6 className="font-semibold uppercase">Support</h6>
    <ul>
      
   
      <li className=" text-sm">
        <a href="/about" className="text-white dark:text-neutral-200">About Us</a>
      </li>

      <li className=" text-sm">
        <a href="/contact" className="text-white dark:text-neutral-200">Contact Us</a>
      </li>
      
      <li className=" text-sm">
        <a
          href="/privacyPolicy"
          className="text-white dark:text-neutral-200"
        >
          Privacy Policy
        </a>
      </li>
      <li className="mb-1 text-sm">
        <a href="/terms" className="text-white dark:text-neutral-200">
          Terms of Use
        </a>
      </li>
    </ul>

  </div>

</div>




   {/* extra links starts here  */}
   <div className="flex flex-col lg:justify-start lg:items-start items-center">

<h6 className="font-semibold uppercase">Pages</h6>
<ul>

 
  <li className="text-sm"><RouterLink to="#" className="text-white dark:text-neutral-200">Join with us</RouterLink></li>
 


 <li className="text-sm"><RouterLink to="#" className="text-white dark:text-neutral-200">Blog</RouterLink></li>

 <li className=" text-sm" ><RouterLink to="#" className="text-white dark:text-neutral-200">Testimonials</RouterLink></li>

 <li className=" text-sm" ><RouterLink to="#" className="text-white dark:text-neutral-200">Feedback</RouterLink></li>

 <li className="text-sm"><RouterLink to="#" className="text-white dark:text-neutral-200">Help / FAQ</RouterLink></li>


</ul>
</div>

{/* extra links ends here  */}



<div className="flex flex-col lg:justify-start lg:items-start items-center">
            <h6 className="font-semibold uppercase">Domestic</h6>
            <ul>
              <li className=" text-sm"><RouterLink to="/tour-packages/Andaman" className="text-white dark:text-neutral-200">Andaman</RouterLink></li>
             
              <li className=" text-sm"><RouterLink to="/tour-packages/Kashmir" className="text-white dark:text-neutral-200">Kashmir</RouterLink></li>

              <li className=" text-sm"><RouterLink to="/tour-packages/Himachal-Pradesh" className="text-white dark:text-neutral-200">Himachal Pradesh</RouterLink></li>

              <li className=" text-sm"><RouterLink to="/tour-packages/Uttarakhand" className="text-white dark:text-neutral-200">Uttarakhand</RouterLink></li>

              <li className="text-sm"><RouterLink to="/tour-packages/Kerala" className="text-white dark:text-neutral-200">Kerala</RouterLink></li>
            
            </ul>
          </div>

          <div className="flex flex-col lg:justify-start lg:items-start items-center">
            <h6 className=" font-semibold uppercase">International</h6>
            <ul>
              <li className=" text-sm"><RouterLink to="/tour-packages/UAE" className="text-white dark:text-neutral-200">Dubai</RouterLink></li>
             
              <li className=" text-sm"><RouterLink to="/tour-packages/Indonesia" className="text-white dark:text-neutral-200">Indonesia</RouterLink></li>

              <li className=" text-sm"><RouterLink to="/tour-packages/Thailand" className="text-white dark:text-neutral-200">Thailand</RouterLink></li>

              <li className=" text-sm"><RouterLink to="/tour-packages/Malaysia" className="text-white dark:text-neutral-200">Malaysia</RouterLink></li>

              <li className=" text-sm"><RouterLink to="/tour-packages/Maldives" className="text-white dark:text-neutral-200">Maldives</RouterLink></li>
            
            </ul>
          </div>
        



          <div className="flex flex-col lg:justify-start lg:items-start items-center">
            <h6 className="font-semibold uppercase">Quick Links</h6>

          <ul className="flex flex-col lg:justify-start lg:items-start items-center">
              <li className=" text-sm">
                <a href="/" className="text-white dark:text-neutral-200">Home</a>
              </li>
             
              <li className=" text-sm">
                <RouterLink to="/b2b-login" className="text-white dark:text-neutral-200 cursor-pointer">B2B Login</RouterLink>
              </li>
            </ul>

          </div>


          <div className="flex flex-col lg:justify-start lg:items-start items-center">
            <h6 className="font-semibold uppercase">Trip Ideas</h6>
            <ul>
              <li className=" text-sm"  ><RouterLink to="/trip-ideas/Visa-Free-Countries/1" className="text-white dark:text-neutral-200">Visa Free Countries</RouterLink></li>
              <li className=" text-sm"  ><RouterLink to="/trip-ideas/Best-Places-Near-Delhi/2" className="text-white dark:text-neutral-200">Best Places Near Delhi</RouterLink></li>
              <li  className=" text-sm" ><RouterLink to="/trip-ideas/Economic-Budget-Places/3" className="text-white dark:text-neutral-200">Economic Budget Places</RouterLink></li>
              <li className=" text-sm"  ><RouterLink to="/trip-ideas/Honeymoon-Destinations/4" className="text-white dark:text-neutral-200">Honeymoon Destinations</RouterLink></li>
              <li className=" text-sm" ><RouterLink to="/trip-ideas/Beautiful-Women-Countries/8" className="text-white dark:text-neutral-200">Romantic Hotels Chennai</RouterLink></li>
            </ul>
          </div>



        </div>


       
        <div className="mt-2 flex flex-col md:flex-row justify-center items-center p-2 dark:bg-neutral-700">


        <div className="flex flex-col gap-2 lg:justify-start lg:items-end items-center mr-2">
            <div className="flex flex-col lg:justify-start lg:items-start items-center">
              <div className="flex space-x-6">
                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100091741043983&mibextid=ZbWKwL"
                    className="text-[#4267B2]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="h-6 w-6" />
                  </a>
                </div>
                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/travelnworld_official/"
                    className="text-[#E1306C]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
                <div className="p-2 bg-red-500 rounded-full flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/@travelnworld_official"
                    className="text-[#E1306C]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>


          <span>©2025@Travelnworld, All rights reserved</span>
        </div>

      </div>

     
    </footer>
  );
};

export default Footer;
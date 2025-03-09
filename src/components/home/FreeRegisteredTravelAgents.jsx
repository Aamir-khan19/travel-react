import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaSearch,
} from "react-icons/fa";

const FreeRegisteredTravelAgents = () => {
  const ourTravelAgents = [
    {
      name: "Wanderlust Travel World",
      phone: "7407300991",
      email: "wanderlusttravelworld@gmail.com",
    },
    {
      name: "RR Tours and Travels",
      phone: "6304234227",
      email: "ravirajendar24@gmail.com",
    },
    {
      name: "Finna Travel",
      phone: "7006457689",
      email: "finnatravels@gmail.com",
    },
    {
      name: "Bharat Ecab",
      phone: "8882906451",
      email: "bharatecab00@gmail.com",
    },
    {
      name: "Trip Bouquet",
      phone: "7303193848",
      email: "support@tripbouquet.com",
    },
    {
      name: "Trawell.in",
      phone: "7799591230",
      email: "trawell.in@gmail.com",
    },
    {
      name: "Qugo",
      phone: "7411940703",
      email: "Qugo@gmail.com",
    },
    {
      name: "Bhalla Travels",
      phone: "7678223408",
      email: "bhallatravels@gmail.com",
    },
    {
      name: "Cute Voyages",
      phone: "8121202999",
      email: "sales@cutevoyages.in",
    },
    {
      name: "Holiday Trip Advisor",
      phone: "8197200830",
      email: "info@holidaytripadvisor.in",
    },
    {
      name: "Trip To Sky Pvt Ltd",
      phone: "8374837460",
      email: "care@trip2sky.com",
    },

    {
      name: "Taha International Tours and Travels",
      phone: "8975850699",
      email: "tahatrips@gmail.com",
    },
    {
      name: "Aanantham Resorts",
      phone: "9736200082",
      email: "booking.aanantham@gmail.com",
    },
    {
      name: " Travelbee Holiday's",
      phone: "9152023332",
      email: "holidaystravelbee@gmail.com",
    },
    {
      name: " Global Gateway",
      phone: " 7201017126",
      email: "globalgatewaystv@gmail.com",
    },
    {
      name: " Around Pondy",
      phone: " 8940308019",
      email: "aroundpondy@gmail.com",
    },

    {
      name: " Kesariya Travels ",
      phone: " 7733937777 ",
      email: "kesariyatravels0094@gmail.com",
    },

    {
      name: "Ku Tour Travel",
      phone: "9422267336",
      email: "KUTRAVELS23@GMAIL.COM",
    },

    {
      name: "Siddhesh Tours and Travels",
      phone: "9422267336",
      email: "id-phalak.mahesh@gmail.com",
    },
    {
      name: "Sarvadnya Travels",
      phone: "9822281125",
      email: "pramodnamde@rediffmail.com",
    },
    {
      name: "Travel Triangle Tours",
      phone: "8850049553",
      email: "traveltriangle77@gmail.com",
    },
    {
      name: "Vanshika Caps",
      phone: "888128888",
      email: "vanshikatravelsagra@gmail.com",
    },
    {
      name: "Al Safari Travels",
      phone: "9335515971",
      email: "allsafaritravels@gmail.com",
    },

    {
      name: "TTC Tour & Travels",
      phone: "9219329824",
      email: "ashutoshreema0077@gmail.com",
    },
    {
      name: "Anupam Travels",
      phone: "7817083788",
      email: "anupamtravels2024@gmail.com",
    },

    {
      name: "Shivansh Tour and Travels",
      phone: " 9992100588",
      email: "lokeshsingh51098@gmail.com",
    },
    {
      name: "Tattvam Tours",
      phone: " 9758840400",
      email: "tattvamtours@gmail.com",
    },
    {
      name: "GRV Holidays Pvt Ltd",
      phone: "9557471004",
      email: "grvholidayslko@gmail.com",
    },

    {
      name: "Chillax Holidays",
      phone: "9968388499",
      email: "sales@chillaxholidays.com",
    },
    {
      name: "Travelouge Services",
      phone: "9735055161",
      email: "travelougeservices@ymail.com",
    },
    {
      name: "Nandita Tours and Travels",
      phone: "9560523667",
      email: "nirjal.biswa1490@gmail.com",
    },
    {
      name: "LSE Travel & Holidays",
      phone: "9642640787",
      email: "lsetravelandholidays@gmail.com",
    },
    {
      name: "Purna Tours ",
      phone: " 8218886132",
      email: "purnatours23@gmail.com",
    },
    {
      name: "Ak Sharma Tour Travel Dharmshala ",
      phone: "7876649577",
      email: "aksharmatourtraveldharmshala@gmail.com",
    },
    {
      name: "Dinesh Tours and Travels ",
      phone: "7304814617",
      email: "dineshmarathe46@gmail.com",
    },
    {
      name: "MM Holidays Pvt Ltd",
      phone: "7770009889",
      email: "info@mmholidays.in",
    },
    {
      name: " The Trip Organiser",
      phone: "9311789315",
      email: "info@thetriporganiser.in",
    },
    {
      name: "SK travels",
      phone: "9010201383,",
      email: "sharansharan1530@gmail.com",
    },
    {
      name: "Ryan Tour and Travels",
      phone: "6265433713",
      email: "andrewmacfarland78@gmail.com",
    },

    {
      name: "Aastha Travels",
      phone: "9993555200",
      email: "aasthatravelsbhilai@gmail.com",
    },
    {
      name: "Devshanta Tours & Travels",
      phone: "9826133289",
      email: "Devshantatours@gmail.com",
    },
    {
      name: "Chandrak Tour's and  Travels",
      phone: "7828965347",
      email: "chandrakartours@gmail.com",
    },
    {
      name: "DEV's Travels",
      phone: "9898019990",
      email: "devtravels9990@gmail.com",
    },
    {
      name: "Baanvi Tour And Travel! ",
      phone: "9893586264",
      email: "baanvitoursandtravels@gmail.com",
    },
    {
      name: "Jayhind's Tour's and Travels",
      phone: "7575872160",
      email: "Monumanihar1785@gmail.com",
    },

    {
      name: "Dev Travels",
      phone: " 8461848287",
      email: "devpatel11295@gmail.com",
    },

    {
      name: "ADIL TRAVEL AND TOURISM.",
      phone: "9039309252",
      email: "xywz@gmail.com",
    },

    {
      name: "info@eltour,in",
      phone: "6261792258",
      email: "info@eltour,in",
    },

    {
      name: "Mallick Tour & Travels",
      phone: "8357979333",
      email: "sarfrajmallick0786@gmail.com",
    },

    {
      name: "Sahu Tour & Travels",
      phone: "7024198823",
      email: "pk0678003@gmail.com",
    },

    {
      name: "Shri Sai Kripa Tour & Travels",
      phone: "7024198823",
      email: "kumartulesh98@gmail.com",
    },

    {
      name: "Unite Travels",
      phone: "7024198823",
      email: "unite_travels@yahoo.com",
    },

    {
      name: "Krishna Tour's & Travels",
      phone: "7024198823",
      email: "reeyansha@gmail.com",
    },

    {
      name: "Comfort Cabs",
      phone: "70008 31922 ",
      email: "himanchal09yadav@gmail.com ",
    },

    {
      name: "Global Holidays Maker",
      phone: "9755523444",
      email: "support@mahaveer.agency",
    },
    {
      name: "CRGB Kiosk Urkura",
      phone: "7000484490",
      email: "crgburkura@gmail.com",
    },

    {
      name: "Awesome Trips",
      phone: "9589977570",
      email: "info@awsometrips.com",
    },

    {
      name: "Bhilai Durg",
      phone: "9111155995",
      email: "xyzz@gmail.com",
    },

    {
      name: "SB Holidays",
      phone: "9424100220",
      email: "sbholidays2007@gmail.com",
    },

    {
      name: "Travel Tracks DMC",
      phone: "7770917775",
      email: "info.traveltracks@gmail.com",
    },

    {
      name: "Travel Guru",
      phone: "9584297000",
      email: "travelguru008@gmail.com",
    },

    {
      name: "KwiK2 Travels",
      phone: "9329116616",
      email: "srinivaskwik2@gmail.com",
    },
    {
      name: "Best TOUR And TRAVELS",
      phone: "9340954240",
      email: "sonuraja30000@gmail.com",
    },

    {
      name: "MG TRAVELS",
      phone: "8319695945",
      email: "mgtravelsraipur@gmail.com",
    },

    {
      name: "The Sky  TRAVELS",
      phone: "9009926197",
      email: "shreyanshp1996@gmail.com",
    },
    {
      name: "Raghav TRAVELS",
      phone: "8109125110",
      email: "raghavtravels@hotmail.com",
    },
    {
      name: "Deep tour and travels",
      phone: "9827177456",
      email: "chandradeep.warde@gmail.com",
    },
    {
      name: "Rathore Tour and travels",
      phone: "9893197484",
      email: "rjk.busi@gmail.com",
    },
    {
      name: "JK Holidays",
      phone: "9981401936 ",
      email: "jkholidaysrpr@gmail.com ",
    },

    {
      name: "Rk Travel",
      phone: "9300436715",
      email: "Travelrk2022@gmail.com ",
    },
    {
      name: "Travel Asia",
      phone: "9864211050",
      email: "Info@travelasia.co.in",
    },
    {
      name: "Hamara Jagdalpur",
      phone: " 9701900209",
      email: "hamarajagdalpur@gmail.com",
    },
    {
      name: "Agarwal tours",
      phone: "6900471026",
      email: "agarwaltours10@gmail.com",
    },

    {
      name: "Uphoria Travels",
      phone: "8811883337",
      email: "uphoriatravel@gmail.com",
    },

    {
      name: "Jigyasa Tour and Travels",
      phone: "9424298081",
      email: "chandandevnath04@gmail.com",
    },

    {
      name: " kaziranga Tour and Travels",
      phone: "9954208262",
      email: "kaziranga _assam1964@rediffmail.com",
    },
    {
      name: "GPS Travel.",
      phone: "6001089716",
      email: "xymz@gmail.com",
    },

    {
      name: "DD TRAVELS",
      phone: "8822088550",
      email: "xynz@gmail.com",
    },

    {
      name: "Rajdhani Tour & Travels",
      phone: "9993799503",
      email: "rohit.jain88173@gmail.com",
    },

    {
      name: "Two Brothers Tours and Travels",
      phone: "9365200790",
      email: "yeahyeamozumderas@gmail.com",
    },

    {
      name: "Kaziranga Holidays",
      phone: "9706044755",
      email: "kazirangaholidays@gmail.com",
    },
    {
      name: "Rajveer Travel Agency North East",
      phone: "6000603868",
      email: "ranveerchaudhary534@gmail.com ",
    },

    {
      name: "SATGURU HOLIDAYS",
      phone: "9425259086",
      email: "satgurutravelskanker@gmail.com",
    },

    {
      name: "HOLIDAYS91",
      phone: "95932 88288",
      email: "Sales@holidays91.com",
    },

    {
      name: "LAZEEZ TOURS AND TRAVELS",
      phone: "98640 40046",
      email: "lazeeztravel@hotmail.com",
    },

    {
      name: "cabin Northeast",
      phone: " 8453728848",
      email: "cabinnortheast@gmail.com",
    },

    {
      name: "Assam Discovery",
      phone: " 9859200091",
      email: "assamtourjrt@gmail.com",
    },
    {
      name: "OffbeatTreks",
      phone: "9395955541",
      email: "hi.offbeat.treks@gmail.com",
    },
    {
      name: "Vacation connection",
      phone: "9926949009",
      email: "info@vacationconnectionc.co.in",
    },

    {
      name: "Destination Redefined",
      phone: "9685522206",
      email: "info@destinationredefined.com",
    },
    {
      name: "Shivam Travels",
      phone: "9109368605",
      email: "gaursmt@gmail.com ",
    },
    {
      name: "Har din holiday",
      phone: "7880077227",
      email: "Hardinholiday@gmail.com",
    },
    {
      name: "Rahul Travels",
      phone: "9101744325",
      email: "rahultravels39@gmail.com ",
    },

    {
      name: "Imity Travels",
      phone: "7019788358",
      email: "inquiries@imitytravels.com ",
    },

    {
      name: "Shree Ram Travels",
      phone: "9101380321",
      email: "maruti101918@gmail.com",
    },
    {
      name: "Uniworld Holidays",
      phone: "9998015443",
      email: "uniworldholidays86@gmail.com",
    },

    {
      name: " C&k holidays",
      phone: "9173436808",
      email: "cnkholidays@out look .com",
    },
    {
      name: "Martand tours and travels",
      phone: "7940034656",
      email: " info@martandtravels.com",
    },

    {
      name: "Gunjan Holidays",
      phone: "9998493934",
      email: " info@gunjanholidays.com",
    },
    {
      name: "Ananya Tours &Travels",
      phone: "8135070150",
      email: "trisivassam@gmail.com",
    },
    {
      name: "GURUKRIPA TRAVELS",
      phone: "7772037300",
      email: "gktraipur@gmail.com",
    },
    {
      name: "CN TRAVELS",
      phone: " 8011332276 ",
      email: "Cntoursntravels@hotmail.com",
    },
    {
      name: "Dhanjeeta Tours & Travels ",
      phone: "9954075006",
      email: "dhanjeeta@gmail.com",
    },

    {
      name: " Aagaman Travels ",
      phone: "9864640842",
      email: " info@aagaman.in ",
    },
    {
      name: "Sidhi Vinayak Travels",
      phone: "9435305107",
      email: " info.avinashjain@gmail.com",
    },
    {
      name: "River Journeys India",
      phone: "9864212282",
      email: "sail@riverjourneysindia.com",
    },
    {
      name: "HOLIDAY MART DMC",
      phone: " 8822012365",
      email: "holidaymartdmcb2b@gmail.com",
    },
    {
      name: "Bhimsari Travels ",
      phone: "9662567480",
      email: "bhimsariatravles@gmail.com",
    },
    {
      name: "FOOTHILLS TOUR",
      phone: "93653 85990",
      email: "sales@foothillstour.in",
    },
    {
      name: "GANPATI TOURS N TRAVELS ",
      phone: "9864344731",
      email: "ganpatitoursntravels@yahoo.in",
    },
    {
      name: "Aditi tour and travels",
      phone: "9577876872",
      email: "abhipradhan01@gmail.com ",
    },
    {
      name: "CN Travels",
      phone: "8011332276",
      email: "Cntoursntravels@hotmail.com",
    },
    {
      name: "Bhagirathi Travels ",
      phone: "7900400000",
      email: "bhagirathitravels1975@gmail.com",
    },

    {
      name: "Heaven Uttarakhand Tourism",
      Phone: "9410380388",
      email: "Heavenuttarakhand@gmail.com",
    },
    {
      name: "BORAH TRAVELS",
      Phone: "9854784711",
      email: "koushikborah296@gmail.com",
    },
    {
      name: "Bhumika Tours and Travels ",
      Phone: "9864461585",
      email: "pinkuchetry25@gmail.com",
    },
    {
      name: "Classic Travels",
      Phone: "9435037108",
      email: "Classic_travels7@yahoo.com",
    },
    {
      name: "APEX TOURS AND TRAVELS",
      Phone: "9954819748",
      email: "APEX TOURS AND TRAVELS",
    },
    {
      name: "Janta Travels",
      Phone: "8133913671",
      email: "jabhilashborbora@gmail.com",
    },

    {
      name: "Global Yatra",
      Phone: "9460993030",
      email: " globalyatrahub24@gmail.com",
    },

    {
      name: "Divian India Travel",
      Phone: " 8077547301",
      email: "divineindiatour01@gmail.com",
    },
    {
      name: "Baggan Tour and Travels",
      Phone: "9634095063",
      email: "baggantourandtravels@gmail.com",
    },

    {
      name: "Anand Travels",
      Phone: "7002778792",
      email: "kasingla26@gmail.com",
    },
    {
      name: "Jai Jawan Travels",
      Phone: "9854003817",
      email: "jaijtrav@gmail.com",
    },
    {
      name: "Jyoti Travels",
      Phone: "8638029192",
      email: "jyotitravels2222@gmail.com",
    },

    {
      name: "ANSHUMAN Travels",
      Phone: "9954056775",
      email: "travels.assam@gmail.com",
    },

    {
      name: "HL Travels",
      Phone: "9435124521",
      email: "assam@hltravels.com",
    },
    {
      name: "Ayaan Travel",
      Phone: "7002183423",
      email: "tridibdutta141@gmail.com",
    },

    {
      name: "Dilip's Travel Comfort",
      Phone: "7002050960",
      email: "dtc_jrt@yahoo.com",
    },

    {
      name: "Kamrup Tour and Travels ",
      Phone: "7002929398",
      email: "Kamruptourtravels@gmail.com",
    },
    {
      name: "Patkai Travel",
      Phone: "9864355015",
      email: "patkaitravels19@gmail.com",
    },
    {
      name: "Urgent Travels India",
      Phone: "9085147501",
      email: "urgenttravelsindia@gmail.com",
    },
    {
      name: "Rocket Cab",
      Phone: "9085147501",
      email: "info.rocketcab@gmail.com",
    },
    {
      name: "JBA TRAVEL AGENCY",
      phone: "8638498396",
      email: "jafaralijmaa@gmail.com",
    },

    {
      name: "Giri Bandhu Tour and Travel",
      phone: "8638498396",
      email: "gbandhucabs@gmail.com",
    },
    {
      name: "Capital Travels",
      phone: "9890363536",
      email: "capitaltoursind@gmail.com",
    },
    {
      name: "Shree Kateel Tour and Travels",
      phone: "9739346233",
      email: "parappapujar89@hgmail.com",
    },
    {
      name: "Yusra Travel",
      phone: "9035344155",
      email: "Mouzeema@gmail.com",
    },
    {
      name: "Citizen tours & travels",
      phone: "9980718091",
      email: "citizentoursandtravels8@gmail.com",
    },
    {
      name: "Jalas Tourism",
      phone: "7862992449",
      email: "jalsarourism@gmail.com",
    },
    {
      name: "Jalas Tourism",
      phone: "7862992449",
      email: "jalsarourism@gmail.com",
    },
    {
      name: "Aradhy Tour & Travel",
      phone: "7338062316",
      email: "rohitrs28@gmail.com",
    },
    {
      name: "Jain Travel",
      phone: "6003379339",
      email: "jaintravel2021@gmail.com",
    },
    {
      name: "My Trip mate",
      phone: "9435338100",
      email: "mail2mytripmate@gmail.com",
    },
    {
      name: "Guru Ashish Tour & Travel",
      phone: "9823460500",
      email: "guruashishtourasndtravels@gmail.com",
    },
    {
      name: "Al limraa International Tours & Travels ",
      phone: "9886700670",
      email: "allimraahajumrah@yahoo.com",
    },
    {
      name: "Cozy Tour & Travels ",
      phone: "9864021279",
      email: "info@cozytravels.in",
    },
    {
      name: "Apniyatra Tour's and Travels",
      phone: "9864021279",
      email: "apniyatratoursandtravels@gmail.com",
    },
    {
      name: "MAHALAXMI Tour Organizer",
      phone: "8011621169",
      email: "mahalaxmi109@rediffmail.com",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 12,
            },
          },
        },
      });
    }

    // Auto carousel - move to the next slide every 3 seconds
    const interval = setInterval(() => {
      if (keenSlider.current) {
        keenSlider.current.next();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
    };
  }, [searchTerm]);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };

  const filteredItems = ourTravelAgents.filter((item) =>
    item?.name.toLowerCase().startsWith(searchTerm?.toLowerCase())
  );

  return (
    <section className="">
      <div className="mx-auto relative max-w-[1340px] px-4 py-10 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Browse Top Travel
          </h2>

          <div className="relative w-full sm:w-auto flex items-center max-w-sm">
            <span className="absolute left-3 text-gray-500">
              <FaSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search travel agents..."
              value={searchTerm}
              onChange={handleInputChange}
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01055b] transition duration-300 ease-in-out shadow-md"
            />
          </div>
        </div>

        <div className="sm:mt-16 relative mt-8 lg:col-span-2 lg:mx-0">
          {/* slider container div starts here */}
          <div ref={sliderContainer} className="keen-slider">
            {(searchTerm === "" ? ourTravelAgents : filteredItems).map(
              (item, i) => (
                <div key={i}>
                  <div className="keen-slider__slide" key={i}>
                    <div className="flex border-[1px] p-5 border-gray-00 rounded-lg relative w-full sm:w-auto min-h-[290px] px-3">
                      <div className="flex sm:flex-row flex-col-reverse sm:justify-start justify-center sm:items-start items-center">
                        <div className="flex gap-5 sm:justify-start justify-center sm:items-start items-center flex-col">
                          <h1 className="text-xl font-bold">{item.name}</h1>
                          <p className="">
                            <span className="font-semibold text-xl">
                              Mobile -{" "}
                            </span>
                            <span className="absolute h-7 mt-1 w-14 blur-sm backdrop:blur-sm bg-gray-500"></span>
                            {item.phone}
                          </p>
                          <p className="flex items-center ">
                            <span className="font-semibold text-xl">
                              Email -{" "}
                            </span>
                            <span className="absolute h-7 left-24 mt-1 w-32 blur-sm backdrop:blur-sm bg-gray-500"></span>
                            {item.email}
                          </p>
                          <Link to="/contact">
                            <button className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]">
                              Contact
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="w-1/3 p-2 bg-white rounded-full flex flex-col items-end justify-between">
                        <a href="#!" className="text-[#2fb347]">
                          <FaWhatsapp className="h-6 w-6" />
                        </a>
                        <a href="#!" className="text-[#4267B2]">
                          <FaPhone className="h-6 w-6" />
                        </a>
                        <a href="#!" className="text-[#4267B2]">
                          <FaFacebookF className="h-6 w-6" />
                        </a>
                        <a href="#!" className="text-[#E1306C]">
                          <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#!" className="text-[#E1306C]">
                          <FaYoutube className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeRegisteredTravelAgents;

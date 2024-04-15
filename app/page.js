"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import CustomModal from "./Component/CustomModal";
import FromSubmit from "./Component/CustomModal/FromSubmit";
import { LiaHotelSolid } from "react-icons/lia";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { GiShop } from "react-icons/gi";

export default function Home() {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const [isModel, setIsModel] = useState(false);
  const [isModel2, setIsModel2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModel(true);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  const handleDownload = () => {
    const pdfUrl = "/assets/docs/LT-Realty-The-Gateway-Sewri-EBrochure.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The-Gateway-Sewri-EBrochure.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const CloseModelHandler = () => {
    setIsModel(false);
  };
  const CloseSucessModelHandler = () => {
    setIsModel2(false);
  };

  return (
    <section>
      <div className="relative">
        <div
          className={`absolute bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
            isSidebarActive ? `translate-x-0` : "-translate-x-full"
          }`}
          id="sidebar"
        >
          <div
            ref={mainSidebar}
            id="main-sidebar"
            className="bg-[#152D7A] text-white w-[320px] min-h-screen"
          >
            <div className="pr-4 text-xl text-right">
              <i
                id="close-sidebar"
                className="p-1 cursor-pointer fa fa-times"
                aria-hidden="true"
              ></i>
            </div>
            <div className="px-4">
              <h1 className="pb-6 text-3xl font-semibold text-center border-b border-peime">
                <div className="w-full py-2">
                  <Image
                    src={"/assets/logo/TheGatewaylogo.png"}
                    alt="logo"
                    className="mx-auto"
                    width={150}
                    height={150}
                  />
                </div>
              </h1>
              <ul className="mt-6">
                <Link href="../#about">
                  <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                    About
                  </li>
                </Link>

                <Link href="../#location">
                  <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                    Location
                  </li>
                </Link>
                <Link href="../#size-prices">
                  <li className=" my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                    Size & Prices
                  </li>
                </Link>
                <Link href="../#amenities">
                  <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                    Amenities
                  </li>
                </Link>
                <Link href="../#agllery">
                  <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                    Gallery
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed z-10 top-0 left-0 w-screen text-white bg-black/50 py-4 px-2 bg-opacity-30">
          <div className="flex justify-between items-center ">
            <img src="/assets/logo/L&Tlogo.jpeg" className="h-10" />
            <div className=" gap-4 font-medium hidden sm:flex">
              <Link
                className=" hover:font-bold transition-all duration-300"
                href={"../#about"}
              >
                About
              </Link>
              <Link
                className=" hover:font-bold transition-all duration-300"
                href={"../#location"}
              >
                Location
              </Link>
              <Link
                className=" hover:font-bold transition-all duration-300"
                href={"../#size-prices"}
              >
                Size & Prices
              </Link>
              <Link
                className=" hover:font-bold transition-all duration-300"
                href={"../#amenities"}
              >
                Amenities
              </Link>
              <Link
                className=" hover:font-bold transition-all duration-300"
                href={"../#gallery"}
              >
                Gallery
              </Link>
            </div>

            <button
              ref={openSidebarButton}
              className="px-4 text-2xl font-bold sm:hidden "
              id="open-sidebar"
              onClick={() => setIsSidebarActive(true)}
            >
              <FaList />
            </button>
            <img
              src="/assets/logo/TheGatewaylogo.png"
              className="h-10 mr-4 hidden sm:block "
            />
          </div>
        </div>

        <video
          className="w-screen min-h-[500px] max-h-screen object-fill hidden slg:block"
          loop
          muted
          autoPlay
        >
          <source src="/assets/video/bg-video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>

        <div className="slg:hidden relative">
          <img
            src="/assets/video/bg-mobile.jpg"
            className=" w-full h-screen aspect-square object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 "></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-center gap-4 ">
          <div className="text-center text-white font-bold mt-32 slg:mt-36 ">
            <div className="mx-2">
              <h2 className="text-2xl">
                WHERE THE ENDLESS OCEAN MEETS AN <br />
                ARCHITECTURAL MASTERPIECE
              </h2>
              <div>
                <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
                  <button
                    onClick={() => {
                      const token = sessionStorage.getItem("Token");
                      if (token) {
                        handleDownload();
                      } else {
                        setIsModel(true);
                      }
                    }}
                    className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
                  >
                    Download Broucher
                  </button>
                  <button
                    onClick={() => setIsModel(true)}
                    className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
                  >
                    Show your Interest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModel && !isModel2 && (
          <CustomModal
            CloseModelHandler={CloseModelHandler}
            setIsModel2={setIsModel2}
          ></CustomModal>
        )}
        {!isModel && isModel2 && (
          <FromSubmit
            CloseSucessModelHandler={CloseSucessModelHandler}
          ></FromSubmit>
        )}
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-3xl mb-2 font-semibold">Size & Prices</h2>
          <table>
            <thead>
              <tr className="bg-blue-800 text-white font-semibold uppercase ">
                <th class="px-2 sm:px-5 py-3 border-e-2 border-white">Type</th>
                <th className="px-2 sm:px-5  border-e-2 py-3">
                  Total RERA area
                </th>
                <th className="px-2 sm:px-5 py-3" colspan="2">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr>
                <td className={`px-2 sm:px-5 py-2 text-sm`}>3 BHK City </td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>1258.3 Sq.ft. </td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 5.70 Cr* +</td>
                <td className={`px-2 sm:px-5 py-2 text-sm hidden sm:block`}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0), setIsModel(true);
                    }}
                  >
                    Enquire Now
                  </button>
                </td>
              </tr>
              <tr>
                <td className={`px-2 sm:px-5 py-2 text-sm`}>3 BHK Sea</td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>1444.9 Sq.ft. </td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 6.75 Cr* + </td>
                <td className={`px-2 sm:px-5 py-2 text-sm  hidden sm:block`}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0), setIsModel(true);
                    }}
                  >
                    Enquire Now
                  </button>
                </td>
              </tr>
              <tr>
                <td className={`px-2 sm:px-5 py-2 text-sm`}>4 BHK</td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>1905.1 Sq.ft.</td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 9.07 Cr* + </td>
                <td className={`px-2 sm:px-5 py-2 text-sm hidden sm:block`}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0), setIsModel(true);
                    }}
                  >
                    Enquire Now
                  </button>
                </td>
              </tr>
              <tr>
                <td className={`px-2 sm:px-5 py-2 text-sm`}>4.5 BHK</td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>2251.5 Sq.ft.</td>
                <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 11 Cr* + </td>
                <td className={`px-2 sm:px-5 py-2 text-sm  hidden sm:block`}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0), setIsModel(true);
                    }}
                  >
                    Enquire Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-3xl mb-2 font-semibold">Rera Number</h2>
          <p className="font-medium">The Gateway – P51900054969</p>
          <img
            src="/assets/docs/RERA-P51900054969-The-Gateway.webp"
            className="w-[200px] h-auto"
            alt="imges"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-2 py-8 my-10 bg-[#D6CDBE]">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">Location </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-6">
            <div
              className="w-full"
              onClick={() => {
                setIsModel(true), window.scrollTo(0, 0);
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.679881231741!2d72.853988!3d19.001207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfb19bcaa7f9%3A0x7e82e2d83a779a90!2sL%26T%20Realty%20The%20Gateway%2C%20Sewri!5e0!3m2!1sen!2sin!4v1713094315942!5m2!1sen!2sin"
                className=" w-full h-full min-h-[300px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-2  gap-6 justify-items-center sm:justify-between">
              <div>
                <h4 className="text-xl font-bold  flex gap-2 mb-3  items-center">
                  <img
                    src="/assets/location-icon/hotel_353893.png"
                    className="w-10 h-10"
                  />
                  5 Star Hotels
                </h4>
                <div className="font-semibold  flex flex-col gap-1">
                  <div>ITC Grand Central - 2 Km</div>
                  <div>The St. Regis - 4 Km</div>
                  <div>Four Seasons - 5 Km</div>
                  <div>The Taj Mahal Palace - 9.7 Km</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold  flex gap-2 mb-3  items-center">
                  <img
                    src="/assets/location-icon/office_13161350.png"
                    className="w-10 h-10"
                  />{" "}
                  Hospitals
                </h4>
                <div className="font-semibold  flex flex-col gap-1">
                  <div>KEM Hospital - 1.5 Km</div>
                  <div>TATA Memorial Hospital - 1.8 Km</div>
                  <div>Global Hospital - 1.7 Km</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold  flex gap-2 mb-3  items-center">
                  <img
                    src="/assets/location-icon/bus_14063504.png"
                    className="w-10 h-10"
                  />{" "}
                  Education Institutes
                </h4>
                <div className="font-semibold  flex flex-col gap-1">
                  <div>Don Bosco High School – 1 Km</div>
                  <div>JCBN international School – 1.2 Km</div>
                  <div>Ruia College – 2 Km</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold  flex gap-2 mb-3  items-center">
                  <img
                    src="/assets/location-icon/store_6030583.png"
                    className="w-10 h-10"
                  />{" "}
                  Shopping Destinations
                </h4>
                <div className="font-semibold  flex flex-col gap-1">
                  <div>Palladium - 5.5 Km</div>
                  <div>Phoneix Market City - 13 Km</div>
                  <div>Atria Mall - 7 Km</div>
                  <div>CR2 - 10.5 Km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

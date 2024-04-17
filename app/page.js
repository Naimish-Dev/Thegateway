"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import CustomModal from "./Component/CustomModal";
import FromSubmit from "./Component/CustomModal/FromSubmit";

import Sliderone from "./Component/SliderOne/sliderone";
import Rera from "./Component/Rera/Rera";
import Gallery from "./Component/Gallery/Gallery";
import Location from "./Component/Location/Location";
import PriseSize from "./Component/PriceSize/PriseSize";
import Helight from "./Component/ProjectHelight/helight";
import Amenities from "./Component/Amenities/Amenitie";

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

  const handleDownload = () => {
    const pdfUrl = "/assets/docs/final pdf for broucher in websites.pdf";

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
    <div>
      <section>
        <div className="relative">
          <div
            className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
              isSidebarActive ? `translate-x-0` : "-translate-x-full"
            }`}
            id="sidebar"
          >
            <div
              ref={mainSidebar}
              id="main-sidebar"
              className="bg-[#152D7A] text-white w-[320px] min-h-screen py-4 h-full"
            >
              <div className="h-[calc(100vh_-_25px)]   px-4 flex flex-col justify-between ">
                <div>
                  <h1 className="pb-6 text-3xl font-semibold text-center border-b border-peime">
                    <div className="w-full py-2">
                      <Link href={"/"}>
                        <Image
                          src={"/assets/logo/logo.png"}
                          alt="logo"
                          className="mx-auto"
                          width={150}
                          height={150}
                        />
                      </Link>
                    </div>
                  </h1>
                  <ul className="mt-6">
                    <Link href="../#about">
                      <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                        About
                      </li>
                    </Link>

                    <Link href="../#amenities">
                      <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                        Amenities
                      </li>
                    </Link>
                    <Link href="../#gallery">
                      <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                        Gallery
                      </li>
                    </Link>

                    <Link href="../#size-prices">
                      <li className=" my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                        Size & Prices
                      </li>
                    </Link>
                    <Link href="../#location">
                      <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#7B4749]">
                        Location
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="text-sm  py-4 border-t w-full text-center border-white">
                  Marketing Associate
                </div>
              </div>
            </div>
          </div>

          <div className="fixed z-10 top-0 left-0 w-screen text-white bg-black/50 py-4 px-2 bg-opacity-30">
            <div className="flex justify-between items-center ">
              <Link href={"/"}>
                <img src="/assets/logo/logo.png" className="h-10" />
                <span className="text-sm ml-10 text-white">
                  {" "}
                  Marketing Associate{" "}
                </span>
              </Link>
              <div className=" gap-4 font-medium hidden sm:flex mr-4">
                <Link
                  className=" hover:font-bold transition-all duration-300"
                  href={"../#about"}
                >
                  About
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
                <Link
                  className=" hover:font-bold transition-all duration-300"
                  href={"../#size-prices"}
                >
                  Size & Prices
                </Link>

                <Link
                  className=" hover:font-bold transition-all duration-300"
                  href={"../#location"}
                >
                  Location
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
            </div>
          </div>

          <div className="slg:block relative">
            <img
              src="assets/building/Screenshot2024-02-27171122.png"
              className="w-screen min-h-[500px] max-h-screen object-fill hidden slg:block"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 "></div>
          </div>

          <div className="slg:hidden relative">
            <img
              src="/assets/video/Mobile-Masthead-The-Gateway-Sewri-IMG-3.webp"
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
        <Helight />
        <Sliderone />
        <Amenities />
        <Gallery />
        <PriseSize setIsModel={setIsModel} />
        <Rera />
        <Location setIsModel={setIsModel} />
      </section>
    </div>
  );
}

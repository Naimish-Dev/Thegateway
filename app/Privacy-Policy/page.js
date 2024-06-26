import Link from "next/link";
import React from "react";
import { FaList } from "react-icons/fa";

const index = () => {
  return (
    <div>
      <div className="fixed z-10 top-0 left-0 w-screen  text-white bg-black/50 py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <div>
            <Link href={"/"}>
              <img src="/assets/logo/logo.png" className="h-10" />
              <span className="text-sm ml-10 "> Marketing Associate </span>
            </Link>
          </div>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">
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
        </div>
      </div>
      <section className="min-h-[calc(100vh_-_87px)]  flex justify-center items-center dark:text-black bg-[#DBDFD7] ">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <h3 className="mb-5 text-4xl text-center font-extrabold">
              {" "}
              Privacy Policy
            </h3>
            <div className="font-bold text-lg">
              Disclaimer: This is not the official website. This website is
              managed by an Registered authorised marketing partner. The content
              is for information purposes only and does not constitute an offer
              to avail of any service. Prices mentioned are subject to change
              without notice and properties mentioned are subject to
              availability. Images for representation purpose only. Website Only
              use for an Advertisement Purpose.
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-blue-800 text-white text-md font-medium leading-5 tracking-[0.21px]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;

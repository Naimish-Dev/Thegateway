import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const FromSubmit = ({ CloseSucessModelHandler,isModelsucess }) => {
  const model2 = useRef();

  useEffect(() => {
    const checkModelHandler = (e) => {
      if (!model2.current.contains(e.target)) {
        CloseSucessModelHandler();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        CloseSucessModelHandler();
      }
    };

    const handleClickOutside = (e) => {
      checkModelHandler(e);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [CloseSucessModelHandler]);

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

  return (
    <div
      ref={model2}
      className={` absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[99] px-8 ${
        isModelsucess
          ? "model-blur2 w-[350px] md:w-full lg:w-[350px]"
          : "model-blur w-[350px] sm:w-fit "
      }  rounded-md `}
    >
      <div className="mt-2 ml-2 ">
        <IoClose
          onClick={CloseSucessModelHandler}
          className="ml-auto text-2xl text-right text-white transition-all duration-300 scale-105 cursor-pointer hover:"
        />
      </div>
      <div className="py-4 pb-8">
        <h1 className=" text-white text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
          Thank you!
        </h1>
        <p className="mb-5 text-lg font-medium text-center text-white ">
          One of our agents will contact you shortly to give you more
          information.
        </p>

        <form className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col mt-3">
            <button
              type="button"
              onClick={handleDownload}
              className="uppercase rounded-full px-6  py-3 bg-blue-800 text-white text-sm font-medium leading-5 tracking-[0.21px]"
            >
              Download Broucher
            </button>
          </div>
          <div className="text-sm font-semibold text-center text-white sm:text-base">
            Call us if you have any questions:
            <Link
              className="mt-2 font-semibold text-center text-sm sm:text-base "
              href={`tel:+971506945852`}
            >
              &nbsp; +971506945852
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FromSubmit;

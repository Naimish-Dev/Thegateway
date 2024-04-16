import React from "react";

const Helight = () => {
  return (
    <div
      className="flex justify-center items-center py-10 md:py-16 bg-[#D6CDBE]"
      id="about"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold">Project Highlights</h2>

        <p className=" mb-4  font-bold"> Where luxury meets connectivity</p>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/arabian-sea-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>Uninterrupted Views of the Arabian Sea</p>
          </div>
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/designed-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>Designed by world known Hafeez Contractor, HBA, Singapore</p>
          </div>
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/located-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>Located right next to MTHL in Sewri</p>
          </div>
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/retail-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>World Class Retail</p>
          </div>
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/sky-club-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>Sky Club on 62nd floor</p>
          </div>
          <div className="flex gap-3  items-center font-medium">
            <img
              src="/assets/helight/well-connected-icon.webp"
              className="w-16 "
              alt="imges"
            />
            <p>Well-connected via Road, Metro, Rail, Airport & Monorail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helight;

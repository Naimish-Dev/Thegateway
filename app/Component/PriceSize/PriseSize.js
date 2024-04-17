import React from "react";

const PriseSize = ({ setIsModel }) => {
  return (
    <div
      className="flex justify-center items-centerpy-10 py-10 md:py-16 bg-[#D6CDBE] dark:text-black"
      id="size-prices"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl  font-semibold">Size & Prices</h2>
        <p className="font-bold  mb-4">Rise to exclusive luxury</p>

        <table className="w-full">
          <thead>
            <tr className="bg-blue-800 text-white font-semibold uppercase ">
              <th class="px-2 sm:px-5 py-3 border-e-2 border-white">Type</th>
              <th className="px-2 sm:px-5  border-e-2 py-3">Total area</th>
              <th className="px-2 sm:px-5 py-3" colspan="2">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="font-bold">
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}>3 BHK City </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>1258.3 Sq.ft. </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 5.70 Cr All in</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>
                <button
                  onClick={() => {
                    setIsModel(true);
                  }}
                >
                  Enquire Now
                </button>
              </td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}>3 BHK Sea</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>1444.9 Sq.ft. </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 6.75 Cr All in</td>
              <td className={`px-2 sm:px-5 py-2 text-sm  `}>
                <button
                  onClick={() => {
                    setIsModel(true);
                  }}
                >
                  Enquire Now
                </button>
              </td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}>4 BHK Sea</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>1905.1 Sq.ft.</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 9.07 Cr All in</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>
                <button
                  onClick={() => {
                    setIsModel(true);
                  }}
                >
                  Enquire Now
                </button>
              </td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}>4.5 BHK Sea</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>2251.5 Sq.ft.</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>₹ 11 Cr All in </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>
                <button
                  onClick={() => {
                    setIsModel(true);
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
  );
};

export default PriseSize;

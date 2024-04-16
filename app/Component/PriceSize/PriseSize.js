import React from 'react'

const PriseSize = ({ setIsModel }) => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-2 font-semibold">Size & Prices</h2>
        <table>
          <thead>
            <tr className="bg-blue-800 text-white font-semibold uppercase ">
              <th class="px-2 sm:px-5 py-3 border-e-2 border-white">Type</th>
              <th className="px-2 sm:px-5  border-e-2 py-3">Total RERA area</th>
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
  );
};

export default PriseSize
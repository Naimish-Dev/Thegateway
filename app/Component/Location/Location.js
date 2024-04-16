import React from 'react'

const Location = ({ setIsModel }) => {
  return (
    <div className="flex justify-center items-center px-2 py-8 my-10 bg-[#D6CDBE]">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
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
              <div className="font-medium  flex flex-col gap-1 font-sans">
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
              <div className="font-medium flex flex-col gap-1 font-sans">
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
              <div className="font-medium flex flex-col gap-1 font-sans">
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
              <div className="font-medium flex flex-col gap-1 font-sans">
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
  );
};

export default Location
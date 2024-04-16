import React from "react";


const Gallery = () => {
  const filterProduct = [
    "/assets/Gallery/Balcony-IMG-1-1.webp",
    "/assets/Gallery/Bedroom-IMG-1-1.webp",
    "/assets/Gallery/gi1.jpg",
    "/assets/Gallery/gi2.jpg",
    "/assets/Gallery/gi3.jpg",
    "/assets/Gallery/Gym-IMG-1-1.webp",
    "/assets/Gallery/Kitchen-IMG-1-1.webp",
    "/assets/Gallery/Living-room-IMG-1-1.webp",
    "/assets/Gallery/Restaurant-IMG-1-1.webp",
    "/assets/Gallery/Sewri-Banquet-Hall-IMG-1.jpg",
    "/assets/Gallery/Sewri-Entrance-Lobby-IMG-1.jpg",
    "/assets/Gallery/Sewri-Lift-Lobby-IMG-1.jpg",
  ];
  return (
    <div className="flex justify-center items-center my-10">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-4 font-semibold">Gallery</h2>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          {filterProduct?.map((item) => (
            <img
              src={item}
              alt="sq-sample"
              className="object-cover md:w-[200px] mx-auto h-auto rounded aspect-square"
              onError={(e) =>
                (e.target.src =
                  "https://ucarecdn.com/b035f4fd-d55a-446f-843c-62715ff7f984/-/preview/-/quality/smart/")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import GalleryImgPreview from "../GalleryImgPreview/GalleryImgPreview";


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
    <div
      className="flex justify-center items-center py-10 md:py-16"
      id="gallery"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-4 font-semibold">Gallery</h2>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          <GalleryImgPreview />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

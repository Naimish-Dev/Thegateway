import React, { useRef, useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function GalleryImgPreview(props) {
  const containerRef = useRef(null);
  const [Gallery, setGallery] = useState([
    { img: "/assets/Gallery/Balcony-IMG-1-1.webp", title: "Balcony" },
    { img: "/assets/Gallery/Bedroom-IMG-1-1.webp", title: "Bedroom" },
    { img: "/assets/Gallery/Gym-IMG-1-1.webp", title: "Gym" },
    { img: "/assets/Gallery/Kitchen-IMG-1-1.webp", title: "Kitchen" },
    { img: "/assets/Gallery/Living-room-IMG-1-1.webp", title: "Living" },
    { img: "/assets/Gallery/Restaurant-IMG-1-1.webp", title: "Restaurant" },
    {
      img: "/assets/Gallery/Sewri-Banquet-Hall-IMG-1.jpg",
      title: "Banquet Hall",
    },
    {
      img: "/assets/Gallery/Sewri-Lift-Lobby-IMG-1.jpg",

      title: "Lift Lobby",
    },
    {
      img: "/assets/Gallery/Sewri-Entrance-Lobby-IMG-1.jpg",
      title: "Entrance Lobby",
    },
    {
      img: "/assets/Gallery/gi1.jpg",
      title: "Entrance Lobby",
    },
    {
      img: "/assets/Gallery/gi2.jpg",
      title: "Entrance Lobby",
    },
    {
      img: "/assets/Gallery/gi3.jpg",
      title: "Entrance Lobby",
    },
  ]);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return (
    <div
      className="img-grid grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full "
      ref={containerRef}
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      {Gallery?.map((img, index) => {
        return (
          <div data-fancybox="gallery" href={img.img} key={index}>
            <div className="relative transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src={img.img}
                alt="sq-sample"
                className="object-cover md:w-[200px] mx-auto h-auto rounded aspect-square "
              />
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end ">
                <h2 className="text-white bg-black/60 w-full text-center rounded-b py-1 font-semibold">
                  {img.title}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryImgPreview;

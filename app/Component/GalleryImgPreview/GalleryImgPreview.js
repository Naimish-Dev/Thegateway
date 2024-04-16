import React, { useRef, useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";


function GalleryImgPreview(props) {
  const containerRef = useRef(null);
  const [Gallery, setGallery] = useState([
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
          <div data-fancybox="gallery" href={img} key={index}>
            <img
              src={img}
              alt="sq-sample"
              className="object-cover md:w-[200px] mx-auto h-auto rounded aspect-square"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryImgPreview;

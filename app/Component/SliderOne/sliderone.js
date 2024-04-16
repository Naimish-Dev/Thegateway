"use client";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Sliderone = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="flex justify-center items-center my-10">
      <div className="text-center flex flex-col justify-center items-center">
        <h3 className="text-3xl mb-4 font-medium">Your Gateway to Luxury</h3>
        <div></div>
        <div className="navigation-wrapper w-screen">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="relative">
                <img
                  src="/assets/building/Screenshot2024-02-27171019.png"
                  className="object-cover w-screen h-[700px] "
                />
                <div className="absolute w-full h-full z-1 top-0 left-0 bg-black/40 flex justify-center items-center">
                  <div>
                    <h4 className="font-extrabold text-3xl text-white capitalize ">
                      THE ENDLESS OCEAN MEETS AN <br /> ARCHITECTURAL
                      MASTERPIECE
                    </h4>
                    <p className="text-white font-bold text-lg">
                      2 iconic towers of 60+ storeys
                    </p>
                    <p className="text-white font-bold text-lg">
                      Designed by world renowned Hafeez contactor
                    </p>
                    <p className="text-white font-bold text-lg">
                      Lavish 3, 4 & 4.5 bed seafront residences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div className="relative">
                <img
                  src="/assets/building/Screenshot2024-02-27171212.png"
                  className="object-cover w-screen h-[700px]"
                />
                <div className="absolute w-full h-full z-1 top-0 left-0 bg-black/40 flex justify-center items-center">
                  <div>
                    <h4 className="font-extrabold text-3xl text-white capitalize ">
                      WITH SO MUCH TO DO, YOU WILL BE SPOILT <br /> FOR CHOICE
                    </h4>
                    <p className="text-white font-bold text-lg">
                      40,000 sq.ft of amenities space
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="relative">
                <img
                  src="/assets/building/Screenshot2024-02-27171244.png"
                  className="object-cover w-screen h-[700px]"
                />
                <div className="absolute w-full h-full z-1 top-0 left-0 bg-black/40 flex justify-center items-center">
                  <div>
                    <h4 className="font-extrabold text-3xl text-white capitalize ">
                      A POOL THAT SPARKLES <br /> LIKE A JEWEL
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="relative">
                <img
                  src="/assets/building/Screenshot2024-02-28124447.png"
                  className="object-cover w-screen h-[700px]"
                />
                <div className="absolute w-full h-full z-1 top-0 left-0 bg-black/40 flex justify-center items-center">
                  <div>
                    <h4 className="font-extrabold text-3xl text-white capitalize ">
                      THE SEA, THE HORIZON <br /> & <br /> YOU. EVERYDAY.
                    </h4>
                    <p className="text-white font-bold text-lg">
                      Uninterrupted views of the Arabian Sea from all
                      apartments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sliderone;

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

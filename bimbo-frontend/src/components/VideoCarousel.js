import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const VideoCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative">
      <div className="md:flex justify-between pr-[4%] xl:pr-[60px] 2xl:pr-[0px]">
        <h4 className="text-secondary text-[30px] font-[600] leading-[44px]">
          Transformation stories
        </h4>
        <div className="hidden md:block">
          <div className="flex gap-[24px] ">
            <button
              className="flex justify-center items-center rounded-full border-[1px] border-primary w-[44px] h-[44px]"
              onClick={goToPreviousSlide}
            >
              <FiChevronLeft className="text-[30px] stroke-1 text-primary" />
            </button>
            <button
              className="flex justify-center items-center rounded-full border-[1px] border-primary w-[44px] h-[44px]"
              onClick={goToNextSlide}
            >
              {" "}
              <FiChevronRight className="text-[30px] stroke-1 text-primary" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden mt-[28px]">
        <div
          className="flex transition-transform duration-300 ease-in-out xl:w-[31%] md:w-[47%] w-[70%] gap-[16px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className=" min-w-[100%]">
              <div className=" pt-[70%] pr-[24px] relative overflow-hidden  ">
                <div className=" absolute bottom-0 left-0 w-full  h-[100%] object-cover bg-black rounded-[8px]">
                  <video
                    className="h-full w-full flex justify-center rounded-[8px]"
                    controls
                  >
                    <source src={slide.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden mt-[30px]">
        <div className="flex justify-between gap-[24px] pr-[4%] xl:pr-[60px]">
          <button
            className="flex justify-center items-center rounded-full border-[1px] border-primary w-[44px] h-[44px]"
            onClick={goToPreviousSlide}
          >
            <FiChevronLeft className="text-[30px] stroke-1 text-primary" />
          </button>
          <button
            className="flex justify-center items-center rounded-full border-[1px] border-primary w-[44px] h-[44px]"
            onClick={goToNextSlide}
          >
            {" "}
            <FiChevronRight className="text-[30px] stroke-1 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;

import React, { useState } from "react";
import calendar from "../assets/calendar.jpeg";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { FiChevronDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const Calendar = ({
  getInTouch,
  setGetInTouch,
  bookAnEvent,
  setBookAnEvent,
}) => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const schedule = [
    {
      month: "May",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
    {
      month: "June",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
    {
      month: "July",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
    {
      month: "August",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
    {
      month: "September",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
    {
      month: "October",
      content: [
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
        {
          heading: "Thrive Conference - Dominion",
          address: "Kings Hub 10 Bush Street Anthony, Maryland, Lagos",
          date: "3/02/2024",
          time: "10AM",
        },
      ],
    },
  ];

  return (
    <div className="-mt-[70px] pt-[70px]">
      {" "}
      <ScrollToTopOnMount />
      <div
        className={`bg-no-repeat z-10   w-full   md:h-[400px] h-[119px]  relative   `}
        style={{
          backgroundImage: `url(${calendar})`,
          backgroundSize: "cover",
          backdropFilter: "",
        }}
      >
        <div className="absolute xl:left-[15%]  md:left-[77px] transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 md:transform-none md:top-[43px]">
          <h4 className="text-[36px] font-[500] text-white text-end leading-[44px] whitespace-nowrap">
            Upcoming events
          </h4>
        </div>
      </div>
      <div className=" py-[48px] px-[4%] 2xl:px-[15%] xl:px-[60px]">
        {schedule.map((drop, i) => (
          <div key={i} className="  ">
            <div
              onClick={handleClick(i)}
              className="py-[16px] flex justify-between items-center border-b-[1px] border-gray-200 "
            >
              <h4 className="text-[36px]  cursor-pointer font-[500] text-[#021732] lg:text-[48px] lg:font-[600]">
                {drop.month}
              </h4>
              <div
                onClick={handleClick(i)}
                className={`w-[52px] h-[52px] rounded-full  flex justify-center items-center  duration-300 cursor-pointer ${
                  clickedIndex[i]
                    ? "rotate-180 border-[1px] border-black text-primary"
                    : "rotate-0 border-[1px] border-gray-200 text-black"
                } `}
              >
                <FiChevronDown
                  onClick={handleClick(i)}
                  className="text-[30px] stroke-[1px] "
                />
              </div>
            </div>
            {clickedIndex[i] ? (
              <div className="mt-[30px] md:px-[20px]">
                {drop.content.map((content, i) => (
                  <div key={i}>
                    <div className="flex justify-between border-[1px] border-gray-200 md:border-gray-400 py-[24px] lg:py-[32px] px-[4%] lg:px-[32px] gap-[20px] mb-[20px] rounded-[16px]">
                      <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
                        <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
                          {content.heading}
                        </h4>
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
                          {content.address}
                        </h4>
                      </div>
                      <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
                        {" "}
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
                          {content.date}
                        </h4>
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
                          {content.time}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="lg:flex gap-[40px]">
          <div className="lg:w-[60%] bg-[#02152E] rounded-[24px] h-[416px] relative">
            <button
              onClick={() => {
                setGetInTouch(!getInTouch);
              }}
              className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]"
            >
              <FiArrowUp className="text-[30px] stroke-[1px] text-primary transform rotate-45" />
            </button>
            <h4 className="text-white text-[36px] lg:text-[48px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px] pr-[24px] lg:pr-[48px]">
              Schedule a one on one{" "}
            </h4>
          </div>
          <div className="lg:w-[40%] bg-[#FEEFE6] rounded-[24px] h-[416px] relative mt-[40px] lg:mt-[0px]">
            <button
              onClick={() => {
                setBookAnEvent(!bookAnEvent);
              }}
              className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]"
            >
              {" "}
              <FiArrowUp className="text-[30px] stroke-[1px] text-[#021732] transform rotate-45" />
            </button>
            <h4 className="text-[#040F16] text-[36px] lg:text-[48px] lg:leading-[60px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] pr-[24px] lg:left-[48px] lg:pr-[48px]">
              Book Bimbo Mesele for an event
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

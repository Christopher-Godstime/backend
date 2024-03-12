import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      month: "January",
      content: [
        {
          heading: "Registration Deadline",
          address: "Online",
          date: "6/01/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "13/01/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "20/01/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "27/01/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "February",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "10/02/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "17/02/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "24/02/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "March",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "2/03/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "9/03/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "16/03/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "23/03/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "30/03/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "April",
      content: [
        {
          heading: "Registration Deadline",
          address: "Online",
          date: "6/04/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "13/04/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "20/04/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "27/04/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "May",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "11/05/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "18/05/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "25/05/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "June",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "1/06/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "8/06/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "15/06/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "22/06/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "29/06/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "July",
      content: [
        {
          heading: "Registration Deadline",
          address: "Online",
          date: "6/07/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "13/07/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "20/07/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "27/07/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "August",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "10/08/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "17/08/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "24/08/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "31/08/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "September",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "7/09/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "14/09/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "21/09/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "28/09/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "October",
      content: [
        {
          heading: "Registration Deadline",
          address: "Online",
          date: "6/10/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "12/10/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "19/10/2024",
          time: "Not available",
        },
        {
          heading: "Group Coaching",
          address: "Online",
          date: "26/10/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "November",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "9/11/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "16/11/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "23/11/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "30/11/2024",
          time: "Not available",
        },
      ],
    },
    {
      month: "December",
      content: [
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "7/12/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "14/12/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "21/12/2024",
          time: "Not available",
        },
        {
          heading: "Personal Coaching",
          address: "Online",
          date: "28/12/2024",
          time: "Not available",
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
                      <div className="w-[50%]  lg:flex lg:w-[50%] lg:gap-[20px]">
                        <h4 className="text-[16px] font-[600] leading-[24px] lg:w-[50%]">
                          {content.heading}
                        </h4>
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] lg:w-[50%] text-start lg:text-center">
                          {content.address}
                        </h4>
                      </div>
                      <div className=" lg:w-[50%] lg:flex lg:gap-[20px]">
                        {" "}
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] lg:text-center text-end lg:w-[50%]">
                          {content.date}
                        </h4>
                        <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end lg:w-[50%]">
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
            <Link to="/calendly">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                <FiArrowUp className="text-[30px] stroke-[1px] text-primary transform rotate-45" />
              </button>
            </Link>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import pic6 from "../assets/pic6.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import logo1 from "../assets/logo1.png";

const Contact = ({
  getInTouch,
  setGetInTouch,
  bookAnEvent,
  setBookAnEvent,
}) => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div
          className={`bg-no-repeat  w-full bg-cover bg-center h-[476px]  relative rounded-[24px] `}
          style={{
            backgroundImage: `url(${pic6})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backdropFilter: "",
          }}
        >
          <div className="absolute left-[4%] xl:left-[40px]  top-[20px] md:top-[40px]">
            <h4 className="text-white text-[36px] font-[500] leading-[44px] md:text-[48px] md:leading-[60px]">
              Contact us
            </h4>
            <h4 className="text-white font-[500] text-[16px] leading-[24px]">
              Email, call or complete the form to reach Bimbo Mesele
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 mt-[48px]  ">
          <div className="bg-[#F3F3F3] h-full rounded-[16px]">
            <div className="pb-[80%]  relative overflow-hidden  rounded-t-[16px] ">
              <img
                className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={c1}
                alt="Background"
              />
            </div>
            <div className=" pt-[16px]  px-[16px] pb-[30px]">
              <h4 className="text-[24px] font-[600] ">Online enquiry</h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <button
                onClick={() => {
                  setGetInTouch(!getInTouch);
                }}
                className="font-[500] text-[16px] text-primary  mt-[8px]"
              >
                Click here.
              </button>
            </div>
          </div>

          <div className="bg-[#F3F3F3] h-full rounded-[16px]">
            <div className="pb-[80%]  relative overflow-hidden  rounded-t-[16px] ">
              <img
                className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={c2}
                alt="Background"
              />
            </div>
            <div className=" pt-[16px]  px-[16px] pb-[30px]">
              <h4 className="text-[24px] font-[600] ">
                Book Dr Bimbo for an event
              </h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <button
                onClick={() => {
                  setBookAnEvent(!bookAnEvent);
                }}
                className="font-[500] text-[16px] text-primary  mt-[8px]"
              >
                Click here.
              </button>
            </div>
          </div>

          <div className="bg-[#F3F3F3] h-full rounded-[16px]">
            <div className="pb-[80%]  relative overflow-hidden  rounded-t-[16px] ">
              <img
                className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={c3}
                alt="Background"
              />
            </div>
            <div className=" pt-[16px]  px-[16px] pb-[30px]">
              <h4 className="text-[24px] font-[600] ">Schedule a meeting</h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <Link to="/calendly">
                <button className="font-[500] text-[16px] text-primary  mt-[8px]">
                  Click here.
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-[#F3F3F3] h-full rounded-[16px]">
            <div className="pb-[80%]  relative overflow-hidden  rounded-t-[16px] ">
              <img
                className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={c4}
                alt="Background"
              />
            </div>
            <div className=" pt-[16px]  px-[16px] pb-[30px]">
              <h4 className="text-[24px] font-[600] ">Call us</h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Mon - Fri from 8am to 5pm.
              </h4>
              <h4 className="font-[500] text-[16px] text-primary  mt-[8px]">
                +2348163762566
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

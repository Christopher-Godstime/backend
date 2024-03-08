import React from "react";
import { Link } from "react-router-dom";
import caretaker from "../assets/caretaker.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="py-[40px] px-[4%] xl:px-[60px] 2xl:px-[15%] bg-[#010A15]">
        <div>
          <img className="w-[138px]" src={caretaker} />
        </div>
        <div className="md:flex justify-between text-white mt-[24px]">
          <div className="order-2 grid grid-cols-4 gap-[30px] w-fit">
            <div className="w-[20px]">
              <img className="w-[20px]" src={instagram} />
            </div>
            <div className="w-[20px]">
              <img className="w-[20px]" src={linkedin} />
            </div>
            <div className="w-[20px]">
              <img className="w-[20px]" src={x} />
            </div>
            <div className="w-[20px]">
              <img className="w-[20px]" src={facebook} />
            </div>
          </div>
          <div className="order-1 grid grid-cols-1 md:grid-cols-4 gap-y-[24px]   border-b-[1px] border-gray-800 py-[24px] md:py-[0px] md:pb-[24px]">
            <Link to="/features">
              <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                Features
              </h4>
            </Link>
            <Link to="/pricing">
              <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                Pricing
              </h4>
            </Link>
            <Link to="/contact">
              <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                Contact Us
              </h4>
            </Link>
          </div>
        </div>
        <div className="md:flex justify-between text-white md:mt-[24px]">
          <div className="order-2 grid grid-cols-1 md:grid-cols-2 gap-[24px]   py-[24px] md:py-[0px]">
            <Link to="/terms">
              <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                Terms of Use
              </h4>
            </Link>
            <Link to="/privacy-policy">
              <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                Privacy Policy
              </h4>
            </Link>
          </div>
          <div className="order-1 py-[24px] border-t-[1px] border-gray-800 md:py-[0px] md:border-[0px]">
            <h4 className="text-[14px] font-[500] leading-[20px] text-white">
              Caretaker 2024 &copy; All rights reserved
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

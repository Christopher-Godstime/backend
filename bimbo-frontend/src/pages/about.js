import React from "react";
import { Link } from "react-router-dom";
import home2 from "../assets/home2.png";
import pic3 from "../assets/pic3.png";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { FiArrowUp } from "react-icons/fi";

const About = ({ getInTouch, setGetInTouch, bookAnEvent, setBookAnEvent }) => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className=" px-[4%] xl:px-[60px] 2xl:px-[15%] ">
        <h4 className="py-[48px] text-[40px] font-[700] lg:text-[60px] lg:font-[600] lg:leading-[72px] leading-[48px] lg:w-[726px] text-[#021732]">
          LEGACY IS GREATER THAN CURRENCY
        </h4>
        <div className="">
          <div
            className={`bg-no-repeat z-10  w-full bg-cover bg-center md:h-screen h-[259px]  relative rounded-[24px]`}
            style={{
              backgroundImage: `url(${pic3})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backdropFilter: "",
            }}
          ></div>
        </div>

        <div className="xl:flex gap-[20px] py-[48px]">
          <h4 className="text-[48px] font-[600] xl:w-[50%]">About Dr Bimbo</h4>
          <div className="xl:w-[50%] mt-[20px] xl:mt-[0px]">
            <h4 className="text-[24px] font-[400] leading-[32px] text-[#556476] text-justify xl:mb-[70px] mb-[50px]">
              I am Dr. Bimbo Mesele and I help leaders gain clarity about their
              lives' journey so that they can redefine their outcomes. As a
              seasoned clarity coach, I am passionate about helping individuals
              thrive in their respective sectors by providing insightful
              guidance and support
            </h4>
            <h4 className="text-[24px] font-[400] leading-[32px] text-[#556476] text-justify xl:mb-[70px] mb-[50px]">
              With a proven track record in leadership and excellence, I am a
              dynamic force in the fields of consulting, leadership development,
              purpose discovery, and transformation. I specialize in guiding
              people as they navigate their paths, empowering them to uncover
              clarity and achieve their goals
            </h4>
            <h4 className="text-[24px] font-[400] leading-[32px] text-[#556476] text-justify ">
              Through high-quality personal and group coaching sessions and
              workshops, I train leaders to develop the skills and mindset
              necessary for success in both their personal and professional
              lives. I am committed to evaluating and improving training plans
              to ensure maximum relevancy and impact for my clients.
            </h4>
          </div>
        </div>

        <div className="py-[48px]">
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
    </div>
  );
};

export default About;

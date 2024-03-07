import React from "react";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import home2 from "../assets/home2.png";
import check from "../assets/check.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";
import d7 from "../assets/d7.png";
import d8 from "../assets/d8.png";
import { FiArrowUp } from "react-icons/fi";

const Training = () => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className=" px-[4%] xl:px-[60px] 2xl:px-[12%]">
        <div className="xl:flex lg:gap-[48px]">
          <div className="xl:w-[60%]">
            <div className="pt-[48px]">
              <h4 className="text-[30px] font-[600] md:text-[48px] md:font-[700] md:leading-[60px] ">
                Training for leaders & organizations
              </h4>
              <h4 className="text-[16px] font-[500] leading-[24px] text-justify text-text mt-[44px] md:mt-[24px]">
                For an organization to thrive, its success often hinges on the
                capabilities and vision of its leaders. Dr. Bimbo specializes in
                helping leaders gain clarity, empowering them to redefine their
                outcomes and lead with purpose. With extensive experience in
                coaching and leadership development, Dr. Bimbo provides
                personalized guidance and support to enable leaders to navigate
                challenges, make informed decisions, and inspire positive change
                within their organizations. Through her transformative coaching
                approach, leaders can unlock their full potential, drive
                organizational growth, and foster a culture of excellence and
                innovation.
              </h4>
              <div className="flex gap-[12px] mt-[12px]">
                <h4 className="text-[12px] font-[500] text-text">
                  Starting May 9
                </h4>
                <h4 className="text-[12px] font-[500] text-text">
                  Duration 6 Weeks
                </h4>
                <h4 className="text-[12px] font-[500] text-text">Online</h4>
              </div>
              <div className="grid grid-cols-1 gap-[15px] md:gap-[32px] mt-[30px] md:flex">
                <button className="w-full py-[12px] px-[20px] text-white rounded-[8px] bg-secondary text-[14px] font-[500] hover:bg-black md:w-fit">
                  Register now
                </button>
                <button className="w-full py-[12px] px-[20px] text-secondary rounded-[8px] bg-white text-[14px] font-[500] border-[1px] border-gray-200 hover:bg-gray-100 md:w-fit">
                  Take an assessment test
                </button>
              </div>
            </div>

            <div className="py-[24px] md:mt-[32px]">
              <h4 className="text-primary font-[600] text-[16px]">Hosted by</h4>
              <div className="flex gap-[20px] items-center mt-[12px]">
                <div className=" w-[80px] md:w-[100px] md:h-[100px] h-[80px]">
                  <div className="pb-[100%]  relative overflow-hidden  rounded-[24px] ">
                    <img
                      className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                      src={home2}
                      alt="Background"
                    />
                  </div>
                </div>
                <h4 className="text-[24px] md:text-[30px] font-[600]">
                  Dr Bimbo Mesele
                </h4>
              </div>
              <div className="mt-[48px] md:mt-[24px]">
                <h4 className="text-[30px] md:text-[36px] font-[600]">
                  COURSE OVERVIEW
                </h4>
                <h4 className="text-[16px] font-[500] leading-[24px] text-justify text-text mt-[16px]">
                  Become a conscious, inspiring leader. Scale your company.
                  Enjoy the journey.
                  <h4 className="pt-[15px] md:pt-[0px]">
                    Most entrepreneurs experience building a startup as a
                    violent roller coaster ride, with huge swings of emotion.
                  </h4>
                  <button className="text-[16px] font-[600] text-primary mt-[32px] md:mt-[16px]">
                    See more
                  </button>
                </h4>
              </div>
            </div>

            <div>
              <h4 className="text-[30px] md:text-[36px] font-[600]">
                Who is this course for
              </h4>
              <div className="grid gris-cols-1 md:grid-cols-3 gap-[16px] mt-[20px] md:mt-[16px]">
                <div className="border-[1px] border-gray-200 rounded-[12px] p-[22px] md:p-[24px]">
                  <div className="w-[48px] h-[48px] rounded-full bg-secondary text-white text-[18px] font-[500] flex justify-center items-center">
                    01
                  </div>
                  <h4 className="mt-[21px] font-[500] text-[16px] text-text">
                    Startup founders & CEOs (primarily seed, Series A and B with
                    10 - 100 team members)
                  </h4>
                </div>
                <div className="border-[1px] border-gray-200 rounded-[12px] p-[22px]">
                  <div className="w-[48px] h-[48px] rounded-full bg-secondary text-white text-[18px] font-[500] flex justify-center items-center">
                    02
                  </div>
                  <h4 className="mt-[21px] font-[500] text-[16px] text-text">
                    Committed to doing the deep inner work required to
                    create transformation.
                  </h4>
                </div>
                <div className="border-[1px] border-gray-200 rounded-[12px] p-[22px]">
                  <div className="w-[48px] h-[48px] rounded-full bg-secondary text-white text-[18px] font-[500] flex justify-center items-center">
                    03
                  </div>
                  <h4 className="mt-[21px] font-[500] text-[16px] text-text">
                    Want to be part of an amazing, supportive,
                    heart-centered group of fellow entrepreneurs.
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-[48px] md:mt-[24px]">
              <h4 className="text-[30px] md:text-[36px] md:leading-[44px] font-[600]">
                What you’ll get out of this course
              </h4>
              <div className="grid grid-cols-1 gap-[32px] mt-[20px]">
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] md:text-[24px] md:leading-[32px] font-[700] leading-[28px] ">
                      Transformative training tailored to your organization’s
                      needs
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      Develop skills and learn techniques and strategies to
                      boost productivity and efficiency within your
                      organization.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] font-[700] leading-[28px]">
                      Foster Growth and Empowerment
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      Foster a culture of innovation and creativity while
                      improving team performance within your organization.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] font-[700] leading-[28px]">
                      Progress Tracking and Feedback
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      Stay on track with your goals and objectives through
                      regular check-ins and progress assessments.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] font-[700] leading-[28px]">
                      Access to valuable training resources
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      Gain access to resources, tools, and materials tailored to
                      provide you with additional insights and strategies to
                      enhance your progress outside of coaching sessions.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[48px] md:mt-[24px]">
              <h4 className="text-[30px] md:text-[36px] font-[600]">
                This course includes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[16px] mt-[16px] md:gap-x-[16px]">
                <div className="grid grid-cols-1 gap-[16px]">
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d1} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Interactive live sessions
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d2} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Lifetime access to course materials
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d3} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Direct access to instructor
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d4} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Projects to apply learnings
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[40%] hidden lg:block pt-[48px]">
            <div className=" ">
              <div className="pb-[40%]  relative overflow-hidden  rounded-t-[24px] ">
                <img
                  className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                  src={home2}
                  alt="Background"
                />
              </div>
              <div className="border-[1px] bordr-gray-200 rounded-b-[24px] p-[24px]">
                <h4 className="text-[36px] font-[600] leading-[44px] whitespace-nowrap">
                  Discovering the New You
                </h4>
                <h4 className="text-[#35455B] font-[500] text-justify mt-[40px]">
                  This course is designed to enhance participants' communication
                  skills in various personal and professional settings. It
                  covers a range of topics, including verbal and non-verbal
                  communication, active listening, interpersonal skills, and
                  overcoming communication barriers.
                </h4>
                <div className="flex gap-[12px] mt-[12px]">
                  <h4 className="text-[12px] font-[500] text-text">
                    Starting May 9
                  </h4>
                  <h4 className="text-[12px] font-[500] text-text">
                    Duration 6 Weeks
                  </h4>
                  <h4 className="text-[12px] font-[500] text-text">Online</h4>
                </div>
                <h4 className="text-[14px] font-[700] mt-[40px] text-primary">
                  UPCOMING COURSE
                </h4>
                <div className="flex justify-between items-center mt-[15px]">
                  <div>
                    <h4 className="text-[24px] font-[600]">
                      Feb 12- Mar 1, 2024
                    </h4>
                    <h4 className="text-text ">Last day to book: Feb 6</h4>
                  </div>
                  <button className=" py-[10px] px-[18px] text-secondary rounded-[8px] bg-white text-[14px] font-[500] border-[1px] border-gray-200 hover:bg-gray-100 md:w-fit">
                    Register now
                  </button>
                </div>
                <button className="w-full py-[12px] px-[20px] text-white rounded-[8px] bg-secondary text-[14px] font-[500] hover:bg-black mt-[48px]">
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[48px]">
          <h4 className="text-[36px] font-[600] md:flex justify-center">
            Meet your instructor
          </h4>
          <div className="md:flex mt-[10px] md:mt-[28px] md:items-center ">
            <div className=" md:min-w-[318px] md:mx-[48px] ">
              <div className="pb-[100%] md:pb-[115%]  relative overflow-hidden  rounded-[24px] ">
                <img
                  className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                  src={home2}
                  alt="Background"
                />
              </div>
            </div>
            <div className=" mt-[48px] md:mt-[0px] w-fit">
              <h4 className="font-[600] text-[24px]">Meet your instructor</h4>
              <h4 className="text-[#556476] md:text-[24px] md:font-[500] mt-[27px] lg:w-[80%]">
                I am Dr. Bimbo Mesele and I help leaders gain clarity about
                their lives' journey so that they can redefine their outcomes.
                As a seasoned clarity coach, I am passionate about helping
                individuals thrive in their respective sectors by providing
                insightful guidance and support.{" "}
              </h4>
              <button className="text-[18px] font-[500] leading-[28px] text-primary mt-[27px]">
                More at about Dr Bimbo here
              </button>
            </div>
          </div>
        </div>

        <div className="py-[48px] ">
          <div className="lg:flex gap-[40px]">
            <div className="lg:w-[60%] bg-[#02152E] rounded-[24px] h-[416px] relative">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                <FiArrowUp className="text-[30px] stroke-[1px] text-primary transform rotate-45" />
              </button>
              <h4 className="text-white text-[36px] lg:text-[48px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px]">
                Schedule a one on one{" "}
              </h4>
            </div>
            <div className="lg:w-[40%] bg-[#FEEFE6] rounded-[24px] h-[416px] relative mt-[40px] lg:mt-[0px]">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                {" "}
                <FiArrowUp className="text-[30px] stroke-[1px] text-[#021732] transform rotate-45" />
              </button>
              <h4 className="text-[#040F16] text-[36px] lg:text-[48px] lg:leading-[60px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px]">
                Book Bimbo Mesele for an event
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

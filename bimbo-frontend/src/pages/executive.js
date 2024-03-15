import React from "react";
import { Link } from "react-router-dom";
import pic3 from "../assets/pic3.png";
import pic7 from "../assets/pic7.png";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import h4 from "../assets/h4.png";
import check from "../assets/check.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";
import d7 from "../assets/d7.png";
import d8 from "../assets/d8.png";
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.png";
import small3 from "../assets/small3.png";
import { FiArrowUp } from "react-icons/fi";

const Executive = ({ showAssessment, setShowAssessment }) => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className=" px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="w-[100%]  xl:-mt-[100px]">
          <div className="xl:sticky xl:pt-[100px] top-[20px] hidden xl:block xl:w-[40%] xl:ml-[60%] xl:pl-[10px]">
            <div className=" ">
              <div className="pb-[40%]  relative overflow-hidden  rounded-t-[24px] ">
                <img
                  className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                  src={h4}
                  alt="Background"
                />
              </div>
              <div className="border-[1px] bordr-gray-200 rounded-b-[24px] p-[24px]">
                <h4 className="text-[36px] font-[600] leading-[44px]">
                  Training for leaders & Organisations
                </h4>
                <h4 className="text-[#35455B] font-[500] text-justify mt-[24px]">
                  This course is designed to enhance participants' communication
                  skills in various personal and professional settings. It
                  covers a range of topics, including verbal and non-verbal
                  communication, active listening, interpersonal skills, and
                  overcoming communication barriers.
                </h4>
                <div className="flex gap-[12px] mt-[12px] overflow-x-auto">
                  <div className="flex items-center gap-[4px]">
                    <div>
                      <img className="w-[16px]" src={small1} />
                    </div>
                    <h4 className="text-[12px] font-[500] text-text">
                      Starting May 9
                    </h4>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <div>
                      <img className="w-[16px]" src={small2} />
                    </div>
                    <h4 className="text-[12px] font-[500] text-text">
                      Duration 6 Weeks
                    </h4>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <div>
                      <img className="w-[16px]" src={small3} />
                    </div>
                    <h4 className="text-[12px] font-[500] text-text">Online</h4>
                  </div>
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
                  <Link to="/training-form">
                    <button className=" py-[10px] px-[18px] text-secondary rounded-[8px] bg-white text-[14px] font-[500] border-[1px] border-gray-200 hover:bg-gray-100 md:w-fit">
                      Register now
                    </button>
                  </Link>
                </div>
                <Link to="/training">
                  <button className="w-full py-[12px] px-[20px] text-white rounded-[8px] bg-secondary text-[14px] font-[500] hover:bg-black mt-[48px]">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-[60%] xl:-mt-[720px] xl:pr-[70px]">
            <div className="pt-[48px]">
              <h4 className="text-[30px] font-[600] md:text-[48px] md:font-[700] md:leading-[60px]">
                Executive Coaching
              </h4>
              <h4 className="text-[16px] font-[500] leading-[24px] text-justify text-text mt-[44px] md:mt-[24px]">
                This course is designed to enhance participants' communication
                skills in various personal and professional settings. It covers
                a range of topics, including verbal and non-verbal
                communication, active listening, interpersonal skills, and
                overcoming communication barriers.
              </h4>
              <div className="flex gap-[12px] mt-[12px] overflow-x-auto">
                <div className="flex items-center gap-[4px]">
                  <div>
                    <img className="w-[16px]" src={small1} />
                  </div>
                  <h4 className="text-[12px] font-[500] text-text">
                    Starting May 9
                  </h4>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div>
                    <img className="w-[16px]" src={small2} />
                  </div>
                  <h4 className="text-[12px] font-[500] text-text">
                    Duration 6 Weeks
                  </h4>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div>
                    <img className="w-[16px]" src={small3} />
                  </div>
                  <h4 className="text-[12px] font-[500] text-text">Online</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[15px] md:gap-[32px] mt-[30px] md:flex">
                <Link to="/executive-form">
                  <button className="w-full py-[12px] px-[20px] text-white rounded-[8px] bg-secondary text-[14px] font-[500] hover:bg-black md:w-fit">
                    Register now
                  </button>
                </Link>
                <button
                  onClick={() => setShowAssessment(!showAssessment)}
                  className="w-full py-[12px] px-[20px] text-secondary rounded-[8px] bg-white text-[14px] font-[500] border-[1px] border-gray-200 hover:bg-gray-100 md:w-fit"
                >
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
                      src={pic3}
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
                <h4 className="text-[16px] font-[500] leading-[24px] text-justify text-text mt-[16px] border-b-[1px] border-gray-200 pb-[24px]">
                  Become a conscious, inspiring leader. Scale your company.
                  Enjoy the journey.Most entrepreneurs experience building a
                  startup as a violent roller coaster ride, with huge swings of
                  emotion.
                </h4>
              </div>
            </div>

            <div>
              <h4 className="text-[30px] md:text-[36px] font-[600]">
                Who is this course for?
              </h4>
              <div className=" mt-[20px] md:mt-[16px]">
                <h4 className="text-[16px] font-[500] leading-[24px] text-justify text-text mt-[16px] border-b-[1px] border-gray-200 pb-[24px]">
                  Whether you are looking to develop leadership capabilities,
                  improve team collaboration, or enhance technical skills, our
                  customized training programs are designed to deliver
                  measurable results and drive lasting impact for your
                  organization.
                </h4>
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
                    <h4 className="text-[#35455B text-[18px] md:text-[24px] md:leading-[32px] font-[700] leading-[28px]">
                      World class coaching on your specific challenges
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      During the sessions, you'll have a chance to share your
                      specific challenges and get coached by Dave and the group.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] md:text-[24px] md:leading-[32px] font-[700] leading-[28px]">
                      Tools and best practices the best founders use
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      You'll learn the specific tools that work for Dave's
                      clients to listen and communicate powerfully, inspire and
                      align your team and create results.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] md:text-[24px] md:leading-[32px] font-[700] leading-[28px]">
                      Supportive group of CEO peers
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      You'll become part of a group of CEOs, creating deep,
                      authentic connections, getting real with each other and
                      sharing vulnerably about their experiences and challenges.
                      We'll create a Slack group for ongoing support from one
                      another, and from Dave, throughout course.
                    </h4>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="min-w-[48px] h-[48px] rounded-full border-[1px] border-primary flex justify-center items-center">
                    <img className="w-[32px]" src={check} />
                  </div>
                  <div>
                    <h4 className="text-[#35455B text-[18px] md:text-[24px] md:leading-[32px] font-[700] leading-[28px]">
                      Identify and let go of your limiting beliefs
                    </h4>
                    <h4 className="text-[16px] font-[400] text-text mt-[10px]">
                      You'll discover the beliefs and patterns that are getting
                      in the way of your success, and learn to transcend them.
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
                <div className="grid grid-cols-1 gap-[16px]">
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d5} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      In-depth lessons
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d6} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Guided feedback & reflection
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d7} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Course certificate upon completion
                    </h4>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <div className="min-w-[32px]">
                      <img className="w-[32px] h-[32px]" src={d8} />
                    </div>
                    <h4 className="text-[#35455B] font-[600] text-[16px]">
                      Private community of peers
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:sticky top-0"></div>
        <div className="my-[48px] lg:mx-[8%]">
          <h4 className="text-[36px] font-[600] md:flex justify-center">
            Meet your instructor
          </h4>
          <div className="md:flex mt-[10px] md:mt-[28px] md:items-center ">
            <div className=" md:min-w-[318px] md:mr-[48px] ">
              <div className="pb-[100%] md:pb-[115%]  relative overflow-hidden  rounded-[24px] ">
                <img
                  className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                  src={pic7}
                  alt="Background"
                />
              </div>
            </div>
            <div className=" mt-[48px] md:mt-[0px] w-fit">
              <h4 className="font-[600] text-[24px]">Dr Bimbo Mesele</h4>
              <h4 className="text-[#556476] md:text-[24px] md:font-[500] mt-[27px] ">
                I am Dr. Bimbo Mesele and I help leaders gain clarity about
                their lives' journey so that they can redefine their outcomes.
                As a seasoned clarity coach, I am passionate about helping
                individuals thrive in their respective sectors by providing
                insightful guidance and support.{" "}
              </h4>
              <Link to="/about">
                <button className="text-[18px] font-[500] leading-[28px] text-primary mt-[27px]">
                  More at about Dr Bimbo here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executive;

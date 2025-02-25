import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png";
import logo4 from "../assets/logo4.png";
import Assessment from "../pages/Assessment";
import GetInTouch from "../pages/GetInTouch";
import BookAnEvent from "../pages/BookAnEvent";

const Navbar = ({
  show,
  setShow,
  showAssessment,
  setShowAssessment,
  getInTouch,
  setGetInTouch,
  bookAnEvent,
  setBookAnEvent,
}) => {
  const [fix, setFix] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDiscovering = location.pathname === "/discovering-form";
  const isMastery = location.pathname === "/mastery-form";
  const isExecutive = location.pathname === "/executive-form";
  const isTraining = location.pathname === "/training-form";
  const isCoaches = location.pathname === "/coach-the-coaches";
  const masteryAssessment = location.pathname === "/mastery-assessment";

  function setFixed() {
    if (window.scrollY >= 400) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  useEffect(() => {
    setShow(show);
    setShowAssessment(showAssessment);
    setGetInTouch(getInTouch);
    setBookAnEvent(bookAnEvent);
    if (show || showAssessment || getInTouch || bookAnEvent) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [show, showAssessment, getInTouch, bookAnEvent]);

  return (
    <div className={masteryAssessment ? "hidden" : ""}>
      <div
        className={
          fix
            ? "fixed w-full   z-40 mt-[70px] bg-black shadow-xl ease-in-out duration-500"
            : "sticky z-40"
        }
      >
        <div className="px-[4%] xl:px-[60px] 2xl:px-[15%] ">
          <div className="flex justify-between items-center h-[70px]">
            <div className="flex items-center gap-[20px]">
              <div className="cursor-pointer">
                <div>
                  <Link to="/">
                    {fix ||
                    isHomePage ||
                    isDiscovering ||
                    isMastery ||
                    isExecutive ||
                    isTraining ||
                    isCoaches ? (
                      <img className="w-[76px]" src={logo} />
                    ) : (
                      <img className="w-[76px]" src={logo4} />
                    )}
                  </Link>
                </div>
              </div>
              <FiMenu
                onClick={() => setShow(!show)}
                className={`text-[30px] cursor-pointer ${
                  isHomePage ||
                  fix ||
                  isDiscovering ||
                  isMastery ||
                  isExecutive ||
                  isTraining ||
                  isCoaches
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full h-full  ${
          show ? "translate-x-0 z-40" : "-translate-x-full z-40"
        } ease-in-out duration-500`}
        style={{
          minWidth: show ? "200px" : "",
          zIndex: show ? 50 : "",
          background: show ? "#0004" : "",
          color: show ? "white" : "",
          top: show ? 0 : 0,
        }}
      >
        <div
          className={`top-0 left-0 z-40 absolute overflow-y-auto h-[calc(100vh)] bg-black md:w-[400px] w-full  pt-[28px]  ${
            show ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-500`}
        >
          <div className="px-[4%] xl:px-[60px] 2xl:px-[15%] flex flex-col h-full">
            <div className="flex items-center justify-between ">
              <div>
                <Link to="/">
                  <img className="w-[76px]" src={logo} />
                </Link>
              </div>
              <MdOutlineClose
                onClick={() => setShow(!show)}
                className=" text-white text-[40px] cursor-pointer "
              />
            </div>

            <div className=" mt-[70px] grid grid-cols-1 md:gap-[30px] gap-[40px]">
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Home
                </NavLink>
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Meet Me
                </NavLink>
              </h4>
              <h4
                onClick={() => {
                  setShow(!show);
                  setShowAssessment(!showAssessment);
                }}
                className="text-[16px] font-[500] md:font-[400] text-white cursor-pointer"
              >
                Take the clarity Assessment
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/discovering"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Discovering the New You Pathway
                </NavLink>
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/mastery"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Gaining Mastery Platform
                </NavLink>
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/executive"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Executive Coaching
                </NavLink>
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/training"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Training for leaders & organizations
                </NavLink>
              </h4>
              <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/contact"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Contact
                </NavLink>
              </h4>
              {/* <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/blog"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Blog
                </NavLink>
              </h4> */}
              {/* <h4
                onClick={() => setShow(!show)}
                className="text-[16px] font-[500] md:font-[400] text-white"
              >
                <NavLink
                  to="/academy"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F86108" : "white" };
                  }}
                >
                  Bimbo Messele Academy
                </NavLink>
              </h4> */}
            </div>
            <div className="mt-auto pt-[40px] pb-[28px]">
              <div className="py-[8px] px-[16px] rounded-[8px]  bg-[#021732]">
                <Link onClick={() => setShow(!show)} to="/coach-the-coaches">
                  <button className="text-[16px] font-[500] text-primary leading-[24px]">
                    Coach the Coaches
                  </button>
                </Link>
                <h4 className="text-[14px] font-[500] text-white leading-[20px]">
                  Coming in October 2024
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full h-full block ${
          showAssessment ? "translate-y-0 z-40" : "translate-y-full z-40"
        } ease-in-out duration-500`}
        style={{
          minWidth: showAssessment ? "200px" : "",
          zIndex: showAssessment ? 50 : "",
          background: showAssessment ? "black" : "",
          color: showAssessment ? "white" : "",
          top: showAssessment ? 0 : 0,
        }}
      >
        <div
          className={`bottom-0 left-1/2 transform -translate-x-1/2 z-40 absolute overflow-y-hidden  bg-white sm:w-[90%] w-[95%] md:rounded-[24px] rounded-[8px] pt-[18px] h-fit ${
            showAssessment
              ? "top-1/2 transform -translate-y-1/2"
              : "translate-y-full"
          } ease-in-out duration-500`}
        >
          <div className="overflow-y-auto h-[calc(100vh-100px)]">
            <Assessment
              showAssessment={showAssessment}
              setShowAssessment={setShowAssessment}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full h-full block ${
          getInTouch ? "translate-y-0 z-40" : "translate-y-full z-40"
        } ease-in-out duration-500`}
        style={{
          minWidth: getInTouch ? "200px" : "",
          zIndex: getInTouch ? 50 : "",
          background: getInTouch ? "black" : "",
          color: getInTouch ? "white" : "",
          top: getInTouch ? 0 : 0,
        }}
      >
        <div
          className={`bottom-0 left-1/2 transform -translate-x-1/2 z-40 absolute overflow-y-hidden  bg-white md:w-[542px] sm:w-[70%] w-[95%] md:rounded-[20px] rounded-[8px]  h-fit ${
            getInTouch
              ? "top-1/2 transform -translate-y-1/2"
              : "translate-y-full"
          } ease-in-out duration-500`}
        >
          <div className="overflow-y-auto h-[calc(100vh-100px)]">
            <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full h-full block ${
          bookAnEvent ? "translate-y-0 z-40" : "translate-y-full z-40"
        } ease-in-out duration-500`}
        style={{
          minWidth: bookAnEvent ? "200px" : "",
          zIndex: bookAnEvent ? 50 : "",
          background: bookAnEvent ? "black" : "",
          color: bookAnEvent ? "white" : "",
          top: bookAnEvent ? 0 : 0,
        }}
      >
        <div
          className={`bottom-0 left-1/2 transform -translate-x-1/2 z-40 absolute overflow-y-hidden  bg-white md:w-[542px] sm:w-[70%] w-[95%] md:rounded-[20px] rounded-[8px]  h-fit ${
            bookAnEvent
              ? "top-1/2 transform -translate-y-1/2"
              : "translate-y-full"
          } ease-in-out duration-500`}
        >
          <div className="overflow-y-auto h-[calc(100vh-250px)]">
            <BookAnEvent
              bookAnEvent={bookAnEvent}
              setBookAnEvent={setBookAnEvent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import instagram from "../assets/instagram.png";
import jsonp from "jsonp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://gmail.us10.list-manage.com/subscribe/post?u=ffc5bdf96fb847004948ba72b&amp;id=81425676aa&amp;f_id=0008d9e5f0";
    let timeoutOccured = false;
    const timeoutDuration = 5000;
    const timeoutId = setTimeout(() => {
      timeoutOccured = true;
      setLoading(false);
      setSubscriptionStatus("Subscribed successfully!");
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 3000);
    }, timeoutDuration);

    jsonp(
      `${url}&EMAIL=${email}`,
      { param: "c", timeout: timeoutDuration },
      (err, data) => {
        clearTimeout(timeoutId);
        if (!timeoutOccured) {
          if (err) {
            console.error("Error:", err);
            setLoading(false);
            setSubscriptionStatus("Failed to subscribe. Please try again.");
          } else {
            console.log("Data:", data);
            setLoading(false);
            if (data && data.result === "success") {
              setSubscriptionStatus("Subscribed successfully!");
              setTimeout(() => {
                setSubscriptionStatus(null);
              }, 5000);
            } else if (data && data.msg) {
              setSubscriptionStatus(data.msg);
            } else {
              setSubscriptionStatus("Failed to subscribe. Please try again.");
            }
          }
        }
      }
    );
    setEmail("");
  };

  const location = useLocation();

  const masteryAssessment = location.pathname === "/mastery-assessment";
  return (
    <div className={masteryAssessment ? "hidden" : ""}>
      <div className="bg-[#010A15]">
        <div className="py-[40px] px-[4%] xl:px-[60px] 2xl:px-[15%] bg-[#010A15]">
          <div className="md:flex justify-between items-center">
            <div>
              <img className="w-[76px]" src={logo} />
            </div>
            <div className="md:w-fit mt-[24px] md:mt-[0px]">
              <form
                onSubmit={onSubmit}
                className="md:flex items-center gap-[20px]"
              >
                <input
                  className="bg-gray-900 border-[1px] border-[#8B94A1]  px-[14px] py-[10px] w-full  h-[45px] rounded-[8px]  text-white"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                />
                <div className="">
                  <button className="rounded-[8px] border-[1px] border-white px-[20px] py-[12px] hover:bg-gray-900 font-[500] text-white  h-[45px] whitespace-nowrap min-w-[100%] md:w-fit mt-[10px] md:mt-[0px] bg-black">
                    Subscribe to Our Newsletter
                  </button>
                </div>
              </form>
              {subscriptionStatus && (
                <div className="text-white mt-2">{subscriptionStatus}</div>
              )}
            </div>
          </div>
          <div className="md:flex justify-between text-white mt-[24px]">
            <div className="order-2 grid grid-cols-2 gap-[30px] w-fit">
              <a
                href="https://www.instagram.com/bimbomeselecoaching?igsh=MWo1c2VvdTZ3eDNodQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[20px]">
                  <img className="w-[20px]" src={instagram} alt="Instagram" />
                </div>
              </a>
              {/* <div className="w-[20px]">
              <img className="w-[20px]" src={linkedin} />
            </div>
            <div className="w-[20px]">
              <img className="w-[20px]" src={x} />
            </div> */}
              <a
                href="https://www.facebook.com/bimbomeselecoaching"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[20px]">
                  <img className="w-[20px]" src={facebook} alt="facebook" />
                </div>
              </a>
            </div>
            <div className="order-1 grid grid-cols-1 md:grid-cols-4 gap-y-[24px]   py-[24px] md:py-[0px] md:pb-[24px]">
              <Link to="/about">
                <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                  About
                </h4>
              </Link>
              <Link to="/blog">
                <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                  Blog
                </h4>
              </Link>
              <Link to="/contact">
                <h4 className="text-white text-[14px] font-[500] leading-[20px] cursor-pointer">
                  Contact Us
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import coach from "../assets/coach.jpg";
import jsonp from "jsonp";

const CoachTheCoaches = () => {
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

  return (
    <div>
      <ScrollToTopOnMount />
      <div
        className={`bg-no-repeat z-10 -mt-[70px] w-full bg-cover bg-center h-screen  relative `}
        style={{
          backgroundImage: `url(${coach})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "grayscale(100%)",
        }}
      >
        <div className="transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute text-white w-full flex justify-center">
          <div className="md:w-[690px] w-full px-[4%] lg:px-[0px]">
            <h4 className="text-[30px] font-[700] text-center md:text-[72px] md:leading-[90px]">
              Coach the coaches coming soon
            </h4>
            <h4 className="text-[18px] font-[500] text-center">
              {" "}
              Coming in October 2024
            </h4>
            <h4 className="text-[18px] font-[600] text-center mt-[48px]">
              Notify me when the event starts
            </h4>
            <div className="mt-[16px] flex justify-center w-full">
              <div className=" w-[447px]">
                <h4 className="text-[14px] font-[500] text-[#8B94A1]">
                  Email Address
                </h4>
                <form onSubmit={onSubmit} className="flex items-center">
                  <input
                    className="bg-transparent border-[1px] border-[#8B94A1] rounded-l-[8px] px-[14px] py-[10px] w-full -mr-[8px] h-[45px]"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                  />
                  <div className="w-[153px]">
                    <button className="rounded-[8px] bg-white px-[20px] py-[12px] hover:bg-gray-100 font-[500] text-secondary w-[153px] h-[45px] ">
                      Notify me
                    </button>
                  </div>
                </form>
                {subscriptionStatus && (
                  <div className="text-white mt-2">{subscriptionStatus}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachTheCoaches;

import React from "react";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import coaches from "../assets/coaches.png";

const CoachTheCoaches = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <div
        className={`bg-no-repeat z-10 -mt-[70px] w-full bg-cover bg-center h-screen  relative`}
        style={{
          backgroundImage: `url(${coaches})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backdropFilter: "",
        }}
      ></div>
    </div>
  );
};

export default CoachTheCoaches;

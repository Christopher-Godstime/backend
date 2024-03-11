import React from "react";
import { InlineWidget } from "react-calendly";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Calendly = () => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className="h-[calc(100vh)]">
        <InlineWidget url="https://calendly.com/bimbomeselecoaching" />
      </div>
    </div>
  );
};

export default Calendly;

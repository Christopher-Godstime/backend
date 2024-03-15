import React, { useState, useEffect } from "react";
import form4 from "../assets/form4.png";
import { FiChevronDown } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { MdOutlineClose } from "react-icons/md";

import logo1 from "../assets/logo1.png";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoeqwvy");
  const refresh = () => window.location.reload(true);

  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  const [phoneState, setPhoneState] = useState({
    phoneLoading: false,
    phones: [],
    phoneErrorMessage: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });

        setPhoneState({
          ...phoneState,
          phoneLoading: true,
        });

        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        const sorted = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountryState({
          ...countryState,
          countries: sorted,
          loading: false,
        });

        setPhoneState({
          ...phoneState,
          phones: sorted,
          phoneLoading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry something went wrong",
        });

        setCountryState({
          ...phoneState,
          phoneLoading: false,
          phoneErrorMessage: "Sorry something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState({
    name: { common: "Nigeria" },
    flags: { png: "" },
  });

  const searchSelectedCountry = countries.find(
    (obj) => obj.name.common === selectedCountry.name.common
  );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const { phones } = phoneState;
  const [selectedPhone, setSelectedPhone] = useState({
    name: "Nigeria",
    flags: { png: "" },
    idd: { root: "+2", suffixes: ["34"] },
    area: "923768",
  });

  const searchSelectedPhone = phones.find(
    (obj) => `${obj.area}` === `${selectedPhone.area}`
  );

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  if (state.succeeded) {
    return (
      <div className="bg-sky-50 rounded-[5px] py-[48px] px-[10px] md:px-[30px]">
        <h4 className=" text-[25px] text-black font-semibold">Thanks!</h4>
        <h4 className=" w-full text-black  mt-[10px]  text-[16px] ">
          The form was submitted successfully.
        </h4>
        <div className="flex justify-center md:mt-[30px] mt-[30px]">
          <button
            onClick={refresh}
            className="bg-secondary hover:bg-black text-white px-[18px] py-[10px] rounded-[8px] text-[16px] font-[500]  w-full  mx-auto"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="text-black py-[48px]">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h4 className=" md:text-[36px] text-[24px] text-secondary font-[600] md:leading-[44px]  ">
            Training for leaders & organizations
          </h4>
          <h4 className="text-[#B1B7BF] text-[16px] font-[500] leading-[24px] mt:mt-[12px] ">
            Course registration
          </h4>

          <div className="md:mt-[68px] mt-[30px] grid grid-cols-1 gap-[17px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
              <input
                className="hidden"
                name="subject"
                type="hidden"
                value="Training for leaders & organizations"
              />
              <div>
                <h4 className="text-[14px] font-[500] ">
                  First Name <span className="text-primary">*</span>
                </h4>
                <input
                  className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                  placeholder="Enter first name"
                  type="text"
                  name="First Name"
                  id="firstName"
                  Required
                />
              </div>
              <div>
                <h4 className="text-[14px] font-[500] ">
                  Last Name <span className="text-primary">*</span>
                </h4>
                <input
                  className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                  placeholder="Enter last name"
                  type="text"
                  name="Last Name"
                  id="lastName"
                  Required
                />
              </div>
            </div>
            <div className="">
              <div>
                <h4 className="text-[14px] font-[500] ">Phone number</h4>
                <input
                  type="hidden"
                  name="Country Code"
                  value={`${selectedPhone.idd.root}${selectedPhone.idd.suffixes?.[0]}`}
                />
                <div className="border-[1px] border-gray-200 rounded-[8px] mt-[8px] flex items-center">
                  <div className="relative  w-[200px]">
                    <div
                      className="py-[10px]  pl-[14px] rounded-[8px] w-full flex items-center cursor-pointer"
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                      <span className="mr-[10px]">
                        {searchSelectedPhone && searchSelectedPhone.flags && (
                          <img
                            className="w-[22px] h-[16px] rounded-[2px]"
                            src={searchSelectedPhone.flags.png}
                            alt=""
                          />
                        )}
                      </span>
                      <span className="text-black">
                        {searchSelectedPhone
                          ? `${selectedPhone.idd.root}${selectedPhone.idd.suffixes?.[0]}`
                          : "Select Location"}
                      </span>
                      <FiChevronDown className="absolute right-[14px] top-1/2 transform -translate-y-1/2 text-[20px] text-gray-400" />
                    </div>

                    <PhoneDropdown
                      isOpen2={isOpen2}
                      setIsOpen2={setIsOpen2}
                      options={phones}
                      onSelect={handleSelectPhone}
                      selectedOption={selectedPhone}
                    />
                  </div>
                  <input
                    className="py-[10px] px-[14px] rounded-r-[8px]   focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                    placeholder="9029439392"
                    type="telephone"
                    name="Telephone"
                    id="telephone"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-[500] ">Location</h4>
              <input
                type="hidden"
                name="Country Name"
                value={selectedCountry.name.common}
              />
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative mt-[8px] w-full border-[1px] border-gray-200 rounded-[8px]"
              >
                <div className="py-[10px]  pl-[14px] rounded-[8px] w-full flex items-center cursor-pointer">
                  <span className="mr-[14px]">
                    {searchSelectedCountry && searchSelectedCountry.flags && (
                      <img
                        className="w-[22px] h-[16px] rounded-[2px]"
                        src={searchSelectedCountry.flags.png}
                        alt=""
                      />
                    )}
                  </span>
                  <span className="text-black">
                    {searchSelectedCountry
                      ? searchSelectedCountry.name.common
                      : "Select Location"}
                  </span>
                  <FiChevronDown className="absolute right-[14px] top-1/2 transform -translate-y-1/2 text-[20px] text-gray-400" />
                </div>

                <CustomDropdown
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  options={countries}
                  onSelect={handleSelectCountry}
                  selectedOption={selectedCountry}
                  isPhoneDropdown={false}
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-[14px] font-[500] ">
                Email Address <span className="text-primary">*</span>
              </h4>

              <input
                className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px]   focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                placeholder="Enter email address"
                id="email"
                type="email"
                name="Email"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-[24px] flex justify-center w-full text-white bg-secondary hover:bg-black lg:text-[16px] font-[500] px-[20px] py-[12px] rounded-[8px]"
        >
          Submit
        </button>
      </form>
      {state.submitting && (
        <div
          className="fixed loading w-full h-full"
          style={{
            background: "#0008",
            color: "white",
            top: 0,
            left: 0,
            zIndex: 50,
          }}
        >
          <div className="flex justify-center ">
            <div>
              <img className="w-[170px]" src={logo1} />
              <h4
                className="text-white flex justify-center  text-[16px] font-[500] mt-[10px]"
                fill="#fff"
                x="5"
                y="45"
              >
                Sending Form...
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TrainingForm = () => {
  return (
    <div className="-mt-[70px]  ">
      <ScrollToTopOnMount />
      <div className="w-full -mt-[70px] h-[70px] bg-black xl:hidden"></div>
      <div className="lg:flex justify-between  ">
        <div className="h-screen hidden xl:flex">
          <img src={form4} />
        </div>
        <div className="md:h-[calc(100vh)] bg-white md:flex justify-center items-center mx-auto w-[95%] md:w-[480px] px-[16px] overflow-y-auto  ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const CustomDropdown = ({
  options,
  onSelect,
  selectedOption,
  isOpen,
  setIsOpen,
}) => {
  const handleSelectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg h-[300px] overflow-y-auto z-40">
          {options.map((item) => (
            <div
              key={uuidv4()}
              className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-100 ${
                selectedOption &&
                selectedOption.name.common === item.name.common
                  ? "bg-gray-100"
                  : ""
              }`}
              onClick={() => handleSelectOption(item)}
            >
              <img
                className="w-[22px] h-[16px] rounded-[2px] mr-2"
                src={item.flags.png}
                alt=""
              />
              <span>{item.name.common}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PhoneDropdown = ({
  options,
  onSelect,
  selectedOption,
  isOpen2,
  setIsOpen2,
}) => {
  const handleSelectOption = (option) => {
    setIsOpen2(false);
    if (option.name.common === "United States") {
      const selectedPhone = {
        name: option.name.common,
        flags: option.flags,
        idd: {
          root: "+1",
          suffixes: [""],
        },
        area: "9372610",
      };
      onSelect(selectedPhone);
    } else {
      onSelect(option);
    }
  };

  return (
    <div className="relative">
      {isOpen2 && (
        <div className="absolute left-0 mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg h-[200px] overflow-y-auto z-40">
          {options.map((item) => (
            <div
              key={uuidv4()}
              className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-100 ${
                selectedOption && selectedOption.name.common === item.idd.root
                  ? "bg-gray-100"
                  : ""
              }`}
              onClick={() => handleSelectOption(item)}
            >
              <img
                className="w-[22px] h-[16px] rounded-[2px] mr-2"
                src={item.flags.png}
                alt=""
              />
              <span>{item.name.common}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainingForm;

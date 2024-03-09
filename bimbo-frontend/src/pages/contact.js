import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { FiChevronDown } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import logo1 from "../assets/logo1.png";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xayrjand");
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
  });

  const searchSelectedPhone = phones.find(
    (obj) =>
      `${obj.idd.root}${obj.idd.suffixes?.[0]}` ===
      `${selectedPhone.idd.root}${selectedPhone.idd.suffixes?.[0]}`
  );

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  if (state.succeeded) {
    return (
      <div className="bg-sky-50 rounded-[5px] py-[10px] px-[10px] md:px-[30px]">
        <h4 className=" text-[25px] font-semibold">Thanks!</h4>
        <h4 className=" w-full  mt-[10px]  text-[16px] ">
          The form was submitted successfully.
        </h4>
        <button
          onClick={refresh}
          className=" text-red-400  mt-[10px]  text-[16px] "
        >
          Go back to form
        </button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4 className=" text-[24px] text-secondary font-[600] leading-[32px]  ">
            Get in touch with me
          </h4>
          <div className="mt-[48px] grid grid-cols-1 gap-[17px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
              <input
                className="hidden"
                name="subject"
                type="hidden"
                value="Bimbo Mesele Coaching Company Contact Us Form"
              />
              <div>
                <h4 className="text-[14px] font-[500] ">
                  First Name <span className="text-primary">*</span>
                </h4>
                <input
                  className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                  placeholder="Enter first name"
                  type="text"
                  name="firstName"
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
                  name="lastName"
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
                  name="countryCode"
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
                    name="telephone"
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
                name="countryName"
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
                name="email"
                required
              />
            </div>
            <div className="">
              <h4 className="text-[14px] font-[500] ">Message</h4>
              <textarea
                placeholder="Enter a description..."
                className=" w-full mt-[8px]  text-[12px] md:text-[16px] border-[1px] border-gray-200 px-[16px] py-[12px]  rounded-[8px]"
                rows="5"
                id="message"
                name="message"
                Required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-[24px] flex justify-center w-full text-white bg-secondary hover:bg-black lg:text-[16px] font-[500] px-[20px] py-[12px] rounded-[8px]"
        >
          Send Message
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

const Contact = () => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <h4 className="text-secondary text-[36px] font-[600] leading-[44px] md:text-[48px] md:leading-[60px]">
          Contact us
        </h4>
        <h4 className="text-[#56575C] font-[600] text-[16px] leading-[24px]">
          Email, call or complete the form to reach Bimbo Mesele
        </h4>

        <div className="lg:flex mt-[48px] gap-[32px]">
          <div className="order-2 lg:w-[40%] border-[1px] border-gray-200 p-[24px] rounded-[20px] h-fit">
            <ContactForm />
          </div>
          <div className="order-1 lg:w-[60%] grid grid-cols-1 gap-[32px] md:grid-cols-2 mt-[48px] lg:mt-[0px] h-fit">
            <div className="border-[1px] border-gray-200 rounded-[16px] p-[16px] ">
              <div className="rounded-full flex justify-center items-center border-[1px] border-gray-200 w-[48px] h-[48px]">
                <img className="w-[32px]" src={c1} />
              </div>
              <h4 className="text-[24px] font-[600] mt-[24px]">Chat with us</h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <h4 className="font-[500] text-[16px] text-primary">
                hi@bimbomesele,com
              </h4>
            </div>

            <div className="border-[1px] border-gray-200 rounded-[16px] p-[16px] ">
              <div className="rounded-full flex justify-center items-center border-[1px] border-gray-200 w-[48px] h-[48px]">
                <img className="w-[32px]" src={c2} />
              </div>
              <h4 className="text-[24px] font-[600] mt-[24px]">Call us</h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Mon - Fri from 8am to 5pm.
              </h4>
              <h4 className="font-[500] text-[16px] text-primary">
                +2348163762566
              </h4>
            </div>

            <div className="border-[1px] border-gray-200 rounded-[16px] p-[16px] ">
              <div className="rounded-full flex justify-center items-center border-[1px] border-gray-200 w-[48px] h-[48px]">
                <img className="w-[32px]" src={c3} />
              </div>
              <h4 className="text-[24px] font-[600] mt-[24px]">
                Book Dr Bimbo for an event
              </h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <button className="font-[500] text-[16px] text-primary">
                Click here.
              </button>
            </div>

            <div className="border-[1px] border-gray-200 rounded-[16px] p-[16px] ">
              <div className="rounded-full flex justify-center items-center border-[1px] border-gray-200 w-[48px] h-[48px]">
                <img className="w-[32px]" src={c4} />
              </div>
              <h4 className="text-[24px] font-[600] mt-[24px]">
                Schedule a meeting
              </h4>
              <h4 className="text-[16px] font-[400] text-[#56575C]">
                Our friendly team is here to help
              </h4>
              <button className="font-[500] text-[16px] text-primary">
                Click here.
              </button>
            </div>
          </div>
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
    onSelect(option);
    setIsOpen2(false);
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

export default Contact;

import React, { useEffect, useState } from "react";

import { FiChevronDown } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import logo1 from "../assets/logo1.png";
import validate from "../utils/validate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = ({ bookAnEvent, setBookAnEvent }) => {
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

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "Nigeria",
    duration: "",
    date: "",
    eventName: "",
    overview: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [page, setPage] = useState(0);
  const [sending, setSending] = useState(false);
  const [successText, setSuccessText] = useState(false);

  const formTiles = ["Contact Details", "Event Details"];

  //   const handleSubmit = () => {
  //     const validationErrors = validate(formData);
  //     setFormError(validationErrors);

  //     const currentSectionErrors = Object.keys(validationErrors).filter((key) => {
  //       const inspectSection = getInputSection(key);
  //       return inspectSection === page;
  //     });

  //     if (currentSectionErrors.length === 0) {
  //       sendAssessment();
  //     }
  //   };

  const handleNext = () => {
    const validationErrors = validate(formData);
    setFormError(validationErrors);

    const currentSectionErrors = Object.keys(validationErrors).filter((key) => {
      const inspectSection = getInputSection(key);
      return inspectSection === page;
    });

    if (currentSectionErrors.length === 0) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        if (nextPage < formTiles.length) {
          clearErrors();
        }
        return nextPage;
      });
    }
  };

  const clearErrors = () => {
    setFormError({});
  };

  const getInputSection = (inputName) => {
    switch (inputName) {
      case "firstName":
      case "lastName":
      case "email":
      case "phoneNumber":
      case "location":
        return 0;
      case "eventName":
      case "date":
      case "duration":
      case "overview":
        return 1;
      default:
        return -1;
    }
  };

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const setToMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
    return date;
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
    <div>
      <div className="text-black">
        <div>
          <div className="flex justify-between items-center">
            <h4 className=" text-[24px] text-secondary font-[600] leading-[32px]  ">
              Book an event
            </h4>
            <MdOutlineClose
              onClick={() => setBookAnEvent(!bookAnEvent)}
              className="text-[#021732] text-[32px] cursor-pointer"
            />
          </div>
          {page === 0 && (
            <div className="mt-[48px] grid grid-cols-1 gap-[17px]">
              <div>
                <h4 className="text-[#9EA0A3]">Step 1 of 2</h4>
                <div className="flex gap-[8px]">
                  <div className="w-[24px] h-[4px] rounded-[4px] bg-primary"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                </div>
                <h4 className="text-[24px] font-[600] text-secondary my-[32px]">
                  Contact Details
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                <div>
                  <h4 className="text-[14px] font-[500] ">
                    First Name <span className="text-primary">*</span>
                  </h4>

                  <input
                    maxLength={15}
                    type="text"
                    name="firstName"
                    value={
                      formData.firstName?.charAt(0).toUpperCase() +
                      formData.firstName.slice(1)
                    }
                    onChange={(e) => handleChange(e.target.value, "firstName")}
                    className={
                      formError.firstName
                        ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                        : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                    }
                    placeholder="Enter first name"
                  />
                  {formError.firstName && (
                    <h4 className="text-[12px] text-red-500 mt-[2px]">
                      {formError.firstName}
                    </h4>
                  )}
                </div>
                <div>
                  <h4 className="text-[14px] font-[500] ">
                    Last Name <span className="text-primary">*</span>
                  </h4>

                  <input
                    maxLength={15}
                    type="text"
                    name="lastName"
                    value={
                      formData.lastName?.charAt(0).toUpperCase() +
                      formData.lastName.slice(1)
                    }
                    onChange={(e) => handleChange(e.target.value, "lastName")}
                    className={
                      formError.lastName
                        ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                        : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                    }
                    placeholder="Enter last name"
                  />
                  {formError.lastName && (
                    <h4 className="text-[12px] text-red-500 mt-[2px]">
                      {formError.lastName}
                    </h4>
                  )}
                </div>
              </div>
              <div className="">
                <div>
                  <h4 className="text-[14px] font-[500] ">Phone number</h4>

                  <div
                    className={
                      formError.phoneNumber
                        ? "border-[1px] border-red-500 rounded-[8px] mt-[8px] flex items-center"
                        : "border-[1px] border-gray-200 rounded-[8px] mt-[8px] flex items-center"
                    }
                  >
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
                      maxLength={10}
                      type="tel"
                      value={formData.phoneNumber
                        .slice(0, 11)
                        .replace(/\D/g, "")}
                      onChange={(e) =>
                        handleChange(e.target.value, "phoneNumber")
                      }
                      name="phoneNumber"
                      className="py-[10px] px-[14px] rounded-r-[8px]   focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                      placeholder="9029439392"
                    />
                  </div>
                  {formError.phoneNumber && (
                    <h4 className="text-[12px] text-red-500 mt-[2px]">
                      {formError.phoneNumber}
                    </h4>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-[14px] font-[500] ">Location</h4>

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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  className={
                    formError.email
                      ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                      : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                  }
                  placeholder="Enter email address"
                />
                {formError.email && (
                  <h4 className="text-[12px] text-red-500 mt-[2px]">
                    {formError.email}
                  </h4>
                )}
              </div>
            </div>
          )}

          {page === 1 && (
            <div className="mt-[48px] grid grid-cols-1 gap-[17px]">
              <div>
                <h4 className="text-[#9EA0A3]">Step 2 of 2</h4>
                <div className="flex gap-[8px]">
                  <div className="w-[24px] h-[4px] rounded-[4px] bg-primary"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                  <div className="rounded-full w-[4px] h-[4px] bg-[#D9D9D9]"></div>
                </div>
                <h4 className="text-[24px] font-[600] text-secondary my-[32px]">
                  Event Details
                </h4>
              </div>

              <div>
                <h4 className="text-[14px] font-[500] ">Event Name</h4>

                <input
                  maxLength={15}
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={(e) => handleChange(e.target.value, "eventName")}
                  className={
                    formError.eventName
                      ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                      : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                  }
                  placeholder="Enter Event name"
                />
                {formError.eventName && (
                  <h4 className="text-[12px] text-red-500 mt-[2px]">
                    {formError.eventName}
                  </h4>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                <div>
                  <h4 className="text-[14px] font-[500] ">Date of event</h4>

                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                    minDate={setToMidnight(new Date())}
                  />
                  {formError.date && (
                    <h4 className="text-[12px] text-red-500 mt-[2px]">
                      {formError.date}
                    </h4>
                  )}
                </div>
                <div>
                  <h4 className="text-[14px] font-[500] ">Duration</h4>

                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={(e) => handleChange(e.target.value, "duration")}
                    className={
                      formError.duration
                        ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                        : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                    }
                    placeholder="Enter event duration"
                  />
                  {formError.duration && (
                    <h4 className="text-[12px] text-red-500 mt-[2px]">
                      {formError.duration}
                    </h4>
                  )}
                </div>
              </div>

              <div className="">
                <h4 className="text-[14px] font-[500] ">Overview</h4>

                <textarea
                  placeholder="Enter a description..."
                  className=" w-full mt-[8px]  text-[12px] md:text-[16px] border-[1px] border-gray-200 px-[16px] py-[12px]  rounded-[8px]"
                  rows="5"
                  name="overview"
                  value={formData.overview}
                  onChange={(e) => handleChange(e.target.value, "overview")}
                />
                {formError.overview && (
                  <h4 className="text-[12px] text-red-500 mt-[2px]">
                    {formError.overview}
                  </h4>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="w-full mt-[17px] gap-[16px] flex justify-between">
          <div>
            {page !== 0 ? (
              <button
                onClick={() => setPage(page - 1)}
                className="text-secondary bg-white hover:bg-gray-100 px-[18px] py-[10px] rounded-[8px] font-[500]  w-fit border-[1px] border-gray-200"
              >
                Back
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="w-full">
            {page !== formData.length - 0 && (
              <div className="w-full flex justify-end">
                {page === formTiles.length - 1 && <></>}
                {page !== formTiles.length - 1 && (
                  <buttton
                    onClick={handleNext}
                    className="text-white bg-secondary hover:bg-black px-[20px] py-[10px] rounded-[8px] font-[500] md:w-[164px] w-full ml-auto cursor-pointer flex justify-center"
                  >
                    Next
                  </buttton>
                )}
              </div>
            )}
          </div>
        </div>

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

      <div className="text-black ">
        <form onSubmit={handleSubmit}>
          <div className="hidden">
            <div className="mt-[48px] grid grid-cols-1 gap-[17px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                <input
                  className="hidden"
                  name="subject"
                  type="hidden"
                  value="Book an event"
                />
                <div>
                  <h4 className="text-[14px] font-[500] ">
                    First Name <span className="text-primary">*</span>
                  </h4>
                  <input
                    className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                    type="text"
                    name="First Name"
                    value={formData.firstName}
                  />
                </div>
                <div>
                  <h4 className="text-[14px] font-[500] ">
                    Last Name <span className="text-primary">*</span>
                  </h4>
                  <input
                    className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                    type="text"
                    name="Last Name"
                    value={formData.lastName}
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
                </div>
              </div>
              <div>
                <h4 className="text-[14px] font-[500] ">Location</h4>
                <input
                  type="hidden"
                  name="Country Name"
                  value={selectedCountry.name.common}
                />
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500] ">
                  Email Address <span className="text-primary">*</span>
                </h4>

                <input
                  className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                  type="email"
                  name="Email"
                  value={formData.email}
                />
              </div>
            </div>

            <div className="mt-[48px] grid grid-cols-1 gap-[17px]">
              <div>
                <h4 className="text-[14px] font-[500] ">Event Name</h4>
                <input
                  className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                  placeholder="Enter Event name"
                  type="text"
                  name="Event Name"
                  value={formData.eventName}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                <div>
                  <h4 className="text-[14px] font-[500] ">Date of event</h4>
                  <input
                    className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                    type="text"
                    name="Date"
                    value={selectedDate}
                  />
                </div>
                <div>
                  <h4 className="text-[14px] font-[500] ">Duration</h4>
                  <input
                    className="py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full hidden"
                    type="text"
                    name="Duration"
                    value={formData.duration}
                  />
                </div>
              </div>

              <div className="">
                <h4 className="text-[14px] font-[500] ">Overview</h4>
                <textarea
                  placeholder="Enter a description..."
                  className=" w-full mt-[8px]  text-[12px] md:text-[16px] border-[1px] border-gray-200 px-[16px] py-[12px]  rounded-[8px] hidden"
                  rows="5"
                  value={formData.overview}
                  name="Overview"
                />
              </div>
            </div>
          </div>

          {page === 1 && (
            <div className="absolute right-[4%] xl:right-[24px] bottom-[110px]">
              <button
                disabled={state.submitting}
                className="text-white bg-secondary hover:bg-black px-[20px] py-[10px] rounded-[8px] font-[500] md:w-[165px] w-full ml-auto"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const BookAnEvent = ({ bookAnEvent, setBookAnEvent }) => {
  return (
    <div className="">
      <div className="py-[24px] px-[4%] xl:px-[24px] ">
        <ContactForm
          bookAnEvent={bookAnEvent}
          setBookAnEvent={setBookAnEvent}
        />
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

export default BookAnEvent;

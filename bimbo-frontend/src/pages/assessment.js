import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { FiCheck } from "react-icons/fi";
import "react-phone-input-2/lib/style.css";
import { FiChevronDown } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import validate from "../utils/validate";

import logo1 from "../assets/logo1.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";

const Assessment = () => {
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

    setFormData((prevFormData) => ({
      ...prevFormData,
      location: country.name.common, // Update the location directly
    }));
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
  console.log(`${selectedCountry.name.common}`);
  console.log(`${selectedPhone.idd.root}${selectedPhone.idd.suffixes[0]}`);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "Nigeria",
    assessment1: "",
    assessment2: "",
    assessment3: "",
    assessment4: "",
    assessment5: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [page, setPage] = useState(0);
  const [sending, setSending] = useState(false);
  const [successText, setSuccessText] = useState(false);

  const formTiles = [
    "Personal Details",
    "Assessment 1",
    "Assessment 2",
    "Assessment 3",
    "Assessment 4",
    "Assessment 5",
  ];

  const sendAssessment = async () => {
    try {
      setSending(true);
      const response = await axios.post(
        "https://backend-t9l2.onrender.com/api/email/send_email",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: `${selectedPhone.idd.root}${selectedPhone.idd.suffixes[0]}${formData.phoneNumber}`,
          location: formData.location,
          assessment1: parseInt(formData.assessment1),
          assessment2: parseInt(formData.assessment2),
          assessment3: parseInt(formData.assessment3),
          assessment4: parseInt(formData.assessment4),
          assessment5: parseInt(formData.assessment5),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSuccessText(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate(formData);
    setFormError(validationErrors);

    const currentSectionErrors = Object.keys(validationErrors).filter((key) => {
      const inspectSection = getInputSection(key);
      return inspectSection === page;
    });

    if (currentSectionErrors.length === 0) {
      sendAssessment();
    }
    console.log(formData);
    console.log(
      `${selectedPhone.idd.root}${selectedPhone.idd.suffixes[0]}${formData.phoneNumber}`
    );
  };

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
      case "assessment1":
        return 1;
      case "assessment2":
        return 2;
      case "assessment3":
        return 3;
      case "assessment4":
        return 4;
      case "assessment5":
        return 5;
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

  console.log(formData);

  // useEffect(() => {
  //   setSending(sending);
  //   setSuccessText(successText);
  //   if (sending || successText) {
  //     document.body.classList.add("overflow-y-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-y-hidden");
  //   }
  // }, [sending, successText]);

  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className="bg-black md:p-[5%] px-[4%] 2xl:px-[12%] py-[70px] ">
        <div className="bg-white lg:p-[0px]  p-[5%] lg:px-[32px] md:rounded-[24px] rounded-[8px]">
          <div className="lg:p-[32px] pb-[20px] border-b-[1px] border-gray-300">
            <div className="flex justify-between items-center gap-[20px]">
              <h4 className="text-[24px] font-[600] md:text-[36px]">
                Discovering the New You
              </h4>
              <MdOutlineClose className="text-[#021732] text-[32px]" />
            </div>
            <div className="font-[500] mt-[5px] md:mt-[0px] text-text">
              Follow the simple 6 steps to complete your assessment
            </div>
          </div>
          <div className="lg:flex ">
            <div className="xl:w-[25%] lg:w-[40%] hidden lg:block border-r-[1px] border-gray-300 ">
              {page !== formTiles.length - 0 && (
                <div className="flex py-[32px] px-[32px] justify-center">
                  <div className="grid grid-cols-1 gap-[60px] -mr-[24px] z-30 ">
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Personal information</h4>
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="w-[32px] h-[32px]" src={a1} />
                      </div>
                    </div>
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Calling</h4>
                      <div
                        className={
                          page >= 1
                            ? "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary"
                            : "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#E6E8EB]"
                        }
                      >
                        <img
                          className={
                            page >= 1
                              ? "invert w-[32px] h-[32px]"
                              : "w-[32px] h-[32px]"
                          }
                          src={a2}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Niche</h4>
                      <div
                        className={
                          page >= 2
                            ? "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary"
                            : "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#E6E8EB]"
                        }
                      >
                        <img
                          className={
                            page >= 2
                              ? "invert w-[32px] h-[32px]"
                              : "w-[32px] h-[32px]"
                          }
                          src={a3}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Goals</h4>
                      <div
                        className={
                          page >= 3
                            ? "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary"
                            : "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#E6E8EB]"
                        }
                      >
                        <img
                          className={
                            page >= 3
                              ? "invert w-[32px] h-[32px]"
                              : "w-[32px] h-[32px]"
                          }
                          src={a4}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Impact</h4>
                      <div
                        className={
                          page >= 4
                            ? "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary"
                            : "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#E6E8EB]"
                        }
                      >
                        <img
                          className={
                            page >= 4
                              ? "invert w-[32px] h-[32px]"
                              : "w-[32px] h-[32px]"
                          }
                          src={a5}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-[16px] items-center">
                      <h4 className="font-[500]">Legacy</h4>
                      <div
                        className={
                          page >= 5
                            ? "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary"
                            : "w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#E6E8EB]"
                        }
                      >
                        <img
                          className={
                            page >= 5
                              ? "invert w-[32px] h-[32px]"
                              : "w-[32px] h-[32px]"
                          }
                          src={a6}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="min-h-max w-[1px] bg-gray-200">
                    <div
                      className="w-[1px] h-[20%] bg-primary rounded-[50px] ease-in-out duration-700"
                      style={{ height: `${page * 20}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:p-[32px] pt-[20px] xl:w-[75%] lg:w-[60%]">
              {page === 0 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="w-[32px] h-[32px]" src={a1} />
                      </div>
                      <h4 className="font-[500]">Personal information</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 1/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500] lg:w-[70%] md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    Let’s start with your personal information
                  </h4>
                  <div className="mt-[24px] grid grid-cols-1 gap-[17px]">
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
                          onChange={(e) =>
                            handleChange(e.target.value, "firstName")
                          }
                          className={
                            formError.firstName
                              ? "py-[10px] px-[14px] rounded-[8px] border-[1px] border-red-500 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                              : "py-[10px] px-[14px] rounded-[8px] border-[1px] border-gray-200 mt-[8px] focus:outline-none  focus:border-orange-300  focus:border-[1px] w-full"
                          }
                          placeholder="Enter fist name"
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
                          onChange={(e) =>
                            handleChange(e.target.value, "lastName")
                          }
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                      <div>
                        <h4 className="text-[14px] font-[500] ">
                          Email Address <span className="text-primary">*</span>
                        </h4>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange(e.target.value, "email")
                          }
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
                      <div>
                        <h4 className="text-[14px] font-[500] ">
                          Phone number
                        </h4>
                        <div
                          className={
                            formError.email
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
                                {searchSelectedPhone &&
                                  searchSelectedPhone.flags && (
                                    <img
                                      className="w-[22px] h-[16px] rounded-[2px]"
                                      src={searchSelectedPhone.flags.png}
                                      alt=""
                                    />
                                  )}
                              </span>
                              <span className="text-black">
                                {searchSelectedPhone
                                  ? `${searchSelectedPhone.idd.root}${searchSelectedPhone.idd.suffixes[0]}`
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
                            {searchSelectedCountry &&
                              searchSelectedCountry.flags && (
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
                  </div>
                </div>
              )}

              {page === 1 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="invert w-[32px] h-[32px]" src={a2} />
                      </div>
                      <h4 className="font-[500]">Calling</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 2/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500]  md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    How clear are you on your calling, i.e. why you are in this
                    world, and what gifts are you supposed to share with the
                    world?
                  </h4>
                  <div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[10px] sm:gap-[40px] md:gap-[10px]">
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px]  grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="1"
                            name="assessment1"
                            value="1"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="1"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  1
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="1"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="2"
                            name="assessment1"
                            value="2"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="2"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  2
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="2"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              2
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="3"
                            name="assessment1"
                            value="3"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="3"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  3
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="3"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              3
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="4"
                            name="assessment1"
                            value="4"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="4"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  4
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="4"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              4
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="5"
                            name="assessment1"
                            value="5"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="5"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  5
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="5"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              5
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px] grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="6"
                            name="assessment1"
                            value="6"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="6"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  6
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="6"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              6
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="7"
                            name="assessment1"
                            value="7"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="7"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  7
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="7"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              7
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="8"
                            name="assessment1"
                            value="8"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="8"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  8
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="8"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              8
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="9"
                            name="assessment1"
                            value="9"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="9"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  9
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="9"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              9
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="10"
                            name="assessment1"
                            value="10"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment1")
                            }
                          />
                          <label
                            htmlFor="10"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  10
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="10"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              10
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {formError.assessment1 && (
                    <h4 className="text-[12px] text-red-500 mt-[10px]">
                      {formError.assessment1}
                    </h4>
                  )}
                </div>
              )}

              {page === 2 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="invert w-[32px] h-[32px]" src={a3} />
                      </div>
                      <h4 className="font-[500]">Niche</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 3/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500]  md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    How clear are you about your niche?
                  </h4>
                  <div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[10px] sm:gap-[40px] md:gap-[10px]">
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px]  grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="1"
                            name="assessment2"
                            value="1"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="1"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  1
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="1"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="2"
                            name="assessment2"
                            value="2"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="2"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  2
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="2"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              2
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="3"
                            name="assessment2"
                            value="3"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="3"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  3
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="3"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              3
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="4"
                            name="assessment2"
                            value="4"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="4"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  4
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="4"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              4
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="5"
                            name="assessment2"
                            value="5"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="5"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  5
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="5"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              5
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px] grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="6"
                            name="assessment2"
                            value="6"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="6"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  6
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="6"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              6
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="7"
                            name="assessment2"
                            value="7"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="7"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  7
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="7"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              7
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="8"
                            name="assessment2"
                            value="8"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="8"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  8
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="8"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              8
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="9"
                            name="assessment2"
                            value="9"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="9"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  9
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="9"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              9
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="10"
                            name="assessment2"
                            value="10"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment2")
                            }
                          />
                          <label
                            htmlFor="10"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  10
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="10"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              10
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {formError.assessment2 && (
                    <h4 className="text-[12px] text-red-500 mt-[10px]">
                      {formError.assessment2}
                    </h4>
                  )}
                </div>
              )}

              {page === 3 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="invert w-[32px] h-[32px]" src={a4} />
                      </div>
                      <h4 className="font-[500]">Goals</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 4/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500]  md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    How clear are you on your long-term goals and aspirations?
                  </h4>
                  <div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[10px] sm:gap-[40px] md:gap-[10px]">
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px]  grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="1"
                            name="assessment3"
                            value="1"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="1"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  1
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="1"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="2"
                            name="assessment3"
                            value="2"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="2"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  2
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="2"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              2
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="3"
                            name="assessment3"
                            value="3"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="3"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  3
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="3"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              3
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="4"
                            name="assessment3"
                            value="4"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="4"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  4
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="4"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              4
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="5"
                            name="assessment3"
                            value="5"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="5"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  5
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="5"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              5
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px] grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="6"
                            name="assessment3"
                            value="6"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="6"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  6
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="6"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              6
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="7"
                            name="assessment3"
                            value="7"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="7"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  7
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="7"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              7
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="8"
                            name="assessment3"
                            value="8"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="8"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  8
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="8"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              8
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="9"
                            name="assessment3"
                            value="9"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="9"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  9
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="9"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              9
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="10"
                            name="assessment3"
                            value="10"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment3")
                            }
                          />
                          <label
                            htmlFor="10"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  10
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="10"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              10
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {formError.assessment3 && (
                    <h4 className="text-[12px] text-red-500 mt-[10px]">
                      {formError.assessment3}
                    </h4>
                  )}
                </div>
              )}

              {page === 4 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="invert w-[32px] h-[32px]" src={a5} />
                      </div>
                      <h4 className="font-[500]">Impact</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 5/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500]  md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    How clear are you on your short-term and long-term goals/
                    aspirations?
                  </h4>
                  <div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[10px] sm:gap-[40px] md:gap-[10px]">
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px]  grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="1"
                            name="assessment4"
                            value="1"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="1"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  1
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="1"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="2"
                            name="assessment4"
                            value="2"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="2"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  2
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="2"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              2
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="3"
                            name="assessment4"
                            value="3"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="3"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  3
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="3"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              3
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="4"
                            name="assessment4"
                            value="4"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="4"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  4
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="4"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              4
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="5"
                            name="assessment4"
                            value="5"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="5"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  5
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="5"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              5
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px] grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="6"
                            name="assessment4"
                            value="6"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="6"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  6
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="6"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              6
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="7"
                            name="assessment4"
                            value="7"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="7"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  7
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="7"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              7
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="8"
                            name="assessment4"
                            value="8"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="8"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  8
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="8"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              8
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="9"
                            name="assessment4"
                            value="9"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="9"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  9
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="9"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              9
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="10"
                            name="assessment4"
                            value="10"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment4")
                            }
                          />
                          <label
                            htmlFor="10"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  10
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="10"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              10
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {formError.assessment4 && (
                    <h4 className="text-[12px] text-red-500 mt-[10px]">
                      {formError.assessment4}
                    </h4>
                  )}
                </div>
              )}

              {page === 5 && (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px] items-center lg:hidden">
                      <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary">
                        <img className="invert w-[32px] h-[32px]" src={a6} />
                      </div>
                      <h4 className="font-[500]">Lagacy</h4>
                    </div>
                    <h4 className="text-text font-[500]">Step 6/6</h4>
                  </div>
                  <h4 className="md:text-[36px] md:font-[500]  md:leading-[44px] text-[24px] font-[600] leading-[32px] mt-[40px] md:mt-[0px]">
                    How well have you been able to identify the kind of legacy
                    that you want to leave behind?
                  </h4>
                  <div className="mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[10px] sm:gap-[40px] md:gap-[10px]">
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px]  grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="1"
                            name="assessment5"
                            value="1"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="1"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  1
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="1"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="2"
                            name="assessment5"
                            value="2"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="2"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  2
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="2"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              2
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="3"
                            name="assessment5"
                            value="3"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="3"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  3
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="3"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              3
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="4"
                            name="assessment5"
                            value="4"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="4"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  4
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="4"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              4
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="5"
                            name="assessment5"
                            value="5"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="5"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  5
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="5"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              5
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-[10px] sm:gap-[40px] md:gap-[10px] grid-cols-5">
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="6"
                            name="assessment5"
                            value="6"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="6"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  6
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="6"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              6
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="7"
                            name="assessment5"
                            value="7"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="7"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  7
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="7"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              7
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="8"
                            name="assessment5"
                            value="8"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="8"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  8
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="8"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              8
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="9"
                            name="assessment5"
                            value="9"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="9"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  9
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="9"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              9
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="radio-container2 flex flex-col items-center gap-[12px]">
                          <input
                            type="radio"
                            id="10"
                            name="assessment5"
                            value="10"
                            className="hidden-input2"
                            onChange={(e) =>
                              handleChange(e.target.value, "assessment5")
                            }
                          />
                          <label
                            htmlFor="10"
                            className="custom-radio2 h-[51px] w-full md:w-[40px] md:h-[40px]"
                          >
                            <div className="checkmark2">
                              <div className="h-[45px] w-full md:w-[40px] md:h-[40px] flex justify-center items-center">
                                <FiCheck className="text-[25px] text-white hidden md:block" />
                                <div className="text-white leading-[0px] text-[20px] font-[500] block md:hidden">
                                  10
                                </div>
                              </div>
                            </div>
                          </label>
                          <div className="hidden md:block">
                            <label
                              htmlFor="10"
                              className="text-black leading-[0px] text-[20px] font-[500]"
                            >
                              10
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {formError.assessment5 && (
                    <h4 className="text-[12px] text-red-500 mt-[10px]">
                      {formError.assessment5}
                    </h4>
                  )}
                </div>
              )}

              <div className="w-full mt-[60px] gap-[16px] flex justify-between">
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

                <div>
                  {page !== formData.length - 0 && (
                    <div>
                      {page === formTiles.length - 1 && (
                        <button
                          onClick={handleSubmit}
                          className="text-white bg-secondary hover:bg-black px-[20px] py-[10px] rounded-[8px] font-[500] md:w-[207px] w-full ml-auto"
                        >
                          Submit
                        </button>
                      )}
                      {page !== formTiles.length - 1 && (
                        <button
                          onClick={handleNext}
                          className="text-white bg-secondary hover:bg-black px-[20px] py-[10px] rounded-[8px] font-[500] md:w-[207px] w-full ml-auto"
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sending === true ? (
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
                className="text-white flex justify-center  text-[20px] font-bold"
                fill="#fff"
                x="5"
                y="45"
              >
                Loading...
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {successText === true ? (
        <div
          className="fixed message w-full h-full"
          style={{
            background: "#0008",
            color: "white",
            top: 0,
            left: 0,
            zIndex: 50,
          }}
        >
          <div className="md:w-[756px] w-[90%]   bg-white md:rounded-[24px] rounded-[8px] py-[24px] md:py-[32px]">
            <div
              onClick={() => setSuccessText(!successText)}
              className="flex justify-end md:mx-[6%] mx-[6%]"
            >
              <MdOutlineClose className="text-black text-[25px]" />
            </div>
            <h4 className="text-[24px] leading-[32px] font-[600] text-center text-black mt-[40px] md:text-[36px] md:font-[500px] md:leading-[44px] md:mt-[70px] md:mx-[16%] mx-[6%]">
              Thank you for taking the clarity assessment. Your score has been
              sent to your email’
            </h4>
            <div className="flex justify-center md:mt-[60px] mt-[50px] md:mx-[8%] mx-[6%]">
              <Link to="/">
                <button
                  onClick={() => setSuccessText(!successText)}
                  className="bg-secondary hover:bg-black text-white px-[18px] py-[10px] rounded-[8px] text-[16px] font-[500]  w-full md:w-[207px] mx-auto"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
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

export default Assessment;

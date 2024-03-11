import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic3 from "../assets/pic3.png";
import pic2 from "../assets/pic2.png";
import pic5 from "../assets/pic5.png";
import pic7 from "../assets/pic7.png";
import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import test5 from "../assets/test5.png";
import quote from "../assets/quote.png";
import angle from "../assets/angle.png";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { MdOutlineClose } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    image: test5,
    text: "The coaching program was very impactful. Dr. Bimbo was very practical during our sessions, and I was able to connect with her teachings.",
    name: "Adebayo Adetola",
  },
  {
    id: 2,
    image: test1,
    text: "I am very grateful to Dr. Bimbo for showing me the four levels of consciousness and how the area of my life can be at any of these levels. She taught me how to grow better and I have started practicing some of the lessons learnt during the coaching program which has improved my life.",
    name: "Adeniji Adedapo Bolaji",
  },
  {
    id: 3,
    image: test2,
    text: "The coaching program was really for me because I needed to kick start my year on a greater note and being coached by Dr. Bimbo helped me achieve this. Dr Bimbo is super impressive in how she makes seemingly difficult task so simple and makes us have that feel of anything at all can be achievable. I am deeply grateful and to the amazing team that made this seamless, God bless you!",
    name: "Abimbola Galaxy",
  },
  {
    id: 4,
    image: test3,
    text: "When I signed up for coaching program with Dr. Bimbo, I was initially hesitant aboutgoing over the past and becoming vulnerable. However, the coaching was quite helpful for me. The coaching sessions for me were about discovering and becoming more conscious of who I am and being more aware of my unique identity rather than being defined by past circumstances and events. The coaching program was worth every minute for me.",
    name: "Tare Amangele",
  },
  {
    id: 5,
    image: test4,
    text: "I have learnt about the different levels of consciousness and how to relate it to rate each aspect of my life. The lessons have been very helpful for me as I start my 2024. ",
    name: "Obe Adedoyin",
  },
];

const Home = ({
  showAssessment,
  setShowAssessment,
  getInTouch,
  setGetInTouch,
  bookAnEvent,
  setBookAnEvent,
}) => {
  const [active, setActive] = useState(0);
  const [popup1, setPopup1] = useState(false);

  function handleScroll1() {
    const scrollPosition = window.scrollY;
    const tolerance = 10;
    if (
      scrollPosition >= 2000 - tolerance &&
      scrollPosition <= 2000 + tolerance
    ) {
      setPopup1(true);
      window.removeEventListener("scroll", handleScroll1);
    }
  }

  // const [popup2, setPopup2] = useState(false);

  // function handleScroll2() {
  //   const scrollPosition = window.scrollY;
  //   const tolerance = 10;
  //   if (
  //     scrollPosition >= 3000 - tolerance &&
  //     scrollPosition <= 3000 + tolerance
  //   ) {
  //     setPopup2(true);
  //     window.removeEventListener("scroll", handleScroll2);
  //   }
  // }

  // const [popup3, setPopup3] = useState(false);

  // function handleScroll3() {
  //   const scrollPosition = window.scrollY;
  //   const tolerance = 10;
  //   if (
  //     scrollPosition >= 5000 - tolerance &&
  //     scrollPosition <= 5000 + tolerance
  //   ) {
  //     setPopup3(true);
  //     window.removeEventListener("scroll", handleScroll3);
  //   }
  // }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    // window.addEventListener("scroll", handleScroll2);
    // window.addEventListener("scroll", handleScroll3);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
      // window.removeEventListener("scroll", handleScroll2);
      // window.removeEventListener("scroll", handleScroll3);
    };
  }, []);
  const Menus = [
    {
      name: "Vision",
      dis: "translate-x-0",
      width: "w-[20px]",
      font: "font-semibold",
    },
    {
      name: "Mission",
      dis: "translate-x-[10px]",
      width: "w-[78px]",
      font: "font-semibold",
      show: "block",
    },
  ];

  const middleIndex = Math.floor(testimonials.length / 2);
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[middleIndex]
  );
  const [slideOffset, setSlideOffset] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const index = testimonials.findIndex(
      (t) => t.id === selectedTestimonial.id
    );

    const imageWidth = 80;
    const selectedImageWidth = 550;
    const gap = 50;

    let totalWidthBeforeSelected = 0;
    for (let i = 0; i < index; i++) {
      totalWidthBeforeSelected += imageWidth + gap;
    }

    const containerWidth = containerRef.current.offsetWidth;

    const offset =
      totalWidthBeforeSelected + (selectedImageWidth - containerWidth) / 2;

    setSlideOffset(-offset);
  }, [selectedTestimonial, testimonials]);

  useEffect(() => {
    // setPopup1(popup1);
    // setPopup2(popup2);
    // setPopup2(popup3);
    setShowAssessment(showAssessment);
    if (popup1 || showAssessment) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [popup1, showAssessment]);

  return (
    <div>
      <ScrollToTopOnMount />
      <div
        className={`bg-no-repeat z-10 -mt-[70px] w-full bg-cover bg-center h-screen  relative`}
        style={{
          backgroundImage: `url(${pic3})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backdropFilter: "",
        }}
      >
        <div className="absolute right-[4%] xl:right-[60px] 2xl:right-[12%] bottom-[60px] md:bottom-[120px]">
          <h4 className="text-[36px] xl:text-[48px] xl:leading-[60px] text-white font-[600] leading-[44px] text-end">
            Bimbo Mesele <br></br>Coaching Company
          </h4>
          <h4 className="text-[18px] font-[500] text-white text-end leading-[28px] mt-[30px]">
            …clarity redefining outcomes…
          </h4>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <ul className="flex relative justify-between items-center text-[24px] font-[400] text-[#021732] rounded-[50px] bg-gray-100 w-fit mx-auto ">
          {Menus.map((menu, i) => (
            <li key={i} className="">
              <h4
                className={`cursor-pointer px-[24px] duration-500  ${
                  Menus[active].dis
                } ${
                  i === active &&
                  "text-white text-[24px] font-[400] bg-[#021732] py-[8px] px-[24px] rounded-[50px]"
                }`}
                onClick={() => setActive(i)}
              >
                {menu.name}
              </h4>
            </li>
          ))}
        </ul>

        <div className={` overflow-x-auto mt-[20px] `}>
          {Menus[active].name === "Vision" && (
            <div className="w-full">
              <h4 className="text-center text-[24px] font-[700] xl:text-[48px] xl:font-[600] xl:leading-[60px] leading-[32px] mt-[60px] md:w-[75%] mx-auto ">
                <span className="text-primary">Certainly!</span> Life
                development courses can cover a wide range of topics to help
                individuals enhance their personal and professional growth.
              </h4>
            </div>
          )}
          {Menus[active].name === "Mission" && (
            <div className="w-full">
              <h4 className="text-center text-[24px] font-[700] xl:text-[48px] xl:font-[600] xl:leading-[60px] leading-[32px] mt-[60px] md:w-[75%] mx-auto ">
                <span className="text-primary">Certainly!</span> Life
                development courses can cover a wide range of topics to help
                individuals enhance their personal and professional growth.
              </h4>
            </div>
          )}
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]  mt-[50px]">
        <h4 className="text-center text-[36px] font-[700] leading-[44px] xl:font-[600] xl:text-[48px] xl:leading-[60px]">
          Courses
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px]">
          <div className="lg:pb-[70%] pb-[120%] pr-[24px] relative overflow-hidden ">
            <img
              className="rounded-[16px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
              src={home2}
              alt="Background"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-[16px]"></div>
            <div className="absolute bottom-[24px] left-1/2  transform -translate-x-1/2  w-full">
              <div className=" px-[24px]">
                <h4 className="text-white text-[36px] leading-[44px] font-[600] mb-[10px]">
                  Gaining Mastery
                </h4>
                <h4 className="text-white text-[16px] leading-[24px] font-[400] mb-[30px] lg:w-[75%]">
                  Certainly! Life development courses can cover a wide range of
                  topics to help individuals enhance their personal and
                  professional growth.
                </h4>
                <button className="w-full md:w-fit py-[12px] px-[20px] rounded-[8px]  bg-primary text-white text-[16px] font-[500] hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pb-[70%] pb-[120%] pr-[24px] relative overflow-hidden ">
            <img
              className="rounded-[16px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
              src={home2}
              alt="Background"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-[16px]"></div>
            <div className="absolute bottom-[24px] left-1/2  transform -translate-x-1/2  w-full">
              <div className=" px-[24px]">
                <h4 className="text-white text-[36px] leading-[44px] font-[600] mb-[10px]">
                  Discovering the New You
                </h4>
                <h4 className="text-white text-[16px] leading-[24px] font-[400] mb-[30px] lg:w-[75%]">
                  Certainly! Life development courses can cover a wide range of
                  topics to help individuals enhance their personal and
                  professional growth.
                </h4>
                <button className="w-full md:w-fit py-[12px] px-[20px] rounded-[8px]  bg-primary text-white text-[16px] font-[500] hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%] ">
        <div className="bg-[#FFF8E6] rounded-[16px] px-[24px]  ">
          <div className="md:w-[64%] h-[560px] md:h-[512px] flex flex-col justify-center mx-auto">
            <h4 className="text-black text-[30px] leading-[38px] font-[600] mb-[10px] text-center xl:text-[48px] xl:font-[700] xl:leading-[60px] ">
              Still not sure which course is right for you?
            </h4>
            <h4 className="text-black text-[16px] leading-[24px] font-[500] mb-[30px] lg:w-[75%] text-center xl:text-[18px] xl:leading-[28px] mx-auto md:mt-[10px]">
              Certainly! Life development courses can cover a wide range of
              topics to help individuals enhance their personal and professional
              growth.
            </h4>
            <button
              onClick={() => {
                setShowAssessment(!showAssessment);
              }}
              className="w-full md:w-[300px] md:mx-auto py-[12px] px-[20px] rounded-[8px]  bg-primary text-white text-[16px] font-[500] hover:bg-orange-600"
            >
              Take the clarity assessment test
            </button>
          </div>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="flex justify-between items-end border-b-[1px] border-gray-200 pb-[20px]">
          <h4 className="text-[36px] font-[500] leading-[44px]">
            Upcoming events
          </h4>
          <Link to="/calendar">
            <button className="text-[16px] font-[400] text-primary whitespace-nowrap">
              See full calendar
            </button>
          </Link>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-[20px] gap-[20px]">
          <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
            <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
              Thrive Conference - Dominion
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
              Kings Hub 10 Bush Street Anthony, Maryland, Lagos
            </h4>
          </div>
          <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
            {" "}
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              3/02/2024
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              10AM
            </h4>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-[20px] gap-[20px]">
          <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
            <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
              Thrive Conference - Dominion
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
              Kings Hub 10 Bush Street Anthony, Maryland, Lagos
            </h4>
          </div>
          <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
            {" "}
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              3/02/2024
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              10AM
            </h4>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-[20px] gap-[20px]">
          <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
            <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
              Thrive Conference - Dominion
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
              Kings Hub 10 Bush Street Anthony, Maryland, Lagos
            </h4>
          </div>
          <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
            {" "}
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              3/02/2024
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              10AM
            </h4>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-[20px] gap-[20px]">
          <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
            <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
              Thrive Conference - Dominion
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
              Kings Hub 10 Bush Street Anthony, Maryland, Lagos
            </h4>
          </div>
          <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
            {" "}
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              3/02/2024
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              10AM
            </h4>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-[20px] gap-[20px]">
          <div className="w-[60%]  xl:flex xl:w-[70%] xl:gap-[20px]">
            <h4 className="text-[16px] font-[600] leading-[24px] xl:w-[45%]">
              Thrive Conference - Dominion
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] xl:w-[55%]">
              Kings Hub 10 Bush Street Anthony, Maryland, Lagos
            </h4>
          </div>
          <div className=" xl:w-[30%] xl:flex xl:gap-[20px]">
            {" "}
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              3/02/2024
            </h4>
            <h4 className="text-[16px] font-[400] leading-[24px] text-[#556476] text-end xl:w-[50%]">
              10AM
            </h4>
          </div>
        </div>
      </div>

      <div className="py-[48px] ">
        <h4 className="px-[10px] xl:px-[60px] text-[36px] font-[700]  text-center">
          Transformation stories
        </h4>
        <div className="flex justify-center mt-[80px]">
          <img className="w-[31px]" src={quote} />
        </div>
        <div className="flex justify-center mt-[40px]">
          <div className="relative overflow-hidden  ">
            <div className="text-center flex justify-center">
              <h4 className="transition-opacity duration-500 w-[85%] md:w-[55%] text-[16px] xl:text-[20px] leading-[23.4px] pb-[40px] border-b-[1px] border-gray-200">
                {selectedTestimonial.text}
              </h4>
            </div>
            <div className="flex justify-center mb-[40px]">
              <img className="w-[28px]" src={angle} />
            </div>
            <div
              className="flex transition-transform duration-500 gap-[50px] items-end justify-center mx-auto lg:w-[1080px] md:w-[1020px] sm:w-[870px] w-[750px]"
              ref={containerRef}
              style={{ transform: `translateX(${slideOffset}px)` }}
            >
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className={` cursor-pointer transition-opacity duration-500 ease-in-out ${
                    selectedTestimonial.id === testimonial.id
                      ? "border-[3px] border-primary  w-[120px] h-[120px] rounded-full object-cover"
                      : " w-[80px] h-[80px] object-cover rounded-full"
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-[20px]">
              <p className="transition-opacity duration-500 font-[500] text-[18px] leading-[28px] ">
                {selectedTestimonial.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="flex justify-between items-end border-b-[1px] border-gray-200 pb-[10px]">
          <h4 className="text-[36px] font-[600] leading-[44px]">
            Recent blog posts
          </h4>
          <button className="text-[16px] font-[400] text-primary whitespace-nowrap">
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[15px] gap-y-[40px] pt-[40px]">
          <div>
            <div className="lg:pb-[70%] pb-[120%] pr-[24px] relative overflow-hidden ">
              <img
                className="rounded-[8px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={home2}
                alt="Background"
              />
            </div>
            <h4 className="text-[24px] font-[600] mt-[20px]">
              Gaining Mastery
            </h4>
            <h4 className="text-[20px] font-[400] leading-[23px] mt-[20px] ">
              Ride the wave of success with, as it empowers you to gain the
              upper hand in.
            </h4>
            <h4 className="text-[16px] font-[400] mt-[20px] text-primary">
              Read more
            </h4>
          </div>
          <div>
            <div className="lg:pb-[70%] pb-[120%] pr-[24px] relative overflow-hidden ">
              <img
                className="rounded-[8px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={home2}
                alt="Background"
              />
            </div>
            <h4 className="text-[24px] font-[600] mt-[20px]">
              Gaining Mastery
            </h4>
            <h4 className="text-[20px] font-[400] leading-[23px] mt-[20px] ">
              Ride the wave of success with, as it empowers you to gain the
              upper hand in.
            </h4>
            <h4 className="text-[16px] font-[400] mt-[20px] text-primary">
              Read more
            </h4>
          </div>
          <div>
            <div className="lg:pb-[70%] pb-[120%] pr-[24px] relative overflow-hidden ">
              <img
                className="rounded-[8px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                src={home2}
                alt="Background"
              />
            </div>
            <h4 className="text-[24px] font-[600] mt-[20px]">
              Gaining Mastery
            </h4>
            <h4 className="text-[20px] font-[400] leading-[23px] mt-[20px] ">
              Ride the wave of success with, as it empowers you to gain the
              upper hand in.
            </h4>
            <h4 className="text-[16px] font-[400] mt-[20px] text-primary">
              Read more
            </h4>
          </div>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="lg:flex gap-[50px] items-center">
          <div className="lg:w-[42%]">
            <h4 className="text-[30px] font-[700] xl:text-[48px] xl:font-[600]">
              About Dr Bimbo
            </h4>
            <h4 className="text-[16px] font-[500] leading-[24px] text-[#556476] xl:mt-[20px] mt-[30px] xl:text-[20px]">
              I am Dr. Bimbo Mesele and I help leaders gain clarity about their
              lives' journey so that they can redefine their outcomes.{" "}
            </h4>
            <button className="bg-primary hover:bg-orange-600 rounded-[8px] px-[20px] py-[12px] text-white font-[500] w-full mt-[20px] xl:mt-[30px] md:w-fit">
              View more
            </button>
          </div>
          <div className="lg:w-[58%] gap-[8px] md:gap-[15px] flex mt-[40px] lg:mt-[0px]">
            <div className="w-[50%]">
              <div className="md:pb-[140%] pb-[160%]  pr-[24px] relative overflow-hidden ">
                <img
                  className="lg:rounded-[24px] rounded-[16px] absolute top-0 left-0 w-[100%] h-[100%] object-cover "
                  src={pic2}
                  alt="Background"
                />

                <div className="absolute bottom-[8px] lg:bottom-[40px] left-1/2  transform -translate-x-1/2  w-full">
                  <div className=" px-[20px] lg:px-[50px]">
                    <h4 className="text-white lg:text-primary lg:text-[36px] text-[20px] leading-[20px] font-[600] mb-[10px]">
                      Strategy
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] relative">
              <div className="md:pb-[280%] pb-[320%] pr-[24px] relative overflow-hidden">
                <img
                  className="lg:rounded-[24px] rounded-[16px] absolute top-0 left-0 w-[100%] h-[100%] object-cover"
                  src={pic5}
                  alt="Background"
                />
              </div>
              <div className="absolute bottom-[30px] md:bottom-[50px] w-[10px] h-[10px] md:right-[50px] right-[30px] transform translate-x-[50%] translate-y-[50%] -rotate-90">
                <h4 className="text-white lg:text-primary lg:text-[36px] text-[20px] leading-[20px] font-[600] whitespace-nowrap">
                  Leadership courses
                </h4>
              </div>
            </div>
            <div className="w-[25%] relative">
              <div className="md:pb-[280%] pb-[320%] pr-[24px] relative overflow-hidden">
                <img
                  className="lg:rounded-[24px] rounded-[16px] absolute top-0 left-0 w-[100%] h-[100%] object-cover"
                  src={pic7}
                  alt="Background"
                />
              </div>
              <div className="absolute bottom-[30px] md:bottom-[50px] w-[10px] h-[10px] md:right-[50px] right-[30px] transform translate-x-[50%] translate-y-[50%] -rotate-90">
                <h4 className="text-white lg:text-primary lg:text-[36px] text-[20px] leading-[20px] font-[600] whitespace-nowrap">
                  Personal Growth
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[48px] px-[4%] xl:px-[60px] 2xl:px-[15%]">
        <div className="lg:flex gap-[40px]">
          <div className="lg:w-[60%] bg-[#02152E] rounded-[24px] h-[416px] relative">
            <Link to="/calendly">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                <FiArrowUp className="text-[30px] stroke-[1px] text-primary transform rotate-45" />
              </button>
            </Link>
            <h4 className="text-white text-[36px] lg:text-[48px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px] pr-[24px] lg:pr-[48px]">
              Schedule a one on one{" "}
            </h4>
          </div>
          <div className="lg:w-[40%] bg-[#FEEFE6] rounded-[24px] h-[416px] relative mt-[40px] lg:mt-[0px]">
            <button
              onClick={() => {
                setBookAnEvent(!bookAnEvent);
              }}
              className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]"
            >
              {" "}
              <FiArrowUp className="text-[30px] stroke-[1px] text-[#021732] transform rotate-45" />
            </button>
            <h4 className="text-[#040F16] text-[36px] lg:text-[48px] lg:leading-[60px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] pr-[24px] lg:left-[48px] lg:pr-[48px]">
              Book Bimbo Mesele for an event
            </h4>
          </div>
        </div>
      </div>

      {popup1 === true ? (
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
          <div className="md:w-[806px] w-[95%]   bg-[#FEEFE6]  rounded-[16px] py-[24px] ">
            <div
              onClick={() => setPopup1(!popup1)}
              className="flex justify-end md:mx-[3%] mx-[24px]"
            >
              <MdOutlineClose className="text-black text-[25px] cursor-pointer" />
            </div>
            <h4 className="text-[30px] leading-[38px] md:text-[36px] font-[600] text-secondary mt-[40px] text-center mx-[24px] md:leading-[44px]">
              Not sure what phase you are in your life's journey or how to
              navigate this season to the next?
            </h4>
            <h4 className="text-[16px] leading-[24px] md:text-[18px] font-[500] text-[#556476] mt-[20px] text-center mx-[24px] md:mx-[45px] md:leading-[28px]">
              Want to break the cycle of limiting beliefs or break the glass
              ceiling over you? Let's show you how. Begin by taking the Clarity
              Assessment.
            </h4>
            <div className="flex justify-center  mt-[20px] md:mx-[8%] mx-[6%] mb-[60px]">
              <button
                onClick={() => {
                  setPopup1(!popup1);
                  setShowAssessment(!showAssessment);
                }}
                className="bg-primary hover:bg-orange-600 text-white px-[18px] py-[10px] rounded-[8px] text-[16px] font-[500]  w-full md:w-[350px] mx-auto"
              >
                Take the clarity assessment test
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* {popup2 === true ? (
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
          <div className="md:w-[806px] w-[95%]   bg-[#FFF8E6]  rounded-[16px] py-[24px] ">
            <div
              onClick={() => setPopup2(!popup2)}
              className="flex justify-end md:mx-[3%] mx-[24px]"
            >
              <MdOutlineClose className="text-black text-[25px] cursor-pointer" />
            </div>
            <h4 className="text-[30px] leading-[38px] md:text-[36px] font-[600] text-secondary mt-[40px] text-center mx-[24px] md:leading-[44px]">
              Not happy about the outcomes you are getting and want to change
              them?
            </h4>
            <h4 className="text-[16px] leading-[24px] md:text-[18px] font-[500] text-[#556476] mt-[20px] text-center mx-[24px] md:mx-[45px] md:leading-[28px]">
              Not clear about your purpose and want to change that narrative?
              Let's show you how. Begin by taking the Clarity Assessment.
            </h4>
            <div className="flex justify-center  mt-[20px] md:mx-[8%] mx-[6%] mb-[60px]">
              <button
                onClick={() => {
                  setPopup2(!popup2);
                  setShowAssessment(!showAssessment);
                }}
                className="bg-primary hover:bg-orange-600 text-white px-[18px] py-[10px] rounded-[8px] text-[16px] font-[500]  w-full md:w-[350px] mx-auto"
              >
                Take the clarity assessment test
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}

      {/* {popup3 === true ? (
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
          <div className="md:w-[806px] w-[95%]   bg-[#EDF3EA]  rounded-[16px] py-[24px] ">
            <div
              onClick={() => setPopup3(!popup3)}
              className="flex justify-end md:mx-[3%] mx-[24px]"
            >
              <MdOutlineClose className="text-black text-[25px] cursor-pointer" />
            </div>
            <h4 className="text-[30px] leading-[38px] md:text-[36px] font-[600] text-secondary mt-[40px] text-center mx-[24px] md:leading-[44px]">
              Want to take over the steering wheel and chart your course towards
              success and significance but don't know how?
            </h4>
            <h4 className="text-[16px] leading-[24px] md:text-[18px] font-[500] text-[#556476] mt-[20px] text-center mx-[24px] md:mx-[45px] md:leading-[28px]">
              Let's show you how. Begin by taking the Clarity Assessment
            </h4>
            <div className="flex justify-center  mt-[20px] md:mx-[8%] mx-[6%] mb-[60px]">
              <button
                onClick={() => {
                  setPopup3(!popup3);
                  setShowAssessment(!showAssessment);
                }}
                className="bg-primary hover:bg-orange-600 text-white px-[18px] py-[10px] rounded-[8px] text-[16px] font-[500]  w-full md:w-[350px] mx-auto "
              >
                Take the clarity assessment test
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Home;

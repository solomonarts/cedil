// SliderWithThumbnails.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/thumbs"; // Thumbs module styles
import { bannerpics } from "../../Constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MailchimpForm from "../Sections/MailChimpForm";
import { Button, Modal } from "antd";

const BannerSlider = ({ setIsOpen }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const slides = [
    {
      id: 1,
      title:
        "Center for Development Innovations and Leadership (CEDIL) Global",
      explainer:
        "A registered international and Africa-based not-for-profit organization catalyzing systemic change in Africa communities and ubarn settings through innovative leadership development, skilling and rights-based health, economic, gender and climate justice programs for women, girls and youth",
      background: `${bannerpics["banner3.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
    {
      id: 2,
      title:
        "Enhancing Sustainable Systems Leadership and Local Solutions for Development",
      explainer:
        "Co-creating Development Solutions and Programming for Sustainable Systemic Change in Africa",
      background: `${bannerpics["banner2.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
    {
      id: 3,
      title:
        "Accelerating Transformative Mechanisms for Gender, Health, Economic and Climate Justice",
      explainer:
        "Accelerating Gendered and Equitable Afri-Economic Financing and Growth. Fostering Health and Climate Justice Programs",
      background: `${bannerpics["banner9.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
    {
      id: 4,
      title:
        "Fostering an Ecosystem of partnerships for Advancing Rights-Based Innovations and Development Models",
      explainer:
        "Promoting Innovations, Local Solutions, Skilling and Technology through Strategic Action Research, Implementation , Policy, Engagement and Evidence Generation",
      background: `${bannerpics["banner4.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
    {
      id: 5,
      title: "Advancing Institutional Capacity Strengthening",
      explainer:
        "Enhancing Competences and Organisational Development(OD) Practices for Nonprofits and Public Entities’ Excellence through direct support, technical assistance and strategic consultancy services",
      background: `${bannerpics["banner5.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
    {
      id: 6,
      title:
        "Offering Regional and Global space for Research and Leadership Development",
      explainer:
        "Strategic Research and Leadership Development , and Celebrating Non-profit and Philanthropic Excellence through Annual Convenings and Leadership Awards",
      background: `${bannerpics["banner7.jpg"]}`,
      cta1: "Donate",
      cta2: "Join Us",
    },
  ];

  return (
    <div id="home" className="banner-slider h-[80vh] lg:h-[70vh]">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs, Autoplay]} // Added Autoplay module here
        autoplay={{ delay: 8000, disableOnInteraction: false }} // Autoplay settings
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }} // Safe checking thumbsSwiper
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
              <div className="container mx-auto px-4 z-20">
                <div className="text-white max-w-lg">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.explainer}</p>
                  <div className="flex space-x-4">
                    <button
                      className="bg-[#9ed263] text-black px-6 py-2 rounded-md hover:bg-[#9ed263] transition-all"
                      onClick={() => setIsOpen(true)}
                    >
                      {slide.cta1}
                    </button>
                    <button
                      className="bg-transparent border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                      onClick={showModal}
                    >
                      {slide.cta2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="absolute top-1/2 left-5 z-30 -translate-y-1/2"
        >
          <button className="p-2 rounded-full flex justify-center w-10 h-auto aspect-square content-center bg-black bg-opacity-50 hover:bg-opacity-75 transition">
            <FaChevronLeft className="text-white m-auto" />
          </button>
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-5 z-30 -translate-y-1/2"
        >
          <button className="p-2 rounded-full flex justify-center w-10 h-auto aspect-square content-center bg-black bg-opacity-50 hover:bg-opacity-75 transition">
            <FaChevronRight className="text-white m-auto" />
          </button>
        </div>
      </Swiper>

      {/* Thumbnail Swiper */}
      {/* <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="w-full h-24 mt-6"
        watchSlidesProgress={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* Modal Component */}
      <Modal
        title="Join Us"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleClose}>
            Close
          </Button>,
        ]}
      >
        <p className="text-left mb-4 text-[16px]">
          Subscribe to our newsletter to discover more news, stories, and events
          about CEDIL Global.
        </p>
        {/* Mailchimp Form Component */}
        <MailchimpForm onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default BannerSlider;

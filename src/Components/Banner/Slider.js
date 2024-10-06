import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { bannerpics } from "../../Constants";
// import './BannerSlider.css'; // Custom CSS for styling the banner slider
import banner1 from "../../Assets/images/banner/banner1.jpg"

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="custom-dot">
        <img
          src={`${bannerpics[`banner${i + 1}.jpg`]}`}
          alt={`Slide ${i + 1}`}
        />
      </div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  const slides = [
    {
      id: 1,
      title:
        "Center for Development Innovations and Leadership (CEDIL) Global.",
      explainer:
        "A registered international and regional not-for-profit organization catalyzing systemic change across Africa through innovative and rights-based development models, technologies, and leadership development.",
      background: `${bannerpics["banner1.jpg"]}`,
    },
    {
      id: 2,
      title: "Enhancing Sustainable Systems Leadership.",
      explainer:
        "in Development Programming for Sustainable Development and Systemic Changes in Africa.",
      background: `${bannerpics["banner2.jpg"]}`,
    },
    {
      id: 3,
      title: "Accelerating Transformative Mechanisms",
      explainer:
        "Accelerating Gendered and Equitable Transformative Mechanisms in Afri-Economic Financing and Growth",
      background: `${bannerpics["banner3.jpg"]}`,
    },
    {
      id: 4,
      title: "Fostering Novel Rights-based Development Models",
      explainer:
        "Innovations, and Technology through Strategic Action Research Implementation , Policy, Engagement and Evidence Generation.",
      background: `${bannerpics["banner4.jpg"]}`,
    },
    {
      id: 5,
      title: "Advancing Institutional Capacity Strengthening",
      explainer:
        "Competences and Practices for Nonprofits and Public Entities’ Excellence through direct support, technical assistance and strategic consultancy services.",
      background: `${bannerpics["banner5.jpg"]}`,
    },
    {
      id: 6,
      title: "Offering Regional and Global space",
      explainer:
        "for Leadership Development and Celebrating Non-profit and Philanthropic Excellence through Annual Convenings and Leadership Awards.",
      background: `${bannerpics["banner6.jpg"]}`,
    },
  ];

  return (
    <div className="banner-slider h-[80vh] lg:h-[60vh]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="banner-slider__slide h-[70vh] lg:h-[55vh] flex flex-row justify-center content-center"
            style={{ backgroundImage: `url(${slide.background})`, backgroundColor:"red" }}
          >
            <div className="banner-slider__content pl-6 lg:pl-24">
              <h1>{slide.title}</h1>
              <p>{slide.explainer}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;

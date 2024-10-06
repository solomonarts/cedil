// components/Banner.js
import React, { useEffect, useState } from "react";
// import '../styles/custom.scss';
import { bannerpics, contentData } from "../../Constants";
import SectionWithPattern from "../Sections/SectionWithPattern";
import svgbg1 from "../../Assets/images/icons/circuit-svgrepo-com.svg";
import svgbg2 from "../../Assets/images/icons/tree-of-rectangles-foliage-svgrepo-com.svg";
import InteractiveDiagram from "../Diagrams/InteractiveDiagram";
import BannerSlider from "./Slider";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();

  // Scroll to section when the location hash changes
  useEffect(() => {
    console.log(location.hash.substring(1))
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // remove the "#" from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="banner-container">
      {/* Text Content */}
      {/* <div className="para-container">
        <div className="content">
          <h1 className="banner-title text-[30px] px-12 md:text-[2.5rem] md:px-14 lg:px-0">
            {contentData?.banner.title}
          </h1>
          <p className="banner-description text-[12px] px-14 md:text-[1rem] md:px-20 lg:px-2">
            {contentData?.banner.description}
          </p>
        </div> */}

      <BannerSlider />

      {/* Image with 3D parallax */}
      {/* <div className="image-container"> */}
      {/* Dark Green Tilted Background */}
      {/* <div className="tilted-background"></div> */}

      {/* Clipped Image */}
      {/* <div className="image-rectangle relative">
            <img
              src={bannerpics["banner2.jpg"]} // Replace with your image path
              alt="Technology Innovation"
              className="clipped-image"
            />
          </div>
        </div>
      </div> */}

      {/* Section 1 - Banner */}
      {contentData?.sections.map((secdata) => (
        <SectionWithPattern
          backgroundColor={secdata.background}
          textColor={secdata.textColor}
          element={secdata.element}
          svgbg={secdata.svgbg}
          side={secdata.patternPosition}
          title={secdata.title}
          content={secdata.description}
          page={secdata?.page}
        />
      ))}
    </div>
  );
};

export default Banner;

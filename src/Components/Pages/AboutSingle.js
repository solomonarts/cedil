import React from "react";
import ThematicAreas from "./ThemanticAreas";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TeamSection from "../Sections/Team";

// import './AboutUsPage.css'; // Import styles

const AboutUsSingle = () => {
  return (
    <div className="about-us-page">
      {/* Header Section */}
      <header className="about-us-header">
        <div className="overlay">
          <h1 className="page-title">
            {" "}
            <Link className="hover:text-[#9ed263]" to={`/`}>
              {" "}
              {`< `}Home
            </Link>{" "}
            | About Us
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-us-content px-5 md:px-32 lg:px-48">
        <p className="text-[16px]">
          CEDIL Global achieves its mandate through advancing strategic multi-country, city,
          regional, and continental programs that enhance systems strengthening,
          policy engagement, and institutional capacity enhancement for public
          and private entities in order to effectively respond to complex gender, health, economic and climate development
          challenges in Africa.
        </p>
        <div>
          <ThematicAreas />
        </div>
      </main>
    </div>
  );
};

export default AboutUsSingle;

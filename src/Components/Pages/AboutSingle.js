import React from "react";
import ThematicAreas from "./ThemanticAreas";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// import './AboutUsPage.css'; // Import styles

const AboutUsSingle = () => {
  return (
    <div className="about-us-page">
      {/* Header Section */}
      <header className="about-us-header">
        <div className="overlay">
          <h1 className="page-title"> <Link className="hover:text-[#9ed263]" to={`/`}> {`< `}Home</Link> | About Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-us-content px-5 md:px-32 lg:px-48">
        <p>
          The Centre of Excellence for Development Impact and Learning (CEDIL)
          was established to support the generation and use of evidence in
          decision-making to achieve long-term, sustainable development goals.
        </p>
        <div>
          < ThematicAreas />
        </div>
        {/* Additional content can go here */}
      </main>
    </div>
  );
};

export default AboutUsSingle;

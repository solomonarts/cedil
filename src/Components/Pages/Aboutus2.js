import React from "react";
// import './AboutUs.css'; // Import styles

const AboutUs = () => {
  return (
    <div className="about-us-container px-4 xl:px-40">
      <div className="flex flex-col lg:flex-row justify-between content-center gap-10">
        {/* <div className="column"></div> */}

        <div className="column lg:px-0 mx-auto w-full">
          <div className="title-box bg-[#053744]">Our Vision</div>
          <div className="wavy-line h-1 rotate-90">
            <svg height="12.5" width="25" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="12.5" r="1.3" fill="#9ed263" />
              <path
                d="M 5 12.5 Q 15 2.5, 25 12.5 T 45 12.5"
                stroke="#9ed263"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="47.5,11 50,12.5 47.5,14" fill="#9ed263" />
            </svg>
          </div>
          <p className="description bg-[#05374413] h-full text-left">
            To be the leading catalyst of systemic rights-based development
            change that embraces leadership for gender, health, climate and
            economic justice for all across Africa
          </p>
        </div>

        <div className="column lg:px-0 mx-auto w-full">
          <div className="title-box bg-[#053744]">Our Mission</div>
          <div className="wavy-line h-1 rotate-90">
            <svg height="12.5" width="25" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="12.5" r="1.3" fill="#9ed263" />
              <path
                d="M 5 12.5 Q 15 2.5, 25 12.5 T 45 12.5"
                stroke="#9ed263"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="47.5,11 50,12.5 47.5,14" fill="#9ed263" />
            </svg>
          </div>
          <p className="description bg-[#05374413] h-full text-left">
            To foster innovative, locally driven collaboratives and solutions in
            Africa that address the continent's health, gender, economic and
            climate development challenges through strategic partnerships , grantmaning,
            institutional capacity strengthening, research and innovation, and
            systems leadership development.
          </p>
        </div>
        <div className="column lg:px-0 mx-auto w-full">
          <div className="title-box bg-[#053744]">Our Values</div>
          <div className="wavy-line h-1 rotate-90">
            <svg height="12.5" width="25" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="12.5" r="1.3" fill="#9ed263" />
              <path
                d="M 5 12.5 Q 15 2.5, 25 12.5 T 45 12.5"
                stroke="#9ed263"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="47.5,11 50,12.5 47.5,14" fill="#9ed263" />
            </svg>
          </div>
          <p className="description bg-[#05374413] h-full text-left">
            At CEDIL Global we are committed to transparency, accountability ,
            collectivism, mutual respect and integrity. We recognize and respect
            diverse groups of individuals and their locally-owned experiences
            that foster systemic change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

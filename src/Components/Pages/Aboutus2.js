import React from "react";
// import './AboutUs.css'; // Import styles

const AboutUs = () => {
  return (
    <div className="about-us-container px-4 md:px-40">
      <div className="flex flex-col md:flex-row justify-between content-center gap-10">
        <div className="column"></div>

        <div className="column w-full">
          <div className="title-box">Our Vision</div>
          <div className="wavy-line h-6 rotate-90">
            <svg height="25" width="50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div>
          <p className="description">
            To be the leading catalyst of systemic rights-based development
            change that embraces gender, health, climate and economic justice
            for all across Africa.
          </p>
        </div>

        <div className="column w-full">
          <div className="title-box">Our Mission</div>
          <div className="wavy-line h-6 rotate-90">
            <svg height="25" width="50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div>
          <p className="description">
            To foster innovative, locally driven solutions in Africa that
            address the continent's development challenges through strategic
            collaborations, institutional capacity strengthening, research and
            innovation, and systems leadership development.
          </p>
        </div>
        <div className="column w-full">
          <div className="title-box">Our Values</div>
          <div className="wavy-line h-6 rotate-90">
            <svg height="25" width="50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div>
          <p className="description">
            At CEDIL Global we are committed to transparency, accountability ,
            collectivism, mutual respect and integrity. We recognize and respect
            diverse groups of individuals and their locally-owned experiences
            that foster systemic change.
          </p>
        </div>
      </div>

      <div className="grid md:flex justify-evenly pt-5">
        <div className="title-box w-full md:w-1/5 content-center">
          What We Do
        </div>
        <div className="wavy-line w-1/5 rotate-90 md:rotate-0 justify-center m-auto">
          <svg height="25" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="25" r="3" fill="black" />
            <path
              d="M 10 25 Q 30 5, 50 25 T 90 25"
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
            <polygon points="95,22 100,25 95,28" fill="black" />
          </svg>
        </div>
        <div className="grid w-4/5 m-auto gap-4">
          <p className="description">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We promote locally-owned development and globally tested and
            acceptable accountability mechanisms that reduce financing wastage
            in development institutional systems.
          </p>
          <p className="description">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We increase access to flexible development funding through
            institutional resource mobilization and fundraising support, and
            direct grants management.
          </p>
          <p className="description">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We provide institutional capacity strengthening support, technical
            assistance and consultacy services for institutions on the African
            continent.
          </p>
          <p className="description">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We foster regional and global partnerships and collaborations that
            accelerate widespread actions for systemic change at national,
            regional, and continental levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
// import './AboutUs.css'; // Import styles

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-48 gap-5">
      <div className="flex justify-center pt-5">
        <div className="title-box w-full content-center">
          The CLEAR Framework
        </div>
        {/* <div className="wavy-line w-1/5 rotate-90 md:rotate-0">
          <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="25" r="3" fill="black" />
            <path
              d="M 10 25 Q 30 5, 50 25 T 90 25"
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
            <polygon points="95,22 100,25 95,28" fill="black" />
          </svg>
        </div> */}
      </div>
      <div className="grid">
        <div className="my-2">
          <p className="bg-white text-[#2f4f2f] text-left">
            Through a well researched CLEAR framework for Leading Systems
            Change, CEDIL Global applies the five key elements of the systems
            change process in its strategic programming, budgeting and
            implementation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between content-center gap-10 mt-5">
          <div className="column w-full">
            <div className="title-box">
              <span className="font-extrabold text-[#2f4f2f]">C</span>
              onvene and Commit
            </div>
            {/* <div className="wavy-line rotate-90">
            <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div> */}
            <p className="description">
              {/* We engage stakeholders to collaboratively identify complex  shared goals. */}
              We facilitate convenings for stakeholder engagement in identifying
              and responding to complex development problems through agreed
              shared interests an commitment to systemic change goals.
            </p>
          </div>

          <div className="column w-full">
            <div className="title-box">
              <span className="font-extrabold text-[#2f4f2f]">L</span>
              ook and Learn
            </div>
            {/* <div className="wavy-line rotate-90">
            <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div> */}
            <p className="description">
              {/* Stakeholders map systems, uncovering the dynamics and influences
              within. */}
              We work with our partners to undertake systems mapping for
              exploring the dynamics, components, actors and influences that are
              responsible for systems failure. We identify the most effective,
              collective and iterative strategies built into knowledge sharing
              and development, and opportunities for action.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between content-center gap-10 mt-5">
          <div className="column w-full">
            <div className="title-box">
              {" "}
              <span className="font-extrabold text-[#2f4f2f]">E</span>
              ngage and Energize
            </div>
            {/* <div className="wavy-line rotate-90">
            <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div> */}
            <p className="description">
              We build and maintain stakeholder engagement in a longterm systems
              change process through open and continous communication to build
              trust, commitment, and ethusiasm that fosters pooling of resources
              and capabilities in new and innovative ways.
            </p>
          </div>

          <div className="column w-full">
            <div className="title-box">
              <span className="font-extrabold text-[#2f4f2f]">A</span>
              ct with Accountability
            </div>
            {/* <div className="wavy-line rotate-90">
            <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div> */}
            <p className="description">
              We galvanize multi-stakeholder leadership, commitment,
              accountability and self-directed actions guided by clearly defined
              strategic vision and clear goals for addressing a complex
              development challenge through systems change.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between content-center gap-10 mt-5">
          <div className="column w-full">
            <div className="title-box">
              <span className="font-extrabold text-[#2f4f2f]">R</span>
              eview and Revise
            </div>
            {/* <div className="wavy-line rotate-90">
            <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="25" r="3" fill="black" />
              <path
                d="M 10 25 Q 30 5, 50 25 T 90 25"
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon points="95,22 100,25 95,28" fill="black" />
            </svg>
          </div> */}
            <p className="description">
              {/* CEDIL Global embraces adaptive experimentation and constant
              learning. */}
              We believe that systems change is an ever-evolving process of
              adaptive experimentation, learning, growth and change and
              therefore, we work wiith our partners and stakeholders to embrace
              these dynamics with agile, flexible, innovative and
              learning-centred approach. We foster strategies for setting clear
              goals and measurement frameworks at the start of any initiative to
              guide continous monitoring, evaluation, progress reporting and
              sharing experiences and models of excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

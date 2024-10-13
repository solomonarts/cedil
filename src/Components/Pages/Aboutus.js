import React from "react";
// import themanticpg from "../../Assets/images/banner/banner3.jpg";

const Aboutus3 = () => {
  return (
    <div className="about-us-container px-4 py-10 xl:px-40">
      <div className="grid justify-evenly pt-5">
        <div className="title-box w-full xl:w-1/5 mb-10 content-center bg-[#053744] text-white">
          What We Do
        </div>

        <div className="flex flex-col xl:flex-row w-full m-auto gap-4">
          <p className="description bg-[#05374413] text-left relative">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We promote locally-owned development solutions and globally tested
            accountability mechanisms that accelerate impact for development
            institutional systems advancing health, gender, economic and climate
            Justice.
          </p>
          <p className="description bg-[#05374413] text-left relative">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We increase access to flexible development funding through
            institutional resource mobilization and fundraising support, and
            direct grants management.
          </p>
          <p className="description bg-[#05374413] text-left relative">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We provide institutional capacity strengthening support, technical
            assistance and consultacy services for institutions on the African
            continent.
          </p>
          <p className="description bg-[#05374413] text-left relative">
            {/* By using innovative methodologies, CEDIL ensures that programs are
            evidence-based, scalable, and impactful for sustainable development. */}
            We foster strategic collaboratives, and partnerships that accelerate
            widespread actions for advancing systemic change in health, gender,
            economic and climate justice at national, regional, and Africa
            continental levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus3;

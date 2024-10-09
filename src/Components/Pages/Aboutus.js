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
            We promote locally-owned development and globally tested and
            acceptable accountability mechanisms that reduce financing wastage
            in development institutional systems.
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
            We foster regional and global partnerships and collaborations that
            accelerate widespread actions for systemic change at national,
            regional, and continental levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus3;

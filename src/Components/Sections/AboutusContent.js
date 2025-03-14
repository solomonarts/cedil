// // components/AboutUsContent.jsx
// import React from 'react';
// import { Card } from 'antd';

// const AboutUsContent = () => (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <Card title="Our Vision">
//             To be the leading catalyst of systemic rights-based development change that embraces leadership for gender, health, climate, and economic justice for all across Africa.
//         </Card>
//         <Card title="Our Mission">
//             To foster innovative, locally driven collaboratives and solutions in Africa that address the continent's health, gender, economic and climate development challenges.
//         </Card>
//         <Card title="Our Values">
//             At CEDIL Global, we are committed to transparency, accountability, collectivism, mutual respect, and integrity.
//         </Card>
//         <Card title="What We Do">
//             We promote locally-owned development solutions and globally tested accountability mechanisms that accelerate impact for advancing health, gender, economic and climate justice.
//         </Card>
//     </div>
// );

// export default AboutUsContent;

// components/AboutUsContent.jsx
import React from "react";

const AboutUsContent = () => (
  <section className="mx-auto max-w-7xl">
    {/* Vision, Mission, Values Section */}
    <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {/* Vision */}
      <div className="p-2 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg text-center text-white bg-[#053744] py-2 rounded">
          Our Vision
        </h2>
        <p className="text-gray-700 mt-4 text-[16px] bg-[#05374413]">
          To be the leading catalyst of systemic rights-based development change
          that embraces leadership for gender, health, climate and economic
          justice for all across Africa
        </p>
      </div>
      {/* Mission */}
      <div className="p-2 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg text-center text-white bg-[#053744] py-2 rounded">
          Our Mission
        </h2>
        <p className="text-gray-700 mt-4 text-[16px] bg-[#05374413]">
          To foster innovative, locally driven collaboratives and solutions in
          Africa that address the continent's health, gender, economic and
          climate development challenges through strategic partnerships,
          grantmaking, institutional capacity strengthening, research, skilling
          and innovation, and systems leadership development.
        </p>
      </div>
      {/* Values */}
      <div className="p-2 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg text-center text-white bg-[#053744] py-2 rounded">
          Our Values
        </h2>
        <p className="text-gray-700 mt-4 text-[16px] bg-[#05374413]">
          At CEDIL Global we are committed to transparency, accountability ,
          collectivism, mutual respect and integrity. We recognize and respect
          diverse groups of individuals and their locally-owned experiences that
          foster systemic change.
        </p>
      </div>
    </div>

    {/* What We Do Section */}
    <div className="p-2 mb-8 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg text-center text-white bg-[#053744] py-2 rounded">
        What We Do
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <p className="text-gray-700 text-[16px] bg-[#05374413]">
          We promote locally-owned development solutions and globally tested
          accountability mechanisms that accelerate impact for development
          institutional systems advancing health, gender, economic and climate
          Justice.
        </p>
        <p className="text-gray-700 text-[16px] bg-[#05374413]">
          We increase access to flexible development funding through
          institutional resource mobilization and fundraising support, and
          direct grants management.
        </p>
        <p className="text-gray-700 text-[16px] bg-[#05374413]">
          We provide institutional capacity strengthening support, technical
          assistance and consultacy services for institutions on the African
          continent.
        </p>
        <p className="text-gray-700 text-[16px] bg-[#05374413]">
          We foster strategic collaboratives, and partnerships that accelerate
          widespread actions for advancing systemic change in health, gender,
          economic and climate justice at national, regional, and Africa
          continental levels.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsContent;

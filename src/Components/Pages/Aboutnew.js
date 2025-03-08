import React from "react";
import { FaArrowDown } from "react-icons/fa";
import leadersData from "../../Constants";

const AboutNew = () => {
  return (
    <div className="p-6 mx-auto max-w-7xl md:p-10">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <nav className="p-5 bg-gray-100 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="font-semibold text-left p-2 hover:bg-[#05374413] cursor-pointer">
                About Us
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="flex items-start justify-between font-semibold cursor-pointer p-2 hover:bg-[#05374413]">
                    Leadership
                    <span className="transition-transform group-open:rotate-180">
                      <FaArrowDown />
                    </span>
                  </summary>
                  <ul className="pl-4 mt-2 space-y-2 text-sm text-left">
                    {leadersData.map((leader) => (
                      <li>
                        <a
                          href={`/leadership`}
                          className="hover:text-green-600"
                        >
                          {leader.role}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
        </div>

        {/* Content Section */}
        <div className="space-y-6 md:col-span-3">
          {/* Vision, Mission, Values */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Vision",
                text: "To be the leading catalyst of systemic rights-based development change that embraces leadership for gender, health, climate and economic justice for all across Africa.",
              },
              {
                title: "Our Mission",
                text: "To foster innovative, locally driven collaboratives and solutions in Africa that address the continent's health, gender, economic and climate development challenges through strategic partnerships, grantmaking, institutional capacity strengthening, research, skilling and innovation, and systems leadership development.",
              },
              {
                title: "Our Values",
                text: "At CEDIL Global, we are committed to transparency, accountability, collectivism, mutual respect, and integrity. We recognize and respect diverse groups of individuals and their locally-owned experiences that foster systemic change.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-t-lg shadow-md"
              >
                <div className="p-3 font-semibold text-center text-white bg-[#053744]">
                  {item.title}
                </div>
                <p className="p-4 text-gray-700 bg-[#05374413] text-[16px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* What We Do */}
          <div>
            <div className="p-3 font-semibold text-center text-white bg-[#053744] rounded-t-lg">
              What We Do
            </div>
            <div className="grid gap-6 p-4 bg-white rounded-b-lg shadow-md md:grid-cols-4">
              {[
                "We promote locally-owned development solutions and globally tested accountability mechanisms that accelerate impact for development institutional systems advancing health, gender, economic and climate justice.",
                "We increase access to flexible development funding through institutional resource mobilization and fundraising support, and direct grants management.",
                "We provide institutional capacity strengthening support, technical assistance and consultancy services for institutions on the African continent.",
                "We foster strategic collaboratives, and partnerships that accelerate widespread actions for advancing systemic change in health, gender, economic and climate justice at national, regional, and Africa continental levels.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-b-lg shadow-sm"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNew;

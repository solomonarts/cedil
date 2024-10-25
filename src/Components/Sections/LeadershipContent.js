// components/LeadershipContent.jsx
import React, { useEffect } from "react";
// import TeamComponent from './TeamComponent';  // Placeholder for actual team component
import TeamSection from "./Team";
import { FaList } from "react-icons/fa6";

const LeadershipContent = ({ selectedSubMenu }) => {
  useEffect(() => {
    console.log(selectedSubMenu);
  }, []);
  const renderLeadershipSection = () => {
    switch (selectedSubMenu) {
      case "Senior Leadership":
        return <TeamSection level="Senior Leadership" />;
      case "International Advisory Board":
        return <TeamSection level="International Advisory Board" />;
      case "Innovation and Research Fellows":
        return <TeamSection level="Innovation and Research Fellows" />;
      case "Issue-Based Working Groups":
        return <TeamSection level="Issue-Based Working Groups" />;
      case "Careers and Fellowships":
        return (
          <div className="flex flex-col gap-5 justify-center h-[40vh] items-center">
            <FaList size={100} className="text-gray-100" /> <span className="text-gray-400 font-semibold text-[18px]">No Content Yet!</span>{" "}
          </div>
        );
      default:
        return <p>Please select a leadership category from the left menu.</p>;
    }
  };

  return <div>{renderLeadershipSection()}</div>;
};

export default LeadershipContent;

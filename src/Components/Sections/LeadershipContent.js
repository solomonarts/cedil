// components/LeadershipContent.jsx
import React, { useEffect } from "react";
// import TeamComponent from './TeamComponent';  // Placeholder for actual team component
import TeamSection from "./Team";

const LeadershipContent = ({selectedSubMenu}) => {
  useEffect(() => {
    console.log(selectedSubMenu);
  }, []);
  const renderLeadershipSection = () => {
    switch (selectedSubMenu) {
      case "Senior Leadership":
        return <TeamSection level="Senior Leadership" />;
      case "International Advisory Board":
        return <TeamSection level="International Advisory Board" />;
      case "CEDIL Global Innovation and Research Fellows":
        return (
          <TeamSection level="CEDIL Global Innovation and Research Fellows" />
        );
      case "In-country and Continental Working Groups":
        return (
          <TeamSection level="In-country and Continental Working Groups" />
        );
      case "Careers and Fellowships":
        return <TeamSection level="Careers and Fellowships" />;
      default:
        return <p>Please select a leadership category from the left menu.</p>;
    }
  };

  return <div>{renderLeadershipSection()}</div>;
};

export default LeadershipContent;

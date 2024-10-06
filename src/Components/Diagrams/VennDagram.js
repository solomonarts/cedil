import React from 'react';

const VennDiagram = () => {
  return (
    <div className="venn-diagram-container">
      <svg width="500" height="500" viewBox="0 0 500 500">
        {/* Define paths for the curved text outside each set */}
        <defs>
          {/* Path for The System Text */}
          <path
            id="systemTextPath"
            d="M 50 250 A 150 150 0 1 1 350 250"
            fill="none"
          />
          {/* Path for The Community Text */}
          <path
            id="communityTextPath"
            d="M 150 250 A 150 150 0 1 1 450 250"
            fill="none"
          />
          {/* Path for The Individual Text */}
          <path
            id="individualTextPath"
            d="M 100 350 A 150 150 0 1 1 400 350"
            fill="none"
          />
        </defs>

        {/* Blue Circle - The System */}
        <circle cx="150" cy="200" r="150" fill="rgba(0, 0, 255, 0.5)" />
        <text x="140" y="220" fill="black" fontSize="12" textAnchor="middle">
          Complex Systems Insight
        </text>

        {/* Light Green Circle - The Community */}
        <circle cx="350" cy="200" r="150" fill="rgba(158, 210, 99, 0.5)" />
        <text x="300" y="220" fill="black" fontSize="12" textAnchor="middle">
          Coalition-Building and Advocacy Tactics
        </text>

        {/* Teal Circle - The Individual */}
        <circle cx="250" cy="350" r="150" fill="rgba(0, 128, 128, 0.5)" />
        <text x="250" y="390" fill="black" fontSize="12" textAnchor="middle">
          Collaborative Leadership Skill
        </text>

        {/* Systems Leadership Intersection */}
        <text x="250" y="300" fill="black" fontSize="18" fontWeight="bold" textAnchor="middle">
          Systems Leadership
        </text>

        {/* Curved Text Outside the Circles */}
        <text fontWeight="bold">
          <textPath href="#systemTextPath" startOffset="10%" textAnchor="middle" fill="blue">
            The System
          </textPath>
        </text>
        <text fontWeight="bold">
          <textPath href="#communityTextPath" startOffset="90%" textAnchor="middle" fill="#9ed263">
            The Community
          </textPath>
        </text>
        <text fontWeight="bold">
          <textPath href="#individualTextPath" startOffset="60%" textAnchor="middle" fill="teal">
            The Individual
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;

// components/SectionWithPattern.js
import React, { useState, useEffect } from "react";
import Watermark from "./Watermark";
// import '../styles/custom.scss';

const SectionWithPattern = ({
  backgroundColor,
  textColor,
  side,
  title,
  content,
  svgbg,
  element,
  page,
  watermarktext,
}) => {
  const isLeft = side === "left";
  const [patternPosition, setPatternPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  // Mouse move event handler
  const handleMouseMove = (e) => {
    // Calculate the movement offset relative to the section
    const { clientX, clientY, currentTarget } = e;
    const { width, height, top, left } = currentTarget.getBoundingClientRect();

    const offsetX = ((clientX - left) / width - 0.5) * 20; // Adjust X-axis movement (sensitivity)
    const offsetY = ((clientY - top) / height - 0.5) * 20; // Adjust Y-axis movement (sensitivity)

    setPatternPosition({ x: offsetX, y: offsetY });
  };

  // Click event handler
  const handleClick = () => {
    setScale(1.2); // Scale up on click
    setTimeout(() => setScale(1), 150); // Reset scale after 150ms
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      setPatternPosition({ x: 0, y: 0 });
      setScale(1);
    };
  }, []);

  return (
    <section
      id={page}
      className={`relative flex items-center justify-center min-h-[70vh] py-10 px-5 md:px-36 ${backgroundColor} ${textColor}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Pattern Container with interactive styles */}
      <div
        className={`absolute ${
          isLeft ? "left-0" : "right-0"
        } top-0 h-full w-[150px] pattern-container opacity-25`}
        style={{
          transform: `translate(${patternPosition.x}px, ${patternPosition.y}px) scale(${scale})`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <img
          src={svgbg}
          alt="Complex Circuit Pattern"
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="max-w-3xl">{content}</p>

        <>{element}</>
      </div>
      {/* <Watermark watermarktext={watermarktext} /> */}
    </section>
  );
};

export default SectionWithPattern;

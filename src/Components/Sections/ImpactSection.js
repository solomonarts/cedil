import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
// import './ImpactCounterSection.css'; // Import styles

const ImpactCounterSection = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  // Use Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );
    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="impact-counter-section" ref={counterRef}>
      <div className="impact-counter-section__container">
        <div className="impact-counter-section__column">
          <div className="impact-counter text-[#9ed263] text-[SofiaBold]">
            {inView && <CountUp start={0} end={23} duration={3} />}{" "}
            {/* Change end value to actual count */}
          </div>
          <h2>Countries Impacted</h2>
        </div>

        <div className="impact-counter-section__column">
          <div className="impact-counter text-[#9ed263] text-[SofiaBold]">
            {inView && <CountUp start={0} end={10} duration={3} />}{" "}
            {/* Change end value to actual count */}
          </div>
          <h2>Regions Impacted</h2>
        </div>

        <div className="impact-counter-section__column">
          <div className="impact-counter text-[#9ed263] text-[SofiaBold]">
            {inView && <CountUp start={0} end={80} duration={3} />}{" "}
            {/* Change end value to actual count */}
          </div>
          <h2>Individual Organizations</h2>
        </div>
      </div>
    </div>
  );
};

export default ImpactCounterSection;

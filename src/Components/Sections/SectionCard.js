// components/Card.js
import React, { useState } from "react";
// import './Card.css'; // Custom styles

const Card = ({ title, image, description }) => {
  const [isRevealed, setIsRevealed] = useState(true);

  const toggleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div
      className={`card-container mt-10 ${isRevealed ? "open" : ""}`}
      onClick={toggleReveal}
      // onMouseEnter={() => setIsRevealed(true)}
      // onMouseLeave={() => setIsRevealed(false)}
    >
      <div className="card-image-container">
        <div className="green-square"></div>
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {isRevealed && (
          <p className="card-description bg-white">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;

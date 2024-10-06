// src/Watermark.js
import React from 'react';
// import './Watermark.css'; // Import the CSS for styling

const Watermark = ({watermarktext}) => {
  return (
    <div className="watermark">
      <>
      {watermarktext}
      </>
    </div>
  );
};

export default Watermark;

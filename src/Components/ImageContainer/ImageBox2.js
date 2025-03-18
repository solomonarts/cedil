import React, { useEffect, useState, useRef } from "react";

const ImageBox2 = ({ imageSrc }) => {
  const [dominantColor, setDominantColor] = useState(null);
  const imageRef = useRef(null);

  const getDominantColor = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i];
      g += pixels[i + 1];
      b += pixels[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const handleImageLoad = () => {
      const img = imageRef.current;
      if (img) {
        setDominantColor(getDominantColor(img));
      }
    };

    if (imageRef.current) {
      imageRef.current.onload = handleImageLoad;
    }
  }, [imageSrc]);

  return (
    <div
      className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden"
      style={{ backgroundColor: dominantColor || "white" }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: dominantColor,
          filter: "blur(40px)",
          transform: "scale(1.3)", // Expands background blur
        }}
      ></div>

      {/* Contained Image */}
      <img
        ref={imageRef}
        src={imageSrc}
        alt="Content"
        className="relative object-contain max-w-full max-h-full z-2"
      />
    </div>
  );
};

export default ImageBox2;

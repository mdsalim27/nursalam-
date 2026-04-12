
import React, { useState, useEffect } from "react";

import banner from "../assets/banner/banner.png";
import banner1 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-02.png";
import banner2 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-03.png";
import banner3 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-04.png";
import banner4 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-05.png";

const slides = [banner, banner1, banner2, banner3, banner4];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-90 flex items-center justify-center overflow-hidden bg-green-900">
      <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
        {slides.map((img, index) => {
          let position = "";
          let scale = "scale-75";
          let opacity = "opacity-40";

          if (index === current) {
            // center (main focus)
            position = "translate-x-0 z-20";
            scale = "scale-100";
            opacity = "opacity-100";
          } else if (index === (current - 1 + slides.length) % slides.length) {
            // left
            position = "-translate-x-1/2 z-10";
          } else if (index === (current + 1) % slides.length) {
            // right
            position = "translate-x-1/2 z-10";
          } else {
            position = "translate-x-full opacity-0";
          }
          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${position} ${scale} ${opacity}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-90 object-contain rounded-xl shadow-lg"
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}
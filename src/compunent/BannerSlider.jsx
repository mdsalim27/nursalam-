
import React, { useState, useEffect } from "react";
import banner from "../assets/banner/banner.png";
import banner1 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-02.png";
import banner2 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-03.png";
import banner3 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-04.png";
import banner4 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-05.png";
import banner5 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-06.png";
import banner6 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-07.png";
import banner7 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-09.png";
import banner8 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-10.png";
import banner9 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-11.png";
import banner10 from "../assets/banner/IMAGE (900 x400) Pixel-01-01-12.png";

const slides = [
  { id: 1, img: banner },
  { id: 2, img: banner1 },
  { id: 3, img: banner2 },
  { id: 4, img: banner3 },
  { id: 5, img: banner4 },
  { id: 6, img: banner5 },
  { id: 7, img: banner6 },
  { id: 8, img: banner7 },
  { id: 9, img: banner8 },
  { id: 10, img: banner9 },
  { id: 11, img: banner10 },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-gray-200 h-80 overflow-hidden">
      <div className="relative w-full h-full">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          >
            <img
              src={slide.img}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block bg-white/70 px-3 py-2 rounded-full z-20"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block bg-white/70 px-3 py-2 rounded-full z-20"
        >
          ❯
        </button>
      </div>
    </section>
  );
}



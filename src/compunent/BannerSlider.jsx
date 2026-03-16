import React, { useState, useEffect } from "react";
import banner from "../assets/banner/IMAGEPixel-01.png"
import banner1 from "../assets/banner/IMAGEPixel-02.png"
import banner2 from "../assets/banner/IMAGEPixel-03.png"
import banner3 from "../assets/banner/IMAGEPixel-04.png"
import banner4 from "../assets/banner/IMAGEPixel-05.png"
import banner5 from "../assets/banner/IMAGEPixel-07.png"
import banner6 from "../assets/banner/IMAGEPixel-08.png"
import banner7 from "../assets/banner/IMAGEPixel-09.png"
import banner8 from "../assets/banner/IMAGEPixel-10.png"
import banner9 from "../assets/banner/IMAGEPixel-11.png"
import banner10 from "../assets/banner/IMAGEPixel-12.png"
import { section } from "framer-motion/client";

const slides = [
    { id: 1, img: banner, },
    { id: 2, img: banner1, },
    { id: 3, img: banner2, },
    { id: 4, img: banner3, },
    { id: 5, img: banner4, },
    { id: 6, img: banner5, },
    { id: 7, img: banner6, },
    { id: 8, img: banner7, },
    { id: 9, img: banner8, },
    { id: 10, img: banner9, },
    { id: 11, img: banner10, },
];
export default function BannerSlider() {
    const [current, setCurrent] = useState(0);
    // auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };
    return (
        <section className="  bg-gray-200">
            <div className="w-full py-5 min-h-[60vh] md:min-h-[80vh] lg:min-h-screen relative overflow-hidden">        
                    {slides.map((slide, index) => (
                <div
                    key={slide.id}
                   className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === current
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-105 z-0"
                            }`} >
                    <img
                        src={slide.img}
                        alt=""
                        className="w-full lg:pt-30 h-full object-contain drop-shadow-2xl"
                    />
                </div>
            ))}
                {/* Prev */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block bg-white/70 px-3 py-2 rounded-full"
                >
                    ❮
                </button>

                {/* Next */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block bg-white/70 px-3 py-2 rounded-full"
                >
                    ❯
                </button>

            </div>
        </section>
        
    );
}
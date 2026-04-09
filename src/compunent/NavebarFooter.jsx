
import React, { useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logonab.png"
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const NavebarFooter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    // 🔥 Smooth Scroll Function
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const menuItems = [
        { name: "HOME", path: "/" },
        { name: "ABOUT US", path: "/about" },
        { name: "PRODUCT", path: "/Products" },
        { name: "SERVICE", path: "/service" },
        { name: "CONTACT", path: "/contact" },
    ];
    return (
        <header className="w-full bg-gray-300 shadow-md pt-3 ">
            <Container>
                <div className="flex items-center justify-between  ">
                  
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={handleScrollTop}
                                    className={`relative pb-1 transition duration-300 ${location.pathname === item.path
                                        ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                                        : "hover:text-blue-600"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div>

                            <div className="  text-gray-700 flex items-center gap-3">
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-200  rounded-lg text-orange-500">
                                        <FiPhoneCall size={20} />
                                    </div>
                                    <div>

                                        <p> +971 52 8089629<br />+971 56 9675332 </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 ">
                                        <div className="  rounded-lg text-orange-500">
                                            <MdEmail size={20} />
                                        </div>
                                        <p>spnazmul7@gmail.com</p>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="  rounded-lg text-orange-500">
                                            <FaLocationDot size={20} />
                                        </div>
                                        <p>
                                            Sharjah, UAE.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                </div>
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                {/* Mobile Menu */}
             {isOpen && (
                    <div className="md:hidden flex flex-col items-center gap-6 pb-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleScrollTop();
                                }}
                                className={`font-medium ${location.pathname === item.path
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                )} 
            </Container>
                {/* Bottom Bar */}
                <div className="bg-gray-300 py-6">
                    <div className="max-w-7xl mx-auto px-6 text-center text-gray-700 text-sm sm:text-base md:text-lg">
                        © 2026{' '}
                        <a
                            href="https://www.electroselling.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            ELECTROSELLING.COM
                        </a>{' '}
                        | All rights reserved
                    </div>
                </div>
        </header>
    );
};

export default NavebarFooter;

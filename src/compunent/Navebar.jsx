
import React, { useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logonab.png"

const Navbar = () => {
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
    { name: "PRODUCT", path: "/Product" },
    { name: "SERVICE", path: "/service" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <header className="w-full bg-gray-100 shadow-md fixed z-50 ">
      <Container>
        <div className="flex items-center justify-between  ">
          <Link
            to="/"
            onClick={handleScrollTop}
            className="text-2xl font-bold text-blue-600"
          >
            <div className=" w-45 h-25">
              <img  className="w-full h-full" src={logo} alt="" />
            </div>
          </Link>
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
          <Link
            to="/quote"
            onClick={handleScrollTop}
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
          >
            GET FREE QUOTE
          </Link>
          {/* Mobile Menu Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
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

            <Link
              to="/quote"
              onClick={() => {
                setIsOpen(false);
                handleScrollTop();
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              GET FREE QUOTE
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
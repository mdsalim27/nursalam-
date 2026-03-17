
import React from "react";
import { FaCircle, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logoFooter.png"
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, link: "https://www.instagram.com/abaya_bag_box_label_logo?utm_source=qr&igsh=Z21qZzdpMmYwbncx" },
  ];
  return (
    <section className=" bg-gray-200 pt-14">
      <Container>
        <footer >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
            {/* Left Section */}
            <div>
              <div className="bg-gray-200  flex items-center justify-center">
                <img src={logo} alt="logo" className="h-full object-contain" />
              </div>
              <div className="flex gap-3 pt-6">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 flex items-center justify-center rounded-lg p-4 
                   transition-all duration-300 
                   hover:scale-105 hover:shadow-xl"
                    >
                      <Icon className="w-16 h-16 md:w-20 md:h-20 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                Quick Link
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-gray-700 mt-6">
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <Link to={"/"}>
                    Home
                  </Link>

                </li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <Link to={"/about"}>
                    About Us
                  </Link>
                </li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <Link to={"/Product"}>

                    Products
                  </Link>
                </li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <Link to={"/service"}>
                    Services
                  </Link>
                </li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <Link to={"/contact"}>
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                Services
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></span>
              </h3>

              <ul className="space-y-4 text-gray-700 mt-6">
                 
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#cupproduct">Cup cake  box</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#Abayacover">Abaya Cover</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#Chocolatebox">Packaging Box </a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#LabelPrinting">Label Printing</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#Chocolatebox">Perfume box</a>
                  </li>
              
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></span>
              </h3>
              <div className="space-y-5 mt-6 text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg text-orange-500">
                    <FiPhoneCall size={20} />
                  </div>
                  <p> +971 52 8089629<br />+971 56 9675332 </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg text-orange-500">
                    <MdEmail size={20} />
                  </div>
                  <p>spnazmul7@gmail.com</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg text-orange-500">
                    <FaLocationDot size={20} />
                  </div>
                  <p>
                    Sharjah, UAE.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Location
              </h2>

              <div className="w-full h-[250px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=25.3002167,55.4300308&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-gray-300 mt-12 py-6">
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
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
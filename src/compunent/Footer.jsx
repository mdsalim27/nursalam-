
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



            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-12 relative inline-block"></h3>
              <div>
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
                  <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                    <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                    <a href="#Chocolatebox">Cake Boxes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                Services
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-gray-700 mt-6">
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#cupproduct">Burger Boxes</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Abayacover">Stickers</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Business Cards </a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#LabelPrinting">Bill Books</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Envelopes</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Pizza Boxes</a>
                </li>
              </ul>
            </div>
            <div>
               <h3 className="text-2xl font-semibold mb-12 relative inline-block"></h3>
              <ul className="space-y-4 text-gray-700 mt-6">
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#cupproduct">Woven Labels</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Abayacover">Plastic Cups</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Perfume Boxes </a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#LabelPrinting">Wrapping Paper</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Corrugated Boxes</a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                  <FaCircle className="text-[8px] text-orange-500 animate-pulse" />
                  <a href="#Chocolatebox">Sweet Boxes</a>
                </li>
              </ul>
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
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
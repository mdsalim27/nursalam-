
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import logo from "../assets/logo1.jpeg"
import logo from "../assets/logoFooter.png"

const Footer = () => {
const socialLinks = [
  
  { icon: FaInstagram, link: "https://www.instagram.com/abaya_bag_box_label_logo?utm_source=qr&igsh=Z21qZzdpMmYwbncx" },
  { icon: FaInstagram, link: "https://www.instagram.com/abaya_bag_box_label_logo?utm_source=qr&igsh=Z21qZzdpMmYwbncx" },
  { icon: FaInstagram, link: "https://www.instagram.com/abaya_bag_box_label_logo?utm_source=qr&igsh=Z21qZzdpMmYwbncx" },
  
 
];
  return (
    <footer className=" bg-gray-200 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Left Section */}
        <div>
         
          <div className="bg-gray-200 w-40 h-20 flex items-center justify-center">
            <img src={logo} alt="logo" className="h-full object-contain" />
          </div>
          <p className="text-gray-600 leading-7 mb-6">
            Cup cake box, Abaya cover, Chocolate box, Paper bag, Perfume box, Paper cup, Sweet box, Clothing label, Wrapping paper, Flower bag, All item customize
          </p>

        <div className="flex gap-3">
  {socialLinks.map((item, index) => {
    const Icon = item.icon;
    return (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg hover:bg-orange-500 hover:text-white transition"
      >
        <Icon />
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
            {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                ➜ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></span>
          </h3>

          <ul className="space-y-4 text-gray-700 mt-6">
            {[
              "Cup cake  box",
              "Abaya cover",
              "Chocolate box",
              "Paper bag",
              "Perfume box",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
                ➜ {item}
              </li>
            ))}
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
  );
};

export default Footer;
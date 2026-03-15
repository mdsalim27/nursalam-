import { motion } from "framer-motion";

import React, { useState } from "react";
import Container from "./Container";
import { FaWhatsapp } from "react-icons/fa";
// Premium Custom Bag Printing
import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import product7 from "../assets/product7.jpeg";
// Premium Custom Bag Printing end
// cup product/// start/////////////////////
import cupp from "../assets/cup/cup.jpeg"
import cupp1 from "../assets/cup/cup1.jpeg"
import cupp2 from "../assets/cup/cup2.jpeg"
import cupp3 from "../assets/cup/cup3.jpeg"
import cupp4 from "../assets/cup/cup4.jpeg"
import cupp5 from "../assets/cup/cup5.jpeg"
import cupp6 from "../assets/cup/cup6.jpeg"
import cupp7 from "../assets/cup/cup7.jpeg"
// cup product/// end/////////////////////
// abeya boox start
import abeya from "../assets/box/abeya.jpeg"
import abeya1 from "../assets/box/abeya1.jpeg"
import abeya2 from "../assets/box/abeya2.jpeg"
import abeya4 from "../assets/box/abeya4.jpeg"
import abeya6 from "../assets/box/abeya5.jpeg"
import abeya5 from "../assets/box/abeya6.jpeg"
// Rigid Drawer Packaging Box start/////////////////
import box from "../assets/box/box.jpeg"
import box1 from "../assets/box/box1.jpeg"
import box2 from "../assets/box/box2.jpeg"
import box3 from "../assets/box/box3.jpeg"
import box4 from "../assets/box/box4.jpeg"
import box5 from "../assets/box/box5.jpeg"
import box6 from "../assets/box/box6.jpeg"
import box7 from "../assets/box/box7.jpeg"
import box8 from "../assets/box/box8.jpeg"
import box9 from "../assets/box/box9.jpeg"
import box10 from "../assets/box/box10.jpeg"
import box11 from "../assets/box/box11.jpeg"
// Rigid Drawer Packaging Box end/////////////////
import label0 from "../assets/New folder/label0.jpeg"
import label1 from "../assets/New folder/label1.jpeg"
import label2 from "../assets/New folder/label2.jpeg"
import label3 from "../assets/New folder/label3.png"
// /////////////////// Premium Custom Bag Printing start ///////////////////////////////
const labelproduct = [
  {
    img: label0,
    title: "Label Printing  ",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "2000 pcs |", "5000 pcs"],
  },
  {
    img: label1,
    title: "Label Printing",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "2000 pcs |", "5000 pcs"],
  },
  {
    img: label2,
    title: "Label Printing",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "2000 pcs |", "5000 pcs"],
  },
  {
    img: label3,
    title: "Label Printing",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "2000 pcs |", "5000 pcs"],
  },
]
const products = [
  // Premium Custom Bag Printing  start
  {
    img: abeya,
    title: "Abaya Box Printing",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: abeya1,
    title: "Premium Abaya box",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: abeya2,
    title: "Custom Abaya Box",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: abeya4,
    title: " Abaya Box Printing",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: abeya5,
    title: "Custom Luxury Abaya",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: abeya6,
    title: "Branded Abaya Packaging",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product,
    title: "Matt Lamination 350gsm",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"]
  },
  {
    img: product1,
    title: "Bag with tray custom size ",
    gsmColor: "text-red-600",
    qty: ["500 pcs"],
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product2,
    title: "Custom bag,box ..",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product3,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product4,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product5,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product6,
    title: "Custom Paper bag–",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: product7,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
];
// /////////////////// Premium Custom Bag Printing end ///////////////////////////////
// /////////////////// Premium Custom cup Printing start ///////////////////////////////
const cupproduct = [
  {
    img: product1,
    title: "Bag with tray custom size",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp1,
    title: "Cup cake box custom...",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp2,
    title: "Cup Customise",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp3,
    title: "Cup Customise",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp4,
    title: "Cup cake box,sweet box custom..",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp5,
    title: "Box for sweet,chocolate, cup cake ect...",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp6,
    title: "Custom Box for Cup cake  sweet,chocolate ect...",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
  {
    img: cupp7,
    title: "Take away box custom...",
    gsmColor: "text-blue-600",
    qty: ["1000 pcs |", "5000 pcs |", "5000 pcs"],
  },
]
// /////////////////// Premium Custom cup Printing end ///////////////////////////////
// Rigid Drawer Packaging Box start/////////////////
const boxproduct = [
  {
    img: box,
    title: "Abaya box",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box1,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box2,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box3,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box4,
    title: "Food box custom",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box5,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box6,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box7,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box8,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box9,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box10,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"],
  },
  {
    img: box11,
    title: "Food Box, Lamination",
    gsmColor: "text-blue-600",
    qty: ["200 pcs |", "1000 pcs |", "5000 pcs |"]
  },
]
// Rigid Drawer Packaging Box end/////////////////
// whatsapp 
const whatsappNumber = "+971528089629";
const Product = ({ item }) => {
  const handleOrder = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };
  ////////////////////////////////////////////
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  // ///////////////////////////////////////
  return (
    <section className="bg-gray-50 -mt-[80px] lg:mt-0 lg:pt-30">
      {/* // /////////////////// Premium Custom cup Printing start /////////////////////////////// */}
      <Container>
        <div className="group cursor-pointer relative py-2 md:py-7 bg-black overflow-hidden">
          {/* Gold Glow Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-500/10"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2
              className="gold-hover text-2xl sm:text-3xl md:text-5xl font-extrabold
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
      bg-clip-text text-transparent tracking-wider
      drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]
      mb-1 leading-tight
      transition-all duration-1000 ease-in-out
      group-hover:scale-105
      group-hover:drop-shadow-[0_0_35px_rgba(255,215,0,0.9)]"
            >
              Premium Custom Cup Printing
            </h2>

            {/* Luxury Divider */}
            <div className="flex items-center justify-center mb-3 transition-all duration-1000 ease-in-out group-hover:scale-110">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              <div className="w-3 h-3 mx-3 bg-yellow-500 rotate-45 shadow-[0_0_15px_gold] group-hover:animate-pulse"></div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>

            {/* Description */}
            <p
              className="gold-hover text-base sm:text-lg md:text-xl
      text-gray-300 font-medium leading-relaxed
      max-w-3xl mx-auto space-y-2
      transition-all duration-1000 ease-in-out
      group-hover:text-gray-100
      group-hover:-translate-y-1"
            >
              We provide premium custom packaging solutions including:
              <br />
              ✦ Shopping Bags & Boxes
              ✦ Abaya Boxes
              ✦ Sweet & Cake Boxes <br />
              ✦ Perfume Bags & Boxes
              ✦ Flower Bags
              ✦ Clothing Labels
              ✦ Abaya Covers <br />
              ✦ Wrapping Paper
              ✦ Stickers, Cards, Tags, Envelopes & more.
            </p>
          </div>
        </div>
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 md:py-10">
          {cupproduct.map((item, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}   // start from left side
              whileInView={{ opacity: 1, x: 0 }} // animate to position
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }} // stagger animation
            >
              <div
                key={index}
                className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden group w-full">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => handleImageClick(item.img)}
                    className="w-full h-48 sm:h-52 md:h-[220px] object-cover 
                     transition-transform duration-700 
                       group-hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-2 text-center">
                    {item.title}
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="p-4 md:p-5">
                  <h4 className="text-gray-700 font-medium mb-3 text-sm md:text-base">
                    Available Circulations:
                  </h4>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-gray-600 text-sm md:text-lg">
                    {item.qty.map((q, i) => (
                      <span key={i}>{q}</span>
                    ))}


                  </div>
                </div>
              </div>
              
            </motion.div>

          ))}
          {/* button start */}
          <div className=" text-center flex justify-start">
          <button
            onClick={handleOrder}
            className="flex justify-center items-center cursor-pointer gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition duration-300"
          >
            <FaWhatsapp className="text-lg" />
            Order Now
          </button>
          </div>
          {/* button end */}
        </div>
      </Container>
      {/* Premium Gold Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0  z-50 flex items-center justify-center 
               bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-500"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl shadow-2xl 
                 ring-4 ring-yellow-400/50 ring-offset-2 
                 ring-offset-black p-2 animate-scaleIn"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-5 text-blue-600 hover:text-blue-700
                   lg:text-[2rem] text-3xl font-extrabold cursor-pointer z-50"
            >
              &times;
            </button>
            {/* Image */}
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.7)] 
                   transition-transform duration-500 hover:scale-105"
            />
            {/* Glowing Gold Effect */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-yellow-400/50 animate-pulse"></div>
          </div>
        </div>
      )}
      {/* // /////////////////// Premium Custom cup Printing end /////////////////////////////// */}
      {/* // /////////////////// Premium Custom Bag Printing start /////////////////////////////// */}
      <Container>
        <div className="group cursor-pointer relative py-2 md:py-7 bg-black overflow-hidden">
          {/* Gold Glow Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-500/10"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2
              className="gold-hover text-2xl sm:text-3xl md:text-5xl font-extrabold
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
      bg-clip-text text-transparent tracking-wider
      drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]
      mb-1 leading-tight
      transition-all duration-1000 ease-in-out
      group-hover:scale-105
      group-hover:drop-shadow-[0_0_35px_rgba(255,215,0,0.9)]"
            >
              Premium Custom Abaya / Bag Printing
            </h2>

            {/* Luxury Divider */}
            <div className="flex items-center justify-center mb-3 transition-all duration-1000 ease-in-out group-hover:scale-110">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              <div className="w-3 h-3 mx-3 bg-yellow-500 rotate-45 shadow-[0_0_15px_gold] group-hover:animate-pulse"></div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>

            {/* Description */}
            <p
              className="gold-hover text-base sm:text-lg md:text-xl
      text-gray-300 font-medium leading-relaxed
      max-w-3xl mx-auto space-y-2
      transition-all duration-1000 ease-in-out
      group-hover:text-gray-100
      group-hover:-translate-y-1"
            >
              We provide premium custom packaging solutions including:
              <br />
              ✦ Shopping Bags & Boxes
              ✦ Abaya Boxes
              ✦ Sweet & Cake Boxes <br />
              ✦ Perfume Bags & Boxes
              ✦ Flower Bags
              ✦ Clothing Labels
              ✦ Abaya Covers <br />
              ✦ Wrapping Paper
              ✦ Stickers, Cards, Tags, Envelopes & more.
            </p>
          </div>
        </div>
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 md:py-10">
          {products.map((item, index) => (
   <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}   // start from left side
              whileInView={{ opacity: 1, x: 0 }} // animate to position
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }} // stagger animation
            >

            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden group w-full">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() => handleImageClick(item.img)}
                  className="w-full h-48 sm:h-52 md:h-[220px] object-cover 
             transition-transform duration-700 
             group-hover:scale-110 cursor-pointer"
                />
                <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-2 text-center">
                  {item.title}
                </div>
              </div>
              {/* Bottom Section */}
              <div className="p-4 md:p-5">
                <h4 className="text-gray-700 font-medium mb-3 text-sm md:text-base">
                  Available Circulations:
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-2 text-gray-600 text-sm md:text-lg">
                  {item.qty.map((q, i) => (
                    <span key={i}>{q}</span>
                  ))}
                  {/* button start */}
                  <button
                    onClick={handleOrder}
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    Order Now
                  </button>
                  {/* button end */}
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </Container>
      {/* // /////////////////// Premium Custom Bag Printing end /////////////////////////////// */}
      {/* // Rigid Drawer Packaging Box start///////////////// */}
      <Container>
        <div className="group cursor-pointer relative py-2 md:py-7 bg-black overflow-hidden">
          {/* Gold Glow Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-500/10"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2
              className="gold-hover text-2xl sm:text-3xl md:text-5xl font-extrabold
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
      bg-clip-text text-transparent tracking-wider
      drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]
      mb-1 leading-tight
      transition-all duration-1000 ease-in-out
      group-hover:scale-105
      group-hover:drop-shadow-[0_0_35px_rgba(255,215,0,0.9)]"
            >
              Premium Custom Drawer Packaging Box Printing
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center mb-3 transition-all duration-1000 ease-in-out group-hover:scale-110">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              <div className="w-3 h-3 mx-3 bg-yellow-500 rotate-45 shadow-[0_0_15px_gold] group-hover:animate-pulse"></div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>

            {/* Description */}
            <p
              className="gold-hover text-base sm:text-lg md:text-xl
      text-gray-300 font-medium leading-relaxed
      max-w-3xl mx-auto space-y-2
      transition-all duration-1000 ease-in-out
      group-hover:text-gray-100
      group-hover:-translate-y-1"
            >
              We provide premium custom packaging solutions including:
              <br />
              ✦ Shopping Bags & Boxes
              ✦ Abaya Boxes
              ✦ Sweet & Cake Boxes <br />
              ✦ Perfume Bags & Boxes
              ✦ Flower Bags
              ✦ Clothing Labels
              ✦ Abaya Covers <br />
              ✦ Wrapping Paper
              ✦ Stickers, Cards, Tags, Envelopes & more.
            </p>
          </div>
        </div>
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 md:py-10">
          {boxproduct.map((item, index) => (
               <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}   // start from left side
              whileInView={{ opacity: 1, x: 0 }} // animate to position
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }} // stagger animation
            >

            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md 
                   hover:shadow-xl 
                   transition duration-500 
                   overflow-hidden group w-full">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() => handleImageClick(item.img)}
                  className="w-full h-48 sm:h-52 md:h-[220px] object-cover 
             transition-transform duration-700 
             group-hover:scale-110 cursor-pointer"
                />
                <div className="absolute bottom-0 w-full 
                          bg-black/60 text-white 
                          text-sm sm:text-base md:text-lg 
                          font-semibold px-4 py-2 text-center">
                  {item.title}
                </div>
              </div>
              {/* Bottom Section */}
              <div className="p-4 md:p-5">
                <h4 className="text-gray-700 font-medium mb-3 text-sm md:text-base">
                  Available Circulations:
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-2 text-gray-600 text-sm md:text-lg">
                  {item.qty.map((q, i) => (
                    <span key={i}>{q}</span>
                  ))}
                  {/* button start */}
                  <button
                    onClick={handleOrder}
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    Order Now
                  </button>
                  {/* button end */}
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </Container>
      {/* // Rigid Drawer Packaging Box end///////////////// */}
      {/* // label start ///////////////// */}
      <Container>

        <div className="group cursor-pointer relative py-2 md:py-7 bg-black overflow-hidden">
          {/* Gold Glow Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-500/10"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2
              className=" gold-hover text-2xl sm:text-3xl md:text-5xl font-extrabold 
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
      bg-clip-text text-transparent tracking-wider 
      drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]
      mb-1 leading-tight transition-all duration-700
      group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(255,215,0,0.9)]"
            >
              Label Printing
            </h2>

            {/* Luxury Divider */}
            <div className="flex items-center justify-center mb-3 transition-all duration-700 group-hover:scale-110">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              <div className="w-3 h-3 mx-3 bg-yellow-500 rotate-45 shadow-[0_0_15px_gold] group-hover:animate-pulse"></div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>

            {/* Description */}
            <p
              className=" gold-hover text-base sm:text-lg md:text-xl 
      text-gray-300 font-medium leading-relaxed 
      max-w-3xl mx-auto space-y-2 transition-all duration-700
      group-hover:text-gray-100 group-hover:translate-y-[-3px]"
            >
              We provide premium custom packaging solutions including:
              <br />
              ✦ Shopping Bags & Boxes
              ✦ Abaya Boxes
              ✦ Sweet & Cake Boxes <br />
              ✦ Perfume Bags & Boxes
              ✦ Flower Bags
              ✦ Clothing Labels
              ✦ Abaya Covers <br />
              ✦ Wrapping Paper
              ✦ Stickers, Cards, Tags, Envelopes & more.
            </p>
          </div>
        </div>
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 md:py-10">
          {labelproduct.map((item, index) => (
               <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}   // start from left side
              whileInView={{ opacity: 1, x: 0 }} // animate to position
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }} // stagger animation
            >

            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md 
                   hover:shadow-xl 
                   transition duration-500 
                   overflow-hidden group w-full">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() => handleImageClick(item.img)}
                  className="w-full h-48 sm:h-52 md:h-[220px] object-cover 
                     transition-transform duration-700 
                       group-hover:scale-110 cursor-pointer"
                />
                <div className="absolute bottom-0 w-full 
                          bg-black/60 text-white 
                          text-sm sm:text-base md:text-lg 
                          font-semibold px-4 py-2 text-center">
                  {item.title}
                </div>
              </div>
              {/* Bottom Section */}
              <div className="p-4 md:p-5">
                <h4 className="text-gray-700 font-medium mb-3 text-sm md:text-base">
                  Available Circulations:
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-2 text-gray-600 text-sm md:text-lg">
                  {item.qty.map((q, i) => (
                    <span key={i}>{q}</span>
                  ))}
                  {/* button start */}
                  <button
                    onClick={handleOrder}
                    className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    Order Now
                  </button>
                  {/* button end */}
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </Container>
      {/* // label end ///////////////// */}
    </section>
  );
};
export default Product;
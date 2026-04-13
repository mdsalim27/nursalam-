
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
// abeyecover 
import abeyacover from "../assets/abeyacover.jpeg"
import abeyacover1 from "../assets/abeyacover1.jpeg"
import abeyacover2 from "../assets/abeyacover2.jpeg"
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

const products = [
  // abeya box cover 
  {
    img: product1,
    title: "Custom bag,box.... ",
    gsmColor: "text-red-600",
    qty: ["500 pcs"],
  },
  {
    img: product,
    title: "Custom Box for dresss ",
    gsmColor: "text-blue-600",
  },
  {
    img: product5,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
  },

  {
    img: product6,
    title: "Custom Paper bag–",
    gsmColor: "text-red-600",
  },
  {
    img: abeya,
    title: "Abaya Box Printing",
    gsmColor: "text-blue-600",
  },
  {
    img: abeya2,
    title: "Custom Abaya Box",
    gsmColor: "text-blue-600",
  },
  {
    img: abeya4,
    title: " Abaya Box Printing",
    gsmColor: "text-blue-600",
  },
  {
    img: abeya5,
    title: "Custom Luxury Abaya",
    gsmColor: "text-blue-600",
  },
  {
    img: abeya6,
    title: "Branded Abaya Packaging",
    gsmColor: "text-blue-600",
  },
  // Premium Custom Bag Printing  start
  {
    img: product2,
    title: "Bag for foods....",
    gsmColor: "text-red-600",
  },
  {
    img: product3,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
  },
  {
    img: product4,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
  },
  {
    img: product7,
    title: "Custom Paper bag",
    gsmColor: "text-red-600",
  },
  {
    img: abeyacover1,
    title: "Abaya Cover",
    gsmColor: "text-blue-600",
  },
  {
    img: abeyacover,
    title: "Abaya Cover",
    gsmColor: "text-blue-600",
  },
  {
    img: abeyacover2,
    title: "Abaya Cover",
    gsmColor: "text-blue-600",
  },
  {
    img: label0,
    title: "Label Printing  ",
    gsmColor: "text-blue-600",
  },
  {
    img: label1,
    title: "Label Printing",
    gsmColor: "text-blue-600",
  },
  {
    img: label2,
    title: "Label Printing",
    gsmColor: "text-blue-600",
  },
  {
    img: label3,
    title: "Label Printing",
    gsmColor: "text-blue-600",
  },
  
  {
    img: cupp1,
    title: "Cup cake box custom...",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp2,
    title: "Cup Customise",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp3,
    title: "Custom Cup cake box",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp4,
    title: "Cup cake box,sweet box custom..",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp5,
    title: "Box for sweet,chocolate, cup cake ect...",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp6,
    title: "Custom Box for Cup cake  sweet,chocolate ect...",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp7,
    title: "Take away box custom...",
    gsmColor: "text-blue-600",
  },
  {
    img: cupp2,
    title: "Cup Customise",
    gsmColor: "text-blue-600",
  },
  {
    img: box1,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
  },
  {
    img: box2,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
  },
  {
    img: box3,
    title: "Food box,dress box custom.",
    gsmColor: "text-blue-600",
  },
  {
    img: box4,
    title: "Food box custom",
    gsmColor: "text-blue-600",
  },
  {
    img: box5,
    title: "Custom Cake box",
    gsmColor: "text-blue-600",
  },
  {
    img: box6,
    title: "Custom Cake box",
    gsmColor: "text-blue-600",
  },
  {
    img: box7,
    title: "Custom box..",
    gsmColor: "text-blue-600",
  },
  {
    img: box8,
    title: "Custom bag,box for food",
    gsmColor: "text-blue-600",
  },
  {
    img: box9,
    title: "Custom cake box...",
    gsmColor: "text-blue-600",
  },
  {
    img: box10,
    title: "Custom bag with tray.....",
    gsmColor: "text-blue-600",
  },
  {
    img: box11,
    title: "Custom Food box",
    gsmColor: "text-blue-600",
  },
   {
    img: box,
    title: "Abaya box",
    gsmColor: "text-blue-600",
  },
]
// whatsapp 
const Products = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);
  return (
    <section className="bg-[#FFF5E4] pt-3">
      <Container>
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 py-8 md:py-10 ">
          {products.map((item, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}   // start from left side
              whileInView={{ opacity: 1, x: 0 }} // animate to position
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // stagger animation
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
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-xs sm:text-base md:text-xs font-semibold px-4 py-2 text-center">
                    {item.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      {/* // /////////////////// Premium Custom Bag Printing end /////////////////////////////// */}
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
    </section>
  );
};
export default Products;

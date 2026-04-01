import React from 'react'
import printingm from "../assets/about/label.png"
import printingm1 from "../assets/about/printingm.png"
import cup from "../assets/about/cup1.png"
import bag from "../assets/about/bag1.png"
import label from "../assets/about/labelo.png"
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#f3f4f6] py-10 pt-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            ABOUT US
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-8 md:leading-9 font-medium max-w-4xl mx-auto text-center px-4">
            We specialize in custom packaging solutions in Dubai, including customized Bags, Boxes, Labels, Abaya Covers, Cup Cake Box, Chocolate Box, Paper Bag, Perfume Box, Paper Cup, Sweet Box, Clothing Label, Wrapping Paper, Flower Bag and various printing items. (All item Customize) Our goal is to provide high-quality, creative, and reliable packaging that helps brands present their products professionally. We focus on delivering durable materials, clean designs, and timely service to meet every customer’s unique needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-1  items-center">

          <div className="flex justify-center items-center h-screen bg-gray-100">
            <motion.img
              src={printingm}
              alt="Slide In"
              className="w-full h-full object-cover rounded-xl"
              initial={{ opacity: 0, x: -100 }}      // start left
              whileInView={{ opacity: 1, x: 0 }}     // animate to position
              viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}           // optional hover effect
            />
          </div>

        </div>
        <div className="space-y-16 py-12">
          {/* Paper Bag */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-bold mb-4"> Printing Machine</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                High-Performance Printing Equipment
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <p> Industrial printing presses capable of handling a variety of packaging materials with precision and efficiency.
                </p>
              </ul>
            </div>

            <motion.img
              src={printingm1}
              alt="Slide In"
              className="w-full h-full object-cover rounded-xl"
              initial={{ opacity: 0, x: 100 }}        // start off-screen right
              whileInView={{ opacity: 1, x: 0 }}     // slide to position
              viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}           // optional hover effect
            />
          </div>
          {/* Perfume Box */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">

            <motion.img
              src={bag}
              alt="Slide In"
              className="w-full h-full object-cover rounded-xl"
              initial={{ opacity: 0, x: -100 }}        // start off-screen right
              whileInView={{ opacity: 1, x: 0 }}     // slide to position
              viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}           // optional hover effect
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Floral Gift Bags</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Charming kraft paper bags with beautiful printed designs, ideal for flowers, gifts, and special occasions.
              </p>
            </div>
          </div>
          {/* Cup Cake Box */}
          {/* Perfume Box */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-bold mb-4">Premium Clothing Labels</h3>
              <p className="text-gray-600 font-bold leading-relaxed mb-2">
                Custom Printed Fabric Labels
              </p>
              <p>Enhance your brand identity with our high-quality, durable clothing labels. Perfect for apparel, accessories, and handmade items, these labels are designed to withstand washing while keeping your brand looking sharp. Customize with your logo, text, or care instructions to make every garment uniquely yours.</p>
            </div>
            <div>
              <motion.img
                src={label}
                alt="Slide In"
                className="w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, x: 100 }}        // start off-screen right
                whileInView={{ opacity: 1, x: 0 }}     // slide to position
                viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}           // optional hover effect
              />
            </div>

          </div>

          {/* label end */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">

            <div>
              <motion.img
                src={cup}
                alt="Slide In"
                className="w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, x: -100 }}        // start off-screen right
                whileInView={{ opacity: 1, x: 0 }}     // slide to position
                viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}           // optional hover effect
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Cup Printing</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                High-quality cup printing that combines style and practicality.
                Perfect for promoting your brand while keeping drinks safe and fresh.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Food-grade cups suitable for hot & cold beverages</li>
                <li>Customizable designs to match your brand</li>
                <li>Durable printing that doesn’t fade easily</li>
                <li>Perfect for cafes, events, and promotional giveaways</li>
                <li>Eco-friendly options available</li>
              </ul>
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div
            className="bg-gray-800 text-white p-8 rounded-xl shadow-lg"
            data-aos="fade-up"
          >
            <p className="text-orange-400 text-sm uppercase mb-3">
              🌟 Our Values
            </p>
            <h3 className="text-2xl font-bold mb-4 leading-snug">
              We believe packaging is more than just a box — it is a powerful statement of quality and brand identity.
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe in true partnership...
            </p>
          </div>
          <div
            className="border border-dashed border-gray-400 p-6 rounded-xl bg-white"
            data-aos="zoom-in"
          >
            <h4 className="font-bold text-gray-800 mb-3">  🎯 Our Mission</h4>
            <h3 className="text-2xl font-bold mb-4 leading-snug">
              Our mission is to provide high-quality, innovative, and customized packaging solutions that help brands stand out in competitive markets.
            </h3>
          </div>
          <div
            className="border border-dashed border-gray-400 p-6 rounded-xl bg-white"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h4 className="font-bold text-gray-800 mb-3">🚀 Our Vision</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our vision is to become a trusted leader in premium printing and packaging solutions. We strive to continuously innovate, embrace modern design trends, and deliver luxury packaging that enhances brand value and customer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
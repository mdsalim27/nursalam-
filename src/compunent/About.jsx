import React from 'react'
import printingm from "../assets/about/label.png"
import printingm1 from "../assets/about/printingm.png"
import cup from "../assets/about/cup1.png"
import bag from "../assets/about/bag1.png"
import label from "../assets/about/labelo.png"

const About = () => {
  return (
    <section className="bg-[#f3f4f6] py-10 pt-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            ABOUT US
          </h2>
        </div>
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* LEFT IMAGES */}
          <div className="relative group w-full" data-aos="fade-right">
            <img
              src={printingm}
              alt=""
              className="w-full cursor-pointer rounded-lg shadow-xl transform transition duration-500 ease-in-out 
                 group-hover:scale-102 group-hover:shadow-2xl"
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
            <div>
              <img
                src={printingm1}
                alt="Paper Bag"
                className="w-full cursor-pointer rounded-lg shadow-xl transform transition duration-500 ease-in-out 
                 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl"         />
            </div>
          </div>
          {/* Perfume Box */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">
            <div className="order-last md:order-first">
              <img
                src={bag}
                alt="Perfume Box"
                className="w-full cursor-pointer rounded-lg shadow-xl transform transition duration-500 ease-in-out 
                 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl"              />
            </div>
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
              <img
                src={label} // replace with your cup image
                alt="Cup Printing"
                className="w-full cursor-pointer rounded-lg shadow-xl transform transition duration-500 ease-in-out 
                 group-hover:scale-105  group-hover:shadow-2xl"              />
            </div>
          </div>

          {/* label end */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative group" data-aos="fade-right">
            <div>
              <img
                src={cup} // replace with your cup image
                alt="Cup Printing"
                className="w-full cursor-pointer rounded-lg shadow-xl transform transition duration-500 ease-in-out 
                 group-hover:scale-105  group-hover:shadow-2xl"              />
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
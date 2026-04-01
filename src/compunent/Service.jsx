import React from "react";
import product1 from "../assets/product1.png";
import Perfume from "../assets/Perfume.jpeg";
import cupp2 from "../assets/cup/cup2.jpeg"
import label from "../assets/about/labelo.png"
import { motion } from "framer-motion";

const Service = () => {
    return (
        <section className="bg-[#f3f4f6] py-10 pt-30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our service
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-7 md:leading-8 lg:leading-9 font-normal md:font-medium max-w-5xl mx-auto text-center px-4">
                        We provide premium custom packaging solutions including Paper Bags, Cake Boxes, Chocolate Boxes, Sweet Boxes, Pizza Boxes, Burger Boxes, Perfume Boxes, and Corrugated Boxes. We also offer Wrapping Paper, Stickers, Business Cards, Thank You Cards, Bill Books, and Envelopes for complete branding support. In addition, we supply Woven Labels, Abaya Covers, Paper Cups, and Plastic Cups based on customer requirements.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT IMAGES */}
                    <div className="relative group" data-aos="fade-right">
                        <div className="absolute -top-6 -left-6 w-25 h-25 bg-gray-300 hidden sm:flex items-center justify-center text-center">
                            <p className="text-blue-800 font-bold italic">Welcome</p>
                        </div>

                        <div>
                            <motion.img
                                src={product1}
                                alt="Slide In"
                                className="w-full h-full object-cover rounded-xl"
                                initial={{ opacity: 0, x: -100 }}        // start off-screen right
                                whileInView={{ opacity: 1, x: 0 }}     // slide to position
                                viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}           // optional hover effect
                            />
                        </div>
                    </div>
                    {/* RIGHT CONTENT */}
                    <div data-aos="fade-left">
                        <p className="text-orange-500 font-semibold uppercase text-sm mb-2">
                            Who We Are
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-snug">
                            Printing Press LLC: <br />
                            Bring Your Vision to Life.
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem praesentium labore numquam non? Vero ex illum corporis sed placeat magnam.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The heart of our success lies in our team...
                        </p>
                    </div>
                </div>
                <div className="space-y-16 py-12">
                    {/* Paper Bag */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
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
                    {/* Perfume Box */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <div>
                            <motion.img
                                src={Perfume}
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
                            <h3 className="text-2xl font-bold mb-4">Perfume Box</h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                Luxury boxes crafted to reflect sophistication and premium branding.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Advanced finishing for protection and elegance</li>
                                <li>Ideal for high-end fragrance brands</li>
                                <li>Distinctive and premium presentation</li>
                            </ul>
                        </div>
                    </div>
                    {/* Cup Cake Box */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
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

                        <div>
                            <motion.img
                                src={cupp2}
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
export default Service


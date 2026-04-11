import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    // whatsapp 
    const whatsappNumber = "0569675332";
    const handleOrder = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <section className="bg-gray-50 min-h-screen py-3 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mt-3">
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-blue-600 text-xl" />
                            <div>
                                <h4 className="font-semibold text-gray-700">Email</h4>
                                <p className="text-gray-600">spnazmul7@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-green-600 text-xl" />
                            <div>
                                <h4 className="font-semibold text-gray-700">Phone</h4>
                                <a
                                    href="tel:+971 52 8089629"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    +971 52 8089629
                                </a>
                                <br />
                                <a
                                    href="tel:+971 52 8089629"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    +971 56 9675332
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-red-600 text-xl" />
                            <div>
                                <h4 className="font-semibold text-gray-700">Location</h4>
                                <p className="text-gray-600">
                                    Sharjah, UAE.
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* button start */}
                            <button
                                onClick={handleOrder}
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-blue-600 hover:bg-green-700 text-white text-sm rounded-lg transition duration-300"
                            >
                                <FaWhatsapp className="text-lg" />
                                CONTACT
                            </button>
                            {/* button end */}
                        </div>

                    </div>

                    {/* Contact Form */}

                    <section className="py-1 bg-gray-100">
                        {/* <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl font-bold mb-6 text-center">
                                Our Location
                            </h2>

                            <div className="w-full h-[400px] rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                                    className="w-full h-full"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div> */}
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
                    </section>

                </div>
            </div>
        </section>
    );
};

export default Contact;
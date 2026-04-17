
// import React, { useState, useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
// import Navebar from './Navebar'
// import Footer from './Footer'
// import { IoIosArrowUp } from 'react-icons/io'
// import TextSlide from './TextSlide'
// import NavebarFooter from './NavebarFooter'
// import { FaWhatsapp } from 'react-icons/fa'

// const RoutLeyout = () => {
//  const handleOrder = () => {
//     window.open(`https://wa.me/${whatsappNumber}`, "_blank");
//   };
//   const [visible, setVisible] = useState(false)

//   // Scroll detect
//   useEffect(() => {
//     const toggleVisibilityt = () => {
//       if (window.scrollY > 400) {
//         setVisible(true)
//       } else {
//         setVisible(false)
//       }
//     }
//     window.addEventListener("scroll", toggleVisibilityt)
//     return () => window.removeEventListener("scroll", toggleVisibilityt)
//   }, [])

//   return (
//     <div className="relative">
//       <Navebar />
//       <TextSlide />
//       <Outlet />

//       <Footer />
//       <NavebarFooter />
//       {/* ✅ Scroll To Top Button */}
//       {visible && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-6 right-6 z-50 
//                      bg-blue-600 hover:bg-blue-700 
//                      text-white p-3 rounded-full cursor-pointer
//                      shadow-xl transition duration-300 
//                      hover:scale-110"
//         >
//           <IoIosArrowUp size={22} />
//         </button>
//       )}
//       {visible && (
//   <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

//     {/* Scroll To Top */}
//     <button
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       className="bg-blue-600 hover:bg-blue-700 
//                  text-white p-3 rounded-full 
//                  shadow-xl transition duration-300 
//                  hover:scale-110"
//     >
//       <IoIosArrowUp size={22} />
//     </button>

//     {/* WhatsApp Button */}
//     <button
//       onClick={handleOrder}
//       className="flex items-center gap-2 px-4 py-2 
//                  bg-green-600 hover:bg-green-700 
//                  text-white text-sm rounded-lg 
//                  shadow-lg transition duration-300 
//                  hover:scale-105"
//     >
//       <FaWhatsapp className="text-lg" />
//       Order Now
//     </button>

//   </div>
// )}

//     </div>
//   )
// }

// export default RoutLeyout

import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from './Navebar'
import Footer from './Footer'
import { IoIosArrowUp } from 'react-icons/io'
import TextSlide from './TextSlide'
import NavebarFooter from './NavebarFooter'
import { FaWhatsapp } from 'react-icons/fa'
import BannerSlider from './BannerSlider'

const RoutLeyout = () => {

  const [visible, setVisible] = useState(false)

  // Scroll detect
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // WhatsApp number (without +)
  const whatsappNumber = "971528089629"

  // Open WhatsApp
  const handleOrder = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank")
  }

  return (
    <div className="relative">

      <Navebar />
      <TextSlide />
            <BannerSlider />
      <Outlet />
      <Footer />
      <NavebarFooter />

      {/* Floating Buttons */}
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-row items-center gap-3">
          {/* WhatsApp Button */}
          <button
            onClick={handleOrder}
            className="flex items-center gap-2 px-4 py-2 
                      bg-[#A7F0DD] hover:bg-[#6de5c5] text-black text-sm rounded-lg 
                       shadow-lg transition duration-300 
                       hover:scale-105"
          >
            <FaWhatsapp className="text-lg" />
            Order Now
          </button>
          {/* Scroll To Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#A7F0DD] hover:bg-[#6de5c5] text-black p-3 rounded-full 
                       shadow-xl transition duration-300 
                       hover:scale-110"
          >
            <IoIosArrowUp size={22} />
          </button>
        </div>
      )}

    </div>
  )
}

export default RoutLeyout

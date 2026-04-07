
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from './Navebar'
import Footer from './Footer'
import { IoIosArrowUp } from 'react-icons/io'
import TextSlide from './TextSlide'
import NavebarFooter from './NavebarFooter'

const RoutLeyout = () => {

  const [visible, setVisible] = useState(false)

  // Scroll detect
  useEffect(() => {
    const toggleVisibilityt = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibilityt)
    return () => window.removeEventListener("scroll", toggleVisibilityt)
  }, [])

  return (
    <div className="relative">
      <Navebar />
      <TextSlide />
      <Outlet />

      <Footer />
      <NavebarFooter />
      {/* ✅ Scroll To Top Button */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 
                     bg-blue-600 hover:bg-blue-700 
                     text-white p-3 rounded-full cursor-pointer
                     shadow-xl transition duration-300 
                     hover:scale-110"
        >
          <IoIosArrowUp size={22} />
        </button>
      )}

    </div>
  )
}

export default RoutLeyout
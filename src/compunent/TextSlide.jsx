// import { motion } from "framer-motion";

// const letters = [
//   "C", "U", "S", "T", "O", "M", " ",
//   "B", "A", "G", " ",
//   "B", "O", "X", "-", "U", "A", "E"
// ];

// const TextSlide = () => {
//   return (
//     <div className="relative flex flex-col justify-center items-center h-60 sm:h-60 md:h-60 lg:h-60 bg-[#FFF5E4] overflow-hidden lg:pt-13 pt-25">
//       {/* 🔥 Welcome Text */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-[#DB1A1A] tracking-[0.3em] mb-1 sm:mb-2"
//       >
//         WELCOME TO
//       </motion.h2>

//       {/* 🔥 Animated Main Text */}
//       <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">

//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             initial={{ y: 0, opacity: 0 }}
//             animate={{
//               y: [0, 0, 0, 4, 0],
//               opacity: [0, 1, 1, 0.8, 1],
              
//             }}
//             transition={{
//               duration: 3,
//               delay: index * 0.1,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="text-[#DB1A1A] drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"          >
//             {letter}
//           </motion.span>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default TextSlide;



import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const letters = [
  "C", "U", "S", "T", "O", "M","- ", 
  "B", "A", "G", "- ",
  "B", "O", "X", "-", "U", "A", "E"
];

const TextSlide = () => {
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 100 : 320; // delete faster

    const timer = setTimeout(() => {
      if (!deleting) {
        // typing
        if (index < letters.length) {
          setIndex(index + 1);
        } else {
          // pause then start deleting
          setTimeout(() => setDeleting(true), 3000);
        }
      } else {
        // deleting
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setDeleting(false); // restart typing
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [index, deleting]);
  return (
    <div className="relative flex flex-col justify-center items-center h-60 bg-[#FFF5E4] overflow-hidden pt-20">
      {/* Welcome Text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-[#DB1A1A] tracking-[0.3em] mb-2"
      >
        WELCOME TO
      </motion.h2>
      {/* AI Typing Text */}
      <div className="flex text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#DB1A1A] drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]">
        {letters.slice(0, index).map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
        {/* Cursor */}
        
        <span className="ml-1 animate-pulse">|</span>
      </div>
    </div>
  );
};

export default TextSlide;
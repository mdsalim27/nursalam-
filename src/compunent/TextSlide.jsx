import { motion } from "framer-motion";

const letters = [
  "C", "U", "S", "T", "O", "M", " ",
  "B", "A", "G", " ",
  "B", "O", "X", "-", "U", "A", "E"
];

const TextSlide = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-60 sm:h-60 md:h-60 lg:h-60 bg-black overflow-hidden lg:pt-13 pt-25">

      {/* 🔥 Welcome Text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-yellow-400 tracking-[0.3em] mb-1 sm:mb-2"
      >
        WELCOME TO
      </motion.h2>

      {/* 🔥 Animated Main Text */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">

        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -10, 0, 10, 0],
              opacity: [0, 1, 1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              delay: index * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"          >
            {letter}
          </motion.span>
        ))}

      </div>
    </div>
  );
};

export default TextSlide;



// import { motion } from "framer-motion";
// const letters = ["C","U","S","T","O","M","","B","A","G","","B","O","X","-","U","A","E"];
// const TextSlide = () => {
//   return (
//     <div className="relative flex justify-center items-center  lg:pt-15 pt-20 h-55 sm:h-64 md:h-80 lg:h-96 overflow-hidden px-4">
//       {/* Animated Background */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-blue-500 via-black to-pink-800"
//         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%" ] }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{ backgroundSize: "200% 200%" }}
//       />

//       {/* Text */}
//       <div className="relative flex flex-wrap justify-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">
//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             initial={{ y: 0, rotate: 0, opacity: 0, textShadow: "0px 0px 0px #fff" }}
//             animate={{
//               y: [0, -20, 0, 20, 0],
//               rotate: [0, 8, 0, -8, 0],
//               opacity: [0, 1, 1, 0],
//               textShadow: [
//                 "0px 0px 0px #fff",
//                 "0px 0px 20px #0ff, 0px 0px 40px #0ff",
//                 "0px 0px 0px #fff",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               delay: index * 0.15,
//               repeat: Infinity,
//               ease: "easeInOut",
//               repeatDelay: 1,
//             }}
//             className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default TextSlide;


// import { motion } from "framer-motion";

// const TextSlide = () => {
//   return (
//     <div className="relative overflow-hidden bg-white py-3 pt-29">
//       <motion.div
//         animate={{ x: ["50%", "-100%"] }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-2xl font-semibold tracking-[0.25em] uppercase text-gray-800 italic"
//       >
//         <span>WELCOME TO</span>*
//         <span className=" text-blue-700">CUSTOM BAG BOX-UAE</span>*
//         <span className=" text-green-600">CUSTOM BAG BOX-UAE</span>*
//         <span className=" text-amber-400">CUSTOM BAG BOX-UAE</span>*
//         <span className=" text-black">CUSTOM BAG BOX-UAE</span>*
//         <span className=" text-purple-700">CUSTOM BAG BOX-UAE</span>*

//       </motion.div>
//     </div>
//   );
// };

// export default TextSlide;
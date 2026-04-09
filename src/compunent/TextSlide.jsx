

// // import { motion } from "framer-motion";

// // const letters = ["C","U","S","T","O","M","","B","A","G","","B","O","X"];

// // const TextSlide = () => {
// //   return (
// //     <div className="relative flex justify-center pt-15 items-center h-80 overflow-hidden">
// //       {/* Animated Background */}
// //       <motion.div
// //         className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
// //         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
// //         transition={{
// //           duration: 20,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //         style={{ backgroundSize: "200% 200%" }}
// //       />

// //       {/* Text */}
// //       <div className="relative flex gap-2 text-5xl md:text-7xl font-extrabold">
// //         {letters.map((letter, index) => (
// //           <motion.span
// //             key={index}
// //             initial={{ y: 0, rotate: 0, opacity: 0, textShadow: "0px 0px 0px #fff" }}
// //             animate={{
// //               y: [0, -20, 0, 20, 0],
// //               rotate: [0, 8, 0, -8, 0],
// //               opacity: [0, 1, 1, 0],
// //               textShadow: [
// //                 "0px 0px 0px #fff",
// //                 "0px 0px 20px #0ff, 0px 0px 40px #0ff",
// //                 "0px 0px 0px #fff",
// //               ],
// //             }}
// //             transition={{
// //               duration: 4,
// //               delay: index * 0.15,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //               repeatDelay: 1,
// //             }}
// //             className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
// //           >
// //             {letter}
// //           </motion.span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TextSlide;



// import { motion } from "framer-motion";

// const letters = ["C","U","S","T","O","M","","B","A","G","","B","O","X"];

// const TextSlide = () => {
//   return (
//     <div className="relative flex justify-center items-center  lg:pt-15 pt-20 h-55 sm:h-64 md:h-80 lg:h-96 overflow-hidden px-4">
//       {/* Animated Background */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
//         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
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
//             className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TextSlide;

import { motion } from "framer-motion";

const TextSlide = () => {
  return (
    <div className="relative overflow-hidden bg-white py-3 pt-29">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-2xl font-semibold tracking-[0.25em] uppercase text-gray-800 italic"
      >
        <span>WELCOME TO</span>*
        <span className=" text-blue-700">CUSTOM BAG BOX-UAE</span>*
        <span className=" text-green-600">CUSTOM BAG BOX-UAE</span>*
        <span className=" text-amber-400">CUSTOM BAG BOX-UAE</span>*
        <span className=" text-black">CUSTOM BAG BOX-UAE</span>*
        <span className=" text-purple-700">CUSTOM BAG BOX-UAE</span>*

      </motion.div>
    </div>
  );
};

export default TextSlide;
import { motion } from "framer-motion";

const letters = [
  "C", "U", "S", "T", "O", "M", " ",
  "B", "A", "G", " ",
  "B", "O", "X", "-", "U", "A", "E"
];

const TextSlide = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-60 sm:h-60 md:h-60 lg:h-60 bg-[#F0FFC2] overflow-hidden lg:pt-13 pt-25">
      {/* 🔥 Welcome Text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-[#DB1A1A ] tracking-[0.3em] mb-1 sm:mb-2"
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
            className="text-[#DB1A1A] drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"          >
            {letter}
          </motion.span>
        ))}

      </div>
    </div>
  );
};

export default TextSlide;


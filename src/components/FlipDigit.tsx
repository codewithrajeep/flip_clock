"use client";

import { motion, AnimatePresence } from "framer-motion";

type FlipDigitProps = {
  digit: string;
};

export default function FlipDigit({ digit }: FlipDigitProps) {
  return (
    <div className="relative w-14 h-16 sm:w-20 sm:h-24 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded bg-gray-200 dark:bg-stone-900 text-black dark:text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={digit}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

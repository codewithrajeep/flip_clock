"use client";

import { motion, AnimatePresence } from "framer-motion";

type FlipDigitProps = {
  digit: string;
};

export default function FlipDigit({ digit }: FlipDigitProps) {
  return (
    <div className="relative w-36 h-40 rounded bg-gray-200 dark:bg-stone-900 text-black dark:text-white text-7xl font-extrabold overflow-hidden">
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

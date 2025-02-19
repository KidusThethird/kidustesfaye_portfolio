"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificateImages = [
  "/common_files/images/certificates/img01.jpg",
  "/common_files/images/certificates/img01.jpg",
  "/common_files/images/certificates/img01.jpg",
  "/common_files/images/certificates/img01.jpg",
  "/common_files/images/certificates/img01.jpg",
  "/common_files/images/certificates/img01.jpg",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(certificateImages.length / 3)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="flex w-full h-full px-4 gap-4">
        <AnimatePresence>
          {certificateImages.slice(index * 3, index * 3 + 3).map((image) => (
            <motion.img
              key={image}
              src={image}
              alt="Certificate"
              className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slideshow;

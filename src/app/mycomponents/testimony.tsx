"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Amazing work! The software runs flawlessly and exceeded my expectations.",
    author: "Sintayehu Muluken",
  },
  {
    text: "A stunning website with seamless functionality. Highly recommended!",
    author: "Yishak Dechasa",
  },
  {
    text: "The landing page you built boosted our conversions instantly!",
    author: "Haylemelekot Girum",
  },
  {
    text: "Clean code, modern design, and excellent support. Perfect experience! Thank you kidus!",
    author: "Gellila Dawit",
  },
  {
    text: "From idea to execution, everything was perfect. Best developer ever!",
    author: "Samuel Amare",
  },
];

const TestimonialSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl font-semibold">
              "{testimonials[index].text}"
            </p>
            <p className="mt-4 text-primaryColor">
              - {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSlideshow;

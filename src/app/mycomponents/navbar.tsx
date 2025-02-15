"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [dropDown, setDropDown] = React.useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      <div className="hidden xmd:flex justify-around py-3">
        <div className="flex text-primaryColor font-bold italic">
          <img
            className="h-10 w-full  "
            src="/common_files/images/logo.png"
            alt="fayida"
          />
          <h1 className="my-auto px-1">Kidus</h1>
          <h1 className="my-auto">Tesfaye</h1>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-8 my-auto text-sm lg:text-base">
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Services",
              "Testimonials",
            ].map((item) => (
              <a
                key={item}
                href=""
                className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href=""
            className="bg-gradient-to-r from-primaryColor to-yellow-500 h-fit my-auto text-white p-2 rounded hover:scale-105 duration-150"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="p-3 xmd:hidden">
        <div className="flex justify-between">
          {dropDown ? (
            <X className="text-primaryColor" onClick={handleDropDown} />
          ) : (
            <Menu className="text-primaryColor" onClick={handleDropDown} />
          )}
          <div className="flex  space-x-3">
            <img
              className="h-10"
              src="/common_files/images/logo.png"
              alt="fayida"
            />
            <h1 className="my-auto text-primaryColor">Kidus Tesfaye</h1>
          </div>
        </div>
      </div>

      {/* Motion Animated Dropdown */}
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed  px-5 bg-primaryColor text-gray-200 w-full z-50 text-center space-y-3 py-5"
          >
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Services",
              "Testimonials",
            ].map((item) => (
              <div key={item}>
                <a>{item}</a>
              </div>
            ))}
            <div>
              <a href="">Contact Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [dropDown, setDropDown] = React.useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleNavClick = () => {
    if (dropDown) setDropDown(false);
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Testimonials"];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden xmd:flex justify-around py-3">
        <div className="flex text-primaryColor font-bold italic">
          <img
            className="h-10 w-full"
            src="/common_files/images/logo.png"
            alt="fayida"
          />
          <h1 className="my-auto px-1">Kidus</h1>
          <h1 className="my-auto">Tesfaye</h1>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-8 my-auto text-sm lg:text-base">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
          {/* Contact Me Button */}
          <a
            href="#Contact"
            className="bg-gradient-to-r from-primaryColor to-yellow-500 h-fit my-auto text-white p-2 rounded hover:scale-105 duration-150"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="p-3 xmd:hidden">
        <div className="flex justify-between">
          {dropDown ? (
            <X className="text-primaryColor" onClick={handleDropDown} />
          ) : (
            <Menu className="text-primaryColor" onClick={handleDropDown} />
          )}
          <div className="flex space-x-3">
            <img
              className="h-10"
              src="/common_files/images/logo.png"
              alt="fayida"
            />
            <h1 className="my-auto text-primaryColor">Kidus Tesfaye</h1>
          </div>
        </div>
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed px-5 bg-primaryColor text-gray-200 w-full z-50 text-center space-y-3 py-5"
          >
            {menuItems.map((item) => (
              <div key={item}>
                <a href={`#${item}`} onClick={handleNavClick}>
                  {item}
                </a>
              </div>
            ))}
            {/* Mobile Contact Me Button */}
            <div>
              <a
                href="#Contact"
                className="bg-gradient-to-r from-primaryColor to-yellow-500 text-white p-2 rounded hover:scale-105 duration-150"
                onClick={handleNavClick}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

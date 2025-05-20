"use client";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { Marcellus } from "next/font/google";
import { motion } from "framer-motion";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });
export default function HeroSection() {
  return (
    <div>
      <div
        className={`xmd:grid grid-cols-2 h-96 text-gray-800 ${marcellus.className}`}
      >
        <div className=" flex">
          <div className=" mx-auto my-auto h-fit w-fit">
            <div className="flex">
              <h1 className="text-3xl ssmd:text-5xl xmd:text-6xl font-bold">
                Full-Stack <br /> Developer
              </h1>
              <img
                className="w-8 h-8 xmd:w-16 xmd:h-16 bottom-0 "
                src="/common_files/images/waving.png"
                alt="kidus"
              />
            </div>
            <div className="py-7">
              <h1 className="text-primaryColor">
                Hi, I'm Kidus Tesfaye. Full-Stack Developer{" "}
              </h1>
            </div>
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kidus-tesfaye-b86766b4/"
                className=" hover:text-primaryColor hover:border-primaryColor border-2 p-2 border-gray-800 rounded-xl"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/KidusThethird"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryColor hover:border-primaryColor border-2 p-2 border-gray-800 rounded-xl"
              >
                <Github />
              </a>
              <a
                href="https://t.me/kidustesfaye3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryColor hover:border-primaryColor border-2 p-2 border-gray-800 rounded-xl"
              >
                <Send />
              </a>
              <a
                href="mailto:kidus.z3rd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryColor hover:border-primaryColor border-2 p-2 border-gray-800 rounded-xl"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10 relative">
          <motion.img
            className="w-52 xmd:w-96 rounded-full border-4 border-gray-800"
            src="/common_files/images/mypicture.jpg"
            alt="kidus"
            animate={{
              scale: [1, 1.05, 1], // Pulsing in size
              rotate: [0, 2, -2, 0], // Slow rotation
            }}
            transition={{
              duration: 12, // Slow and smooth animation
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Fixed Text on Image */}
          <div className="hidden xmd:block absolute text-white text-center font-semibold text-sm bg-opacity-70 bg-primaryColor p-2 rounded-md bottom-16 right-10 transform -translate-x-1/2">
            Computer Engineering <br /> Graduate
          </div>
        </div>
      </div>
    </div>
  );
}

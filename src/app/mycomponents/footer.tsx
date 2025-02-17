import React from "react";
import { Marcellus } from "next/font/google";
import { Linkedin, Github, Mail, Send, Phone } from "lucide-react";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <div className={`bg-gray-200 text-gray-800 ${marcellus.className}`}>
      <div className="w-full ssmd:grid smd:grid-cols-3 xmd:grid-cols-5  px-7 py-12 space-x-4">
        <div className="col-span-2">
          <h1 className="py-3">Kidus Tesfaye</h1>
          <h1 className="text-sm">
            Software developer and Backend specialist for more than 4 years of
            experience in technology world.
          </h1>
          <div className="flex space-x-4">
            <a
              href=""
              className="hover:text-primaryColor  hover:border-primaryColor p-2 border-gray-800 rounded-xl"
            >
              <Linkedin size={25} />
            </a>
            <a
              href=""
              className="hover:text-primaryColor hover:border-primaryColor p-2 border-gray-800 rounded-xl"
            >
              <Github size={25} />
            </a>
            <a
              href=""
              className="hover:text-primaryColor hover:border-primaryColor  p-2 border-gray-800 rounded-xl"
            >
              <Send size={25} />
            </a>
            <a
              href=""
              className="hover:text-primaryColor hover:border-primaryColor  p-2 border-gray-800 rounded-xl"
            >
              <Mail size={25} />
            </a>
          </div>
        </div>

        <div>
          <h1 className="py-3 font-bold text-primaryColor">About Me</h1>
          <div>
            <h1>Software Developer</h1>
            <h1>Cheif Technology Officer</h1>
            <h1>Computer Engineer</h1>
          </div>
        </div>

        <div>
          <h1 className="py-3 font-bold text-primaryColor">Services</h1>
          <div>
            <h1>Web Development</h1>
            <h1>Web Design</h1>
            <h1>System Development</h1>
          </div>
        </div>

        <div>
          <h1 className="py-3 font-bold text-primaryColor">Contact Me</h1>
          <div>
            <div className="flex space-x-4">
              <Mail size={20} /> <h1>kidus.z3rd@gmail.com</h1>
            </div>
            <div className="flex space-x-4">
              <Send size={20} /> <h1>@kz3rd</h1>
            </div>
            <div className="flex space-x-4">
              <Phone size={20} /> <h1>+2519 8704 1885</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center pb-8 text-sm font-bold text-gray-400">
          All Rights Reserved. &copy; Kidus Tesfaye
        </h1>
      </div>
    </div>
  );
}

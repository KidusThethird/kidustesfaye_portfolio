import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-around py-3">
      <div className="flex text-primaryColor font-bold italic">
        <img
          className="h-20 w-full "
          src="/common_files/images/logo.png"
          alt="fayida"
        />
        <h1 className="my-auto px-1 ">Kidus</h1>
        <h1 className="my-auto "> Tesfaye</h1>
      </div>
      <div className="flex space-x-3">
        <div className=" flex space-x-8 my-auto">
          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            About
          </a>

          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            Skills
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            Experience
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-semibold transition-all duration-300 ease-in-out"
          >
            Testimonials
          </a>
        </div>
        <a
          href=""
          className="bg-gradient-to-r from-primaryColor to-yellow-500 h-fit my-auto text-white p-2 rounded hover:scale-105 duration-150"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

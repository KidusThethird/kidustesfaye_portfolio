import React from "react";
import { Marcellus } from "next/font/google";
import { LaptopMinimal, Star, GraduationCap, CodeXml } from "lucide-react";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });

export default function AboutMe() {
  return (
    <div className={` mt-40 py-7 text-gray-700 ${marcellus.className}`}>
      <div>
        <h1 className="text-3xl font-bold text-center">About Me</h1>
        <h1 className="text-center">
          Discover more about my background and experiences.
        </h1>
        <h1 className="text-center font-bold text-primaryColor border-t-4 border-primaryColor w-48 mx-auto mt-4"></h1>
      </div>

      <div className="xmd:grid grid-cols-2 gap-4 mt-10 px-10">
        <div className="shadow-2xl p-5 rounded-lg  ">
          <div className="flex ">
            <LaptopMinimal size={50} className=" my-auto text-primaryColor" />
            <h1 className="my-auto px-4 text-xl font-semibold ">
              Freelancer | Web Development
            </h1>
          </div>
          <div>
            <h1 className="text-sm">
              I am a professional{" "}
              <span className="text-primaryColor">software developer</span> with
              over four years of industry experience. I possess comprehensive
              knowledge of the current technology stack used in modern web
              development.
            </h1>
          </div>
        </div>

        <div className="shadow-2xl p-5 rounded-lg  ">
          <div className="flex ">
            <GraduationCap size={50} className=" my-auto text-primaryColor" />
            <h1 className="my-auto px-4 text-xl font-semibold ">
              Graduated | Computer Engineering
            </h1>
          </div>
          <div>
            <h1 className="text-sm">
              I graduated from Arbaminch University in 2012 with a degree in
              Electrical and Computer Engineering, specializing in the Computer
              stream.
            </h1>
          </div>
        </div>

        <div className="shadow-2xl p-5 rounded-lg  ">
          <div className="flex ">
            <CodeXml size={50} className=" my-auto text-primaryColor" />
            <h1 className="my-auto px-4 text-xl font-semibold ">
              Developer | Over 4 Years
            </h1>
          </div>
          <div>
            <h1 className="text-sm">
              I have worked as a Technology Officer and Developer at Jimla
              Networking Technologies, while also freelancing as a developer for
              over four years.
            </h1>
          </div>
        </div>

        <div className="shadow-2xl p-5 rounded-lg  ">
          <div className="flex ">
            <Star size={50} className=" my-auto text-primaryColor" />
            <h1 className="my-auto px-4 text-xl font-semibold ">
              Certificates
            </h1>
          </div>
          <div>
            <h1 className="text-sm">
              I hold several certificates in software development and computer
              networking, including Cisco certifications.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

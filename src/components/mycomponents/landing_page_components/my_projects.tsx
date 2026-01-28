import React from "react";
import { Marcellus } from "next/font/google";
const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });

export default function MyProjects() {
  const ProjectsDetail = [
    {
      id: 1,
      title: "The Magi Foundation",
      description:
        "The Magi Foundation is a non-profit organization founded in April 2022 by an Australian couple of Ethiopian origin to support children.",
      url: "https://www.themagifoundation.org/",
      image: "/common_files/images/themagi.png",
    },
    {
      id: 2,
      title: "Fayida Academy",
      description:
        "Fayida Academy is an online tutoring system that supports students with their courses by providing clear and easy-to-understand materials.",
      url: "https://fayidaacademy.com/",
      image: "/common_files/images/fayida.png",
    },
    {
      id: 3,
      title: "Fayida Academy Telegram Bot",
      description:
        "This telegram bot is designed to assist students with their courses by providing clear and easy-to-understand materials.",
      url: "https://t.me/fayidaacademy_bot",
      image: "/common_files/images/fayidabot.jpg",
    },
    {
      id: 4,
      title: "Sifen Genral Trading",
      description:
        "Sifen General Trading specializes in coffee export, electronics import, and maintenance services, delivering high-quality products across these sectors.",
      url: "https://www.sifengeneraltrading.com/",
      image: "/common_files/images/siphen.png",
    },
    {
      id: 5,
      title: "Birara Genral Trading",
      description:
        "Birara Dragon Bridge General Trading provides medical supplies, automobiles, heavy machinery, fashion products, furnishings, and consulting services, ensuring quality across multiple industries.",
      url: "https://www.birarageneraltrading.com/",
      image: "/common_files/images/birara.png",
    },
    {
      id: 6,
      title: "Martial Security Services",
      description:
        "Martial Security Service PLC, based in Addis Ababa, provides professional security services built on integrity, customer focus, and excellence, with highly trained staff tailored to client needs.",
      url: "https://www.martialsecurityservice.com/",
      image: "/common_files/images/martial.png",
    },
    {
      id: 7,
      title: "Lemamar Cosmetics",
      description:
        "Lemamar Cosmetics is your go-to destination for premium beauty and skincare products that enhance your natural beauty and self-expression.",
      url: "https://lemamar.vercel.app/",
      image: "/common_files/images/lemamar.png",
    },
  ];

  return (
    <div className={`my-8 text-gray-700 ${marcellus.className}`}>
      <h1 className="text-center text-3xl font-bold">My Projects</h1>
      <h1 className="text-center">
        Here are some of my recent works in web development.
      </h1>
      <h1 className="text-center font-bold text-primaryColor border-t-4 border-primaryColor w-48 mx-auto mt-4"></h1>

      <div className="ssmd:grid ssmd:grid-cols-2 xmd:grid-cols-3 px-7 py-14 gap-10">
        {ProjectsDetail.map((project, index) => (
          <div
            key={project.id}
            className="rounded-lg shadow-2xl overflow-hidden hover:scale-105 duration-500"
          >
            <img className=" w-full " src={project.image} alt="fayida" />
            <div className="p-3">
              <h1 className="text-lg text-primaryColor font-semibold">
                {project.title}
              </h1>
              <h1>{project.description}</h1>
              <a
                href={project.url}
                target="_blank"
                className="text-white bg-primaryColor p-2 rounded mt-2 block w-20 text-center hover:bg-gray-200 hover:text-primaryColor duration-150"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

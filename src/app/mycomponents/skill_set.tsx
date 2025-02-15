import React from "react";
import { Marcellus } from "next/font/google";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPhp,
  FaKey,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa"; // React, HTML, CSS
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si"; // Other frameworks

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });

export default function SkillSet() {
  return (
    <div className={`my-8 ${marcellus.className}`}>
      <h1 className="text-center text-3xl font-bold">Skills & Technologies</h1>
      <h1 className="text-center">
        My primary areas of expertise and interest.
      </h1>
      <h1 className="text-center font-bold text-primaryColor border-t-4 border-primaryColor w-48 mx-auto mt-4"></h1>

      <div className="grid grid-cols-2 px-10 gap-4">
        <div className="border-2 rounded-2xl shadow-2xl my-4">
          <h1 className="text-xl pt-4 px-4">Frontend</h1>
          <div className="flex  flex-wrap space-x-4 p-4 space-y-3">
            <div className="flex space-x-4 mt-4">
              <FaReact
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">React.js</h1>
            </div>
            <div className="flex space-x-4">
              <SiNextdotjs
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Next.js</h1>
            </div>
            <div className="flex space-x-4">
              <SiJavascript
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">JavaScript</h1>
            </div>
            <div className="flex space-x-4">
              <FaHtml5
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">HTML</h1>
            </div>
            <div className="flex space-x-4">
              <h1 className="text-xl bg-primaryColor text-white rounded-full p-2">
                Vi
              </h1>
              <h1 className="my-auto">Vite</h1>
            </div>
            <div className="flex space-x-4">
              <FaCss3
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">CSS</h1>
            </div>
            <div className="flex space-x-4">
              <SiTailwindcss
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Tailwind</h1>
            </div>
            <div className="flex space-x-4">
              <h1 className="text-primaryColor text-3xl font-bold">Sh</h1>
              <h1 className="my-auto">Shad Cn</h1>
            </div>
            <div className="flex space-x-4">
              <SiMui
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Material UI</h1>
            </div>
          </div>
        </div>

        <div className=" border-2 rounded-2xl shadow-2xl my-4">
          <h1 className="text-xl pt-4 px-4">Backend</h1>
          <div className="flex  flex-wrap space-x-4 p-4 space-y-3">
            <div className="flex space-x-4 mt-4">
              <FaNodeJs
                className="text-primaryColor "
                size={36}
                title="React.js"
              />

              <h1 className="my-auto">Node.js</h1>
            </div>
            <div className="flex space-x-4">
              <SiExpress
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Express.js</h1>
            </div>
            <div className="flex space-x-4">
              <FaPhp
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">PhP</h1>
            </div>
            <div className="flex space-x-4">
              <SiJsonwebtokens
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">JWT</h1>
            </div>

            <div className="flex space-x-4">
              <FaShieldAlt
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Passport.js</h1>
            </div>
          </div>
        </div>

        <div className="border-2  rounded-2xl shadow-2xl my-4">
          <h1 className="text-xl pt-4 px-4">DataBase</h1>
          <div className="flex  flex-wrap space-x-4 p-4 space-y-3">
            <div className="flex space-x-4 mt-4">
              <SiMysql
                className="text-primaryColor "
                size={36}
                title="React.js"
              />

              <h1 className="my-auto">MySQL</h1>
            </div>
            <div className="flex space-x-4">
              <SiMongodb
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">MongoDB</h1>
            </div>
            <div className="flex space-x-4">
              <SiPrisma
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Prism ORM</h1>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl shadow-2xl my-4">
          <h1 className="text-xl pt-4 px-4">Others</h1>
          <div className="flex  flex-wrap space-x-4 p-4 space-y-3">
            <div className="flex space-x-4 mt-4">
              <SiGit
                className="text-primaryColor "
                size={36}
                title="React.js"
              />

              <h1 className="my-auto">Git</h1>
            </div>
            <div className="flex space-x-4">
              <SiGithub
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">GitHub</h1>
            </div>
            <div className="flex space-x-4">
              <SiDocker
                className="text-primaryColor "
                size={36}
                title="React.js"
              />
              <h1 className="my-auto">Docker</h1>
            </div>
            <div className="flex space-x-4">
              <h1 className="text-3xl text-primaryColor font-bold">VPS</h1>
              <h1 className="my-auto"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

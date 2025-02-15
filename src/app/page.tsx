import React from "react";
import HeroSection from "./mycomponents/hero";
import AboutMe from "./mycomponents/about_me";
import SkillSet from "./mycomponents/skill_set";
import MyProjects from "./mycomponents/my_projects";
import Footer from "./mycomponents/footer";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillSet />
      <MyProjects />
      <Footer />
    </div>
  );
}

import React from "react";
import HeroSection from "./mycomponents/hero";
import AboutMe from "./mycomponents/about_me";
import SkillSet from "./mycomponents/skill_set";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillSet />
    </div>
  );
}

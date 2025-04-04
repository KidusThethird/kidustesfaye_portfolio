import React from "react";
import HeroSection from "./mycomponents/hero";
import AboutMe from "./mycomponents/about_me";
import SkillSet from "./mycomponents/skill_set";
import MyProjects from "./mycomponents/my_projects";
import Footer from "./mycomponents/footer";
import TestimonialSlideshow from "./mycomponents/testimony";

export default function Page() {
  return (
    <div>
      <section id="Home">
        <HeroSection />
      </section>

      <section id="About">
        <AboutMe />
      </section>

      <section id="Skills">
        <SkillSet />
      </section>

      <section id="Projects">
        <MyProjects />
      </section>

      {/* <section id="Services">
        <Certificates />
      </section> */}

      <section id="Testimonials">
        <TestimonialSlideshow />
      </section>

      <section id="Contact">
        <Footer />
      </section>
    </div>
  );
}

import React from "react";
import HeroSection from "@/components/mycomponents/landing_page_components/hero";
import AboutMe from "@/components/mycomponents/landing_page_components/about_me";
import SkillSet from "@/components/mycomponents/landing_page_components/skill_set";
import MyProjects from "@/components/mycomponents/landing_page_components/my_projects";
import Footer from "@/components/mycomponents/landing_page_components/footer";
import TestimonialSlideshow from "@/components/mycomponents/landing_page_components/testimony";

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

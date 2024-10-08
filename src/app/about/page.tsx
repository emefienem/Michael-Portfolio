import Loading from "@/components/Loading";
import React from "react";
import AboutPageContent from "./AboutPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael - About",
  description: "This page shows Michael's background as a person and engineer",
  creator: "Michael Emefienem",
};

const About = () => {
  return (
    <main className="about bg-primary min-h-screen lg:h-screen w-screen md:flex max-w-[1440px] mx-auto text-secondary">
      <Loading />
      {/* so that the metadata is server rendered and the animation is client only */}
      <AboutPageContent />
    </main>
  );
};

export default About;

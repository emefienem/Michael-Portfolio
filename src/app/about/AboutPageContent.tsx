"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AboutContent = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelectorAll(".gsap-opacity"), {
        duration: 1,
        opacity: 0,
        ease: "power3",
        stagger: 0.1,
        delay: 1,
      });
    }
  }, []);

  return (
    <section className="lg:flex gap-20 md:pr-10" ref={aboutRef}>
      <div className="flex-[2] mt-10 md:mt-20 p-5 w-full md:px-20">
        <h2 className="text-[25vw] lg:text-[15vw] leading-[100%] sonder-font text-secondary">
          About
        </h2>
        <p className="text-3xl md:text-5xl font-light gsap-opacity sonder-font">
          I&apos;m Michael. Engineer, maker, and problem solver.
        </p>

        <p className="mt-3 text-xs lg:text-sm gsap-opacity">
          Hey there! Once upon a tech-time, I always wanted to know what
          websites were made of.
        </p>
        <p className="mt-3 text-xs lg:text-sm gsap-opacity">
          Now, it&apos;s 2024, and I&apos;ve traded in my curiosity for the
          development of applications. My journey hasn&apos;t just been about
          coding—it&apos;s been about bridging the gap, translating designs into
          tangible, functional applications. From developing web and mobile
          applications, to debugging the mischievous little gremlins (yes,
          bugs!), every project is an adventure.
        </p>
        <p className="text-sm mt-5 gsap-opacity">
          - Favorite quote by Chris Coyier
        </p>
        <blockquote className="indent-10 max-w-lg text-2xl lg:text-3xl mt-5 gsap-opacity sonder-font">
          &quot;The best engineers build the bridge between design and
          technology. &quot;
        </blockquote>
        <p className="mt-10 text-xs lg:text-sm gsap-opacity">
          And that&apos;s the quote I live by. Whether it was optimizing the
          applications building user-centric designs.
        </p>
      </div>

      <div className="flex-[1] p-5 md:mt-10 md:px-20 lg:px-0">
        <h3 className="lg:mt-20 text-xl md:text-2xl uppercase gsap-opacity sonder-font">
          Skills
        </h3>
        <p className="text-xs md:text-sm gsap-opacity">
          Software Development / Web development / Agile methodologies /
          Collaboration.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;

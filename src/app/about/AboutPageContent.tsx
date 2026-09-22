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
          I&apos;m Michael. Engineer, builder, and problem solver.
        </p>

        <p className="mt-3 text-xs lg:text-sm gsap-opacity">
          I&apos;m a software engineer focused on building products and
          backend systems that solve real problems. I enjoy taking ideas from
          an early concept to something people can actually use.
        </p>

        <p className="mt-3 text-xs lg:text-sm gsap-opacity">
          I work primarily with TypeScript, Node.js, Python, React, Next.js,
          PostgreSQL, Redis, and modern cloud infrastructure. My work spans
          product development, APIs, distributed systems, payments, and
          developer-focused platforms.
        </p>

        <p className="mt-3 text-xs lg:text-sm gsap-opacity">
          I&apos;m also the founder and engineer behind EBINUM, a payment
          intelligence platform focused on helping businesses understand,
          explain, and optimize payment outcomes.
        </p>

        <p className="mt-10 text-xs lg:text-sm gsap-opacity">
          I care about writing software that is reliable, maintainable, and
          useful—not just software that works once.
        </p>
      </div>

      <div className="flex-[1] p-5 md:mt-10 md:px-20 lg:px-0">
        <h3 className="lg:mt-20 text-xl md:text-2xl uppercase gsap-opacity sonder-font">
          Skills
        </h3>

        <p className="text-xs md:text-sm gsap-opacity">
          TypeScript / Node.js / Python / React / Next.js / PostgreSQL /
          Prisma / Redis / REST APIs / Microservices / Docker / System Design
          / Git.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;

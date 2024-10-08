"use client";
import { projectLinks } from "@/constants";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ProjectsPageContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(
        ".link, .gsap-opacity"
      );
      const tl = gsap.timeline({ defaults: { ease: "power3" } });

      tl.from(elements, {
        duration: 1,
        y: 10,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
      });

      //   return () => {
      //     tl.kill();
      //   };
    }
  }, []);

  return (
    <div
      className="flex-1 justify-center flex flex-col lg:flex-row lg:items-end mt-20"
      ref={containerRef}
    >
      <section className="p-5 flex-1 md:m-10 lg:m-20">
        <h3 className="gsap-opacity text-sm uppercase md:text-base">
          Projects
        </h3>
        <p className="gsap-opacity text-xs mt-5 md:text-sm">
          This is a showcase of my recent projects in a variety of fields
          including Web app development and Saas development.
        </p>
        <p className="gsap-opacity text-xs mt-5 md:text-sm">
          The world of application development is constantly evolving, and so
          has my role over the last years. I&apos;m still learning and gaining
          new skills every day.
        </p>
      </section>

      <section className="mt-5 md:mx-10 md:my-5 p-5 flex-[2]">
        <ul className="flex flex-col gap-5 text-[10vw] md:text-[10vw] lg:text-[6vw] leading-[100%]">
          {projectLinks.map(({ href, title, role }) => (
            <div key={href}>
              <li
                key={href}
                className="origin-left lg:hover:scale-[1.04] transition-[.5s_all_ease-in-out]"
              >
                <a
                  href={href}
                  className="uppercase link inline-block sonder-font"
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </li>
              <p className="text-xs gsap-opacity">{`- ${role}`}</p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPageContent;

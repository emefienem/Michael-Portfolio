"use client";
import { contactLinks } from "@/constants";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ContactPageContent = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.from(contactRef.current.querySelectorAll(".gsap-opacity"), {
        duration: 1,
        opacity: 0,
        ease: "power3",
        stagger: 0.1,
        delay: 1,
      });
    }
  }, []);
  return (
    <div className="max-w-xl mt-40 p-5 md:mx-20" ref={contactRef}>
      <h2 className="text-[30vw] md:text-[15vw] leading-[100%] sonder-font">
        Hello.
      </h2>
      <p className="gsap-opacity text-sm mt-10">
        I&apos;m always open to discussing new projects, innovative ideas, or
        collaborative opportunities. If you have something in mind or just want
        to say hello, don&apos;t hesitate!
      </p>
      <div className="gsap-opacity text-sm mt-5">
        Email:{" "}
        <a
          href="mailto:emefienemmichael@gmail.com"
          className="underline hover:line-through"
        >
          emefienemmichael@gmail.com
        </a>
      </div>
      <div className="gsap-opacity text-sm mt-5">
        On the internet:
        {contactLinks.map((link, index) => (
          <span key={index}>
            {index > 0 && " / "}
            <a
              href={link.href}
              className="underline hover:line-through"
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContactPageContent;

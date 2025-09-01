"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Loading from "@/components/Loading";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current.querySelectorAll(".link, .opacity"), {
        duration: 1,
        y: 10,
        opacity: 0,
        ease: "power3",
        stagger: 0.1,
        delay: 1,
      });
    }
  }, []);

  return (
    <main
      ref={containerRef}
      className="home bg-primary min-h-[calc(100dvh-50px)] lg:h-screen w-screen"
    >
      <Loading />
      <div className=" justify-center flex flex-col lg:flex-row lg:items-end mt-24">
        <section className="p-5 flex-1 md:m-10 lg:m-20">
          <h3 className="opacity text-sm uppercase md:text-base font-medium">
            Michael Emefienem
          </h3>
          <p className="opacity text-xs mt-5 md:text-sm">Engineer (web).</p>
          <p className="opacity text-xs mt-5 md:text-sm">
            Passionate about leveraging technology to solve complex problems.
          </p>
          <div className="mt-5 flex gap-4 opacity">
            <a
              href="/Michael Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-lg shadow hover:scale-105 transition"
            >
              Preview Resume
            </a>

            <a
              href="/Michael Resume.pdf"
              download="Michael Resume.pdf"
              className="px-4 py-2 rounded-lg shadow hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        <nav className="mt-5 md:m-10 p-5 flex-[2.3]">
          <ul className="flex flex-col gap-5 text-[15vw] md:text-[15vw] lg:text-[11vw] leading-[100%] uppercase">
            {["/projects", "/about", "/contact"].map((path, index) => (
              <li
                key={index}
                className="origin-left lg:hover:scale-[1.01] transition-[.5s_all_ease-in-out] sonder-font"
              >
                <Link
                  href={path}
                  passHref
                  className="link inline-block cursor-pointer"
                >
                  {path.substring(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}

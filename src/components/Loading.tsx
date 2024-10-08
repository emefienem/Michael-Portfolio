"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  invertedColor?: boolean;
}

const Loading = ({ invertedColor }: Props) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    gsap.to(".gsap-animate", {
      y: "-100%",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className={`gsap-animate z-50 h-screen w-screen fixed left-0 top-0 flex items-center justify-center ${
        invertedColor ? "bg-primary" : "bg-secondary"
      }`}
    ></div>
  );
};

export default Loading;

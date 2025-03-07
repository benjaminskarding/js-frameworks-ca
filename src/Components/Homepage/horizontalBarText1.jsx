import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalBarText1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        rotateX: 90,
        transformOrigin: "bottom",
      },
      {
        opacity: 1,
        rotateX: 0,
        ease: "power2.out",
        duration: 1.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-5xl md:text-7xl text-center md:text-start"
    >
      THE DESTINATION FOR ALL THINGS UNIQUE, EVERYDAY, AND EVERYTHING IN
      BETWEEN.
    </div>
  );
}

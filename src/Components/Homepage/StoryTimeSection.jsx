import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryTime() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      // If mobile, make elements instantly visible
      document
        .querySelectorAll(".header-1, .header-2, .header-3")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.visibility = "visible";
        });
      return;
    }

    // Run GSAP animations only on larger screens
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
      },
    });

    tl.set(".header-1, .header-2, .header-3", { visibility: "visible" })
      .fromTo(
        ".header-1",
        { x: -250, opacity: 0 },
        { x: 0, opacity: 1, ease: "power3.out", duration: 3 }
      )
      .fromTo(
        ".header-2",
        { x: 250, opacity: 0 },
        { x: 0, opacity: 1, ease: "power3.out", duration: 3 },
        "-=1.2"
      )
      .fromTo(
        ".header-3",
        { opacity: 0 },
        { opacity: 1, ease: "power3.out", duration: 4 },
        "-=1.2"
      );
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center text-center">
      <h2 className="text-5xl md:text-9xl leading-[1.2]">
        <span className="header-1 block">THE JOY</span>
        <span className="header-2 block">of SHOPPING</span>
        <span className="header-3 block"> WITHOUT LIMITS</span>
      </h2>

      {/* Square Dot Positioned Between h2 and p */}
      <div className="w-2 h-2 bg-black my-14"></div>

      <p className="font-oxygen text-xl font-light mx-2 lg:mx-[5rem]">
        At TIÐVAR, we believe that every product has a story, and behind every
        great find is craftsmanship, innovation, and quality. Whether it’s
        everyday essentials or rare treasures, we curate goods that elevate your
        lifestyle. From the products you need to the ones you never knew you
        wanted—discover something exceptional, every time you shop.
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

import About from "@/components/About";
import TextWriter from "@/components/Projects";
import Image from "next/image";
import Projects from "@/components/Projects";


export default function Hero() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  function handleProject() {
    const project = document.querySelector("#project")
    project.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <section
        className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 text-center text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero.png')" }}
        id="home"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 flex flex-col items-center overflow-visible">
          <img
            src="/images/profile/sk.png"
            alt="Swasthik"
            width="150"
            height="150"
            style={{ zIndex: 20, position: "relative", borderRadius: "9999px", marginBottom: "1rem" }}
          />


          <h1
            ref={ref}
            className={`text-4xl font-bold mb-2 typewriter-text ${isVisible ? "animate" : ""
              }`}
          >
            Hey, I’m Swasthik
          </h1>
          <p className="text-lg text-gray-200 max-w-xl">
            A Web Developer on a mission to turn caffeine into code and dreams into deploys.
          </p>
          <button
            className="mt-6 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            onClick={handleProject}
          >
            View Projects
          </button>
        </div>
      </section>

      <About />

      <Projects />
    </div>
  );
}

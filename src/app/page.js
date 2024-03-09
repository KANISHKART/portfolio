"use client";
import { useState, useEffect, useRef } from "react";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Home from "./home/page";
import Navbar from "./navbar/navbar";
import Projects from "./projects/page";
import Image from "next/image";
import Skills from "./skills/page";

export default function Page() {
  const scrollRef = useRef();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);

  return (
    <div className="portfolio-content" ref={scrollRef}>
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        {showScrollTop && (
          <div className="move-top" onClick={() => scrollTop()}>
            <Image
              src="scroll-top.svg"
              width={50}
              height={50}
              alt="scroll-top"
            />
          </div>
        )}
      </main>
    </div>
  );
}

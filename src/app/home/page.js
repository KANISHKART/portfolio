"use client";
import { useState, useEffect } from "react";
import "./home.css";
import Image from "next/image";

export default function Home() {
  // const [windowDimensions, setHW] = useState({
  //   winWidth: "",
  //   winHeight: "",
  // });

  // const detectSize = () => {
  //   setHW({
  //     winWidth: window.innerWidth,
  //     winHeight: window.innerHeight,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", detectSize);

  //   return () => {
  //     window.removeEventListener("resize", detectSize);
  //   };
  // }, [windowDimensions]);

  return (
    <section id="home" className="hero-block">
      <div className="container">
        <div className="header-container">
          <div className="hero-background"></div>
          <p>Kanishkar Thirunavukkarasu</p>
        </div>

        <div className="role-container">
          I&apos;m
          <span className="typewrite-container">Full Stack Developer</span>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/kanishkarthirunavukkarasu" target="_blank">
            <Image src="linkedin.svg" height={40} width={40} alt="linkedin" />
          </a>
          <a href="https://github.com/KANISHKART" target="_blank">
            {" "}
            <Image src="github.svg" height={40} width={40} alt="github" />
          </a>
          <a href="mailto:kanishkar.thiruna@gmail.com" target="_blank" >
            <Image src="email.svg" height={40} width={40} alt="email" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Home from "./home/page";
import Navbar from "./navbar/navbar";
import Projects from "./projects/page";

export default function Page() {
  // const updateMousePointer = (e) => {
  //   document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
  //   document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");

  //   console.log(e.clientX);
  //   console.log(e.clientY);
  // };

  return (
    <div className="header-tops">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

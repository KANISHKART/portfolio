"use client";
import { useState, useEffect } from "react";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Home from "./home/page";
import Navbar from "./navbar/navbar";
import Projects from "./projects/page";

export default function Page() {
  return (
    <div className="portfolio-content">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

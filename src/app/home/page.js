"use client";
import { useState, useEffect } from "react";
import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="hero-block">
      <div className="container">
        <div className="hero-greet">
          <p> Hello! 👋</p>
        </div>

        <div className="hero-summary">
          <p>
            I&apos;m <strong>Kanishkar T</strong>, an experienced software
            engineer focused on designing & developing data intensive applications.🧑‍💻
            {/* <span className="typewrite-container">Full Stack Developer</span>  */}
          </p>
        </div>
      </div>
    </section>
  );
}

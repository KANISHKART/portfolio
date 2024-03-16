"use client";
import "./home.css";

import { useEffect, useState } from "react";

export default function Home() {
  const skillSet = ["Full Stack Development💻", "Swimming🏊‍♂️", "Cricket🏏"];

  const [skill, setSkill] = useState(skillSet[0]);

  const [idx, setIdx] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx((prev) => (prev + 1) % skillSet.length);
      setSkill(() => skillSet[idx]);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [skill]);

  return (
    <section id="home" className="hero-block">
      <div className="container">
        <div className="hero-greet">
          <p> Hi! 👋</p>
          <div className="hero-summary">
            <p>
              I&apos;m <strong>Kanishkar</strong>, an experienced software
              engineer focused on building scalable, performant, and resilient
              applications 🧑‍💻
            </p>
          </div>

          <div className="hero-skill">
            <div className="skill-title">Good at :&nbsp;</div>
            <div className="typewrite-container">{skill}</div>
          </div>

          <div className="hero-connect">
            📬 : &nbsp;
            <a href="mailto:kanishkar.t05@gmail.com" target="_blank">
              kanishkar@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

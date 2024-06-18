"use client";
import "./home.css";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const skillSet = ["Full Stack Development", "Swimming", "Cricket"];

  const [skill, setSkill] = useState("");

  const [idx, setIdx] = useState(0);

  const textIndex=useRef(0);

  const displayText=useRef("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (textIndex.current < skillSet[idx].length) {
        displayText.current+=skillSet[idx].charAt(textIndex.current);
        setSkill(() => displayText.current);
        textIndex.current+=1;
      } else {
        clearInterval(timeInterval);
        setTimeout(() => {
          setSkill(() => "");
          setIdx((prev) => (prev + 1) % skillSet.length);
          textIndex.current=0;
          displayText.current="";
        }, 2000);
      }
    }, 20);

    return () => clearInterval(timeInterval);
  }, [idx]);

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

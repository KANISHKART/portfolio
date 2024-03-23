"use client"
import { useState, useEffect} from "react";
import "./home.css";

export default function Home() {
  const [windowDimensions, setHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimensions]);

  return (
    <div className="container">
      <div className="header-container">
        {windowDimensions.winWidth > 500 && <p>Kanishkar Thirunavukkarasu</p>}
        {windowDimensions.winWidth < 500 && <p>Kanishkar T</p>}
      </div>
      <div className="role-container">
        I&apos;m <span class="typewrite-container">Full Stack Developer</span>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/kanishkarthirunavukkarasu">
          LinkedIn
        </a>
        <a href="https://github.com/KANISHKART">Github</a>
        <a href="mailto:kanishkar.thiruna@gmail.com">Mail</a>
      </div>
    </div>
  );
}

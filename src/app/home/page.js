"use client";
import "./home.css";

export default function Home() {
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
            <div className="typewrite-container">Full Stack Developement</div>
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

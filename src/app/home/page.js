"use client";
import { useState, useEffect } from "react";
import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="hero-block">
      <div className="container">
        <div className="header-container">
          <p> Hello! 👋</p>
        </div>
        <div className="header-container">
          <p> I&apos;m Kanishkar Thirunavukkarasu,</p>
        </div>

        <div className="role-container">
          a<span className="typewrite-container">Full Stack Developer</span>
        </div>
      </div>
    </section>
  );
}

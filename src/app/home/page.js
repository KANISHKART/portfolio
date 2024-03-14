"use client";
import { useState, useEffect } from "react";
import "./home.css";
import Image from "next/image";

export default function Home() {
  
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
      </div>
    </section>
  );
}

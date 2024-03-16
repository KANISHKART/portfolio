import Image from "next/image";
import HamBurger from "./hamBurger";
import "./navbar.css";
import { useState, useEffect, useCallback } from "react";
export default function Navbar() {
  const [showHamBurger, setShowHamBurger] = useState(false);

  const [showBurgerContent, setShowBurgerContent] = useState(false);

  const handleScreenResize = useCallback((event) => {
    const width = event ? event.srcElement.innerWidth : window.innerWidth;
    if (width <= 900) {
      setShowHamBurger(true);
    } else {
      setShowBurgerContent(false);
      setShowHamBurger(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [handleScreenResize, showBurgerContent]);

  return (
    <header className="nav-header">
      <div className="logo-container">
        <a href="#home">
          <div className="logo-text"> K</div>
        </a>
      </div>

      {!showHamBurger && (
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="resume-button" type="button">
            Resume
          </button>
        </nav>
      )}

      {showHamBurger && (
        <div
          className="burger"
          onClick={() => setShowBurgerContent((prev) => !prev)}
        >
          <div className="hamburger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      )}

      {showBurgerContent && (
        <HamBurger
          handleClose={setShowBurgerContent}
          isOpen={showBurgerContent}
        />
      )}
    </header>
  );
}

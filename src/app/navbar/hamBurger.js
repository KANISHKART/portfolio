import { createPortal } from "react-dom";
import "./hamBurger.css";
import { useEffect } from "react";
import Image from "next/image";

export default function HamBurger({ showBurgerContent }) {
  useEffect(() => {
    if (showBurgerContent) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBurgerContent]);

  const closeHam = () => {
    showBurgerContent(false);
  };

  return createPortal(
    <div className="sidebar-nav">
      <div className="close-action">
        <span className="close-icon" onClick={closeHam}>
          {" "}
        </span>
      </div>

      <nav className="ham-content">
        <a onClick={closeHam} href="#home">
          Home
        </a>
        <a onClick={closeHam} href="#experience">
          Experience
        </a>
        <a onClick={closeHam} href="#projects">
          Projects
        </a>
        <a onClick={closeHam} href="#contact">
          Skills
        </a>
        <a onClick={closeHam} href="#contact">
          Contact
        </a>
      </nav>

      <div className="button-action">
        <button className="resume-button" type="button">
          Resume
        </button>
      </div>
    </div>,
    document.body
  );
}

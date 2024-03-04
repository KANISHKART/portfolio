import { createPortal } from "react-dom";
import "./hamBurger.css";
import { useEffect,useState } from "react";

export default function HamBurger({handleClose, isOpen} ) {

  const [closingAnimation, setclosingAnimation]=useState(true);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeHam = () => {
    setclosingAnimation(false);
    setTimeout(() => {
      handleClose(false);
    }, 200);
  };

  return createPortal(
    <div className={`sidebar-nav ${closingAnimation? `open` :`close`}`}>
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
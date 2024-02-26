import HamBurger from "./hamBurger";
import "./navbar.css";
import { useState, useEffect, useCallback } from "react";
export default function Navbar() {


  const [showHamBurger, setShowHamBurger] = useState(false);

  const [showBurgerContent, setShowBurgerContent] = useState(false);

  const handleScreenResize= useCallback(event =>{

    const width = event ? event.srcElement.innerWidth : window.innerWidth;
    if(width <800){
      setShowHamBurger(true);
    }
    else{
      setShowBurgerContent(false)
      setShowHamBurger(false);
    }
  },[])

  useEffect(() => {

    window.addEventListener("resize", handleScreenResize);

    handleScreenResize();

    return ()=>{
      window.removeEventListener("resize", handleScreenResize)
    }


  }, [handleScreenResize, showBurgerContent]);

  return (
    <header className="nav-header">
      {!showHamBurger && (
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Skills</a>
          <a href="#contact">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      )}

      {showHamBurger && (
        <div className="burger" onClick={()=>setShowBurgerContent((prev)=>(!prev))} >
          <div className="hamburger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

       
      )}

    {showBurgerContent && <HamBurger showBurgerContent={setShowBurgerContent}/>}

    </header>
  );
}

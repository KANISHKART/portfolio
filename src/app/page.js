import Contact from "./contact/page";
import Experience from "./experience/page";
import Home from "./home/page";
import Navbar from "./navbar/navbar";
import Projects from "./projects/page";

export default function Page() {
  return (
    <div className="header-tops ">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

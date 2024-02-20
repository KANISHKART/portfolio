import "./navbar.css";

export default function Navbar() {
  return (
    <header className="nav-header">
      <nav className="navbar">
      <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

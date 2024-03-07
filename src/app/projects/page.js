import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-block">
      <div className="container">
        <span className="title">Projects Highlights</span>

        <div className="wrapper">
          <div className="item">Bitcoin-tracker</div>
          <div className="item">Craigslist UX</div>
          <div className="item">AES Encryption</div>
          <div className="item">System Design</div>
          <div className="item">Notes App</div>
        </div>
      </div>
    </section>
  );
}

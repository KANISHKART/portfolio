import "./skills.css";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../database/skills.json";

export default function Skills() {
  const [showSkills, setShowSkills] = useState(skillsData);

  return (
    <section id="skills" className="skills-block">
      <div className="container">
        <span className="title">Skilled at</span>

        <div className="skills-filter">
          <div className="filter-item">All</div>
          <div className="filter-item">Languages</div>
          <div className="filter-item">Databases</div>
          <div className="filter-item">Frameworks</div>
          <div className="filter-item">Webdev</div>
        </div>

        <div className="wrapper">
          {showSkills &&
            showSkills.map((skill) => {
              return (
                <div className="item" key={skill.id}>
                  <Image
                    src={skill.path}
                    alt={skill.name}
                    width={60}
                    height={60}
                    draggable={false}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

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

        {showSkills &&
          showSkills.map((skill) => {
            return (
              <div className="wrapper" key={skill.id}>
                <div className="item">
                  <Image
                    src={skill.path}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

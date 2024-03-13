import "./skills.css";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../database/skills.json";

export const FILTER_SKILLS = {
  ALL: { name: "All", active: true },
  LANGUAGE: { name: "Languages", active: false },
  DATABASES: { name: "Databases", active: false },
  FRAMEWORKS: { name: "Frameworks", active: false },
  WEBDEV: { name: "Web Dev", active: false },
};

export default function Skills() {
  const [showSkills, setShowSkills] = useState(skillsData);

  const filterSkills = (filterSkill) => {
    if (filterSkill === FILTER_SKILLS.ALL.name) setShowSkills(skillsData);
    else
      setShowSkills(() => {
        return skillsData.filter((x) => {
          if (x.type === filterSkill) return x;
        });
      });
  };

  return (
    <section id="skills" className="skills-block">
      <div className="container">
        <span className="title">Skilled at</span>

        <div className="skills-filter">
          <div
            className={`filter-item ${
              FILTER_SKILLS.ALL.active ? "active" : ""
            }`}
            onClick={() => filterSkills(FILTER_SKILLS.ALL.name)}
          >
            {FILTER_SKILLS.ALL.name}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.LANGUAGE.name)}
          >
            {FILTER_SKILLS.LANGUAGE.name}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.DATABASES.name)}
          >
            {FILTER_SKILLS.DATABASES.name}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.FRAMEWORKS.name)}
          >
            {FILTER_SKILLS.FRAMEWORKS.name}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.WEBDEV.name)}
          >
            {FILTER_SKILLS.WEBDEV.name}
          </div>
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

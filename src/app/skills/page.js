import "./skills.css";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../database/skills.json";

export const FILTER_SKILLS = {
  ALL: "All",
  LANGUAGE: "Languages",
  DATABASES: "Databases",
  FRAMEWORKS: "Frameworks",
  WEBDEV: "Webdev",
};

export default function Skills() {
  const [showSkills, setShowSkills] = useState(skillsData);

  const filterSkills = (type) => {};

  return (
    <section id="skills" className="skills-block">
      <div className="container">
        <span className="title">Skilled at</span>

        <div className="skills-filter">
          <div
            className="filter-item active"
            onClick={() => filterSkills(FILTER_SKILLS.ALL)}
          >
            {FILTER_SKILLS.ALL}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.LANGUAGE)}
          >
            {FILTER_SKILLS.LANGUAGE}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.DATABASES)}
          >
            {FILTER_SKILLS.DATABASES}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.FRAMEWORKS)}
          >
            {FILTER_SKILLS.FRAMEWORKS}
          </div>
          <div
            className="filter-item"
            onClick={() => filterSkills(FILTER_SKILLS.WEBDEV)}
          >
            {FILTER_SKILLS.WEBDEV}
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

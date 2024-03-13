import "./skills.css";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../database/skills.json";

export default function Skills() {
  const [showSkills, setShowSkills] = useState(skillsData);

  const [showType, setShowType] = useState([
    { id: 1, name: "All", active: true },
    { id: 2, name: "Languages", active: false },
    { id: 3, name: "Databases", active: false },
    { id: 4, name: "Frameworks", active: false },
    { id: 5, name: "Web Dev", active: false },
  ]);

  const filterSkills = (filterSkill) => {
    if (filterSkill === "All") setShowSkills(skillsData);
    else
      setShowSkills(() => {
        return skillsData.filter((x) => {
          if (x.type === filterSkill) return x;
        });
      });

    setShowType(() => {
      return showType.map((x) => {
        return x.name === filterSkill
          ? { ...x, active: true }
          : { ...x, active: false };
      });
    });

  };

  return (
    <section id="skills" className="skills-block">
      <div className="container">
        <span className="title">Skilled at</span>

        <div className="skills-filter">
          {showType &&
            showType.map((type) => {
              return (
                <div
                  key={type.id}
                  className={`filter-item ${type.active ? "active" : ""}`}
                  onClick={() => filterSkills(type.name)}
                >
                  {type.name}
                </div>
              );
            })}
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

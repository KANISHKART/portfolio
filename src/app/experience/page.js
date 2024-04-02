"use client";
import { useState, useEffect } from "react";
import "./experience.css";
import Image from "next/image";
import experience from "../database/data.json";

export default function Experience() {
  const [experienceData, setExperienceData] = useState(experience);

  const [showExp, setShowExp] = useState(0);

  const showData = (id) => {
    setExperienceData((data) => {
      return data.map((item) => {
        return item.id === id
          ? { ...item, active: true }
          : { ...item, active: false };
      });
    });

    setShowExp(0);

    console.log(experienceData);
  };

  const showRole = (length) => {
    setShowExp((prev) => (prev + 1) % length);
  };

  return (
    <section id="experience" className="experience-block">
      <div className="container">
        <span className="title">Where I&apos;ve worked</span>

        <div className="companies">
          {experienceData &&
            experienceData.map((data, index) => (
              <div
                className={`company${data.active ? " active" : ""}`}
                key={`company-${data.id}-${index}`}
                onClick={() => showData(data.id)}
              >
                {data.name}
              </div>
            ))}
        </div>

        <div className="experience-info">
          {experienceData &&
            experienceData.map((data, coindex) =>
              data.active ? (
                <>
                  {data.experience.length > 1 && (
                    <div
                      className="scroll-left-container"
                      onClick={() => showRole(data.experience.length)}
                    >
                      <Image
                        src="./next.svg"
                        width={20}
                        height={20}
                        alt="next-exp"
                      />
                    </div>
                  )}
                  {data.experience[showExp] && (
                    <div className="company-block">
                      <div className="experience-title">
                        {data.experience[showExp].title}
                      </div>

                      <div className="experience-duration">
                        {data.experience[showExp].date}
                      </div>

                      <div className="experience-summary">
                        <ul>
                          {data.experience[showExp].summary.map(
                            (point, index) => (
                              <li key={`summary-${index}-${index}`}>{point}</li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="experience-skills">
                        {data.experience[showExp].skills.map((skill, index) => {
                          return (
                            <div className="skill-tag" key={`skill-${index}`}>
                              {skill}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {/* {data.experience.length > 1 && (
                    <div
                      className="scroll-right-container"
                      onClick={() => showRole(data.experience.length)}
                    >
                      <Image
                        src="./previous.svg"
                        width={20}
                        height={20}
                        alt="next-exp"
                      />
                    </div>
                  )} */}
                </>
              ) : (
                <> </>
              )
            )}
        </div>
      </div>
    </section>
  );
}

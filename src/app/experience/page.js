import { useState, useEffect } from "react";
import "./experience.css";

import experience from "../database/data.json";
import { data } from "autoprefixer";

export default function Experience() {
  const [experienceData, setExperienceData] = useState(experience);

  const showData = (id) => {
    setExperienceData((data) => {
      return data.map((item) => {
        return item.id === id
          ? { ...item, active: true }
          : { ...item, active: false };
      });
    });
  };

  return (
    <section id="experience" className="experience-block">
      <div className="container">
        <span className="title">Where I&apos;ve worked</span>

        <div className="companies">
          {experienceData &&
            experienceData.map((data) => (
              <div
                className={`company${data.active ? " active" : ""}`}
                key={data.id}
                onClick={() => showData(data.id)}
              >
                {data.name}
              </div>
            ))}
        </div>

        <div className="expereince-summary">
          {experienceData &&
            experienceData.map((data) =>
              data.active ? (
                <div className="company-block" key={data.id}>
                  <div className="experience-title">{data.title}</div>

                  <div className="experience-duration">{data.date}</div>

                  <div className="experience-summary">
                    <ul>
                      {data.summary.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
        </div>
      </div>
    </section>
  );
}

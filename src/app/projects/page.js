"use client";
import "./projects.css";
import { useState } from "react";
import projects from "../database/project.json";
import Image from "next/image";

export default function Projects() {
  const [projectData, setProjectData] = useState(projects);

  return (
    <section id="projects" className="projects-block">
      <div className="container">
        <span className="title">Projects Highlights</span>

        <div className="wrapper">
          {projectData != null &&
            projectData.map((data, index) => {
              return (
                <a
                  key={`project-${data.id}-${index}`}
                  href={data.link}
                  target="_blank"
                >
                  <div className="item">
                    <div className="project-title">
                      {data.name}
                      <Image
                        src="./link.svg"
                        width={30}
                        height={30}
                        color="grey"
                        alt="link"
                      />
                    </div>

                    <div className="project-summary">{data.summary}</div>

                    <div className="project-tags">
                      {data.tags != null &&
                        data.tags.map((tag, index) => {
                          return (
                            <div
                              className="tag-value"
                              key={`tag-${tag}-${index}`}
                            >
                              {tag}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
}

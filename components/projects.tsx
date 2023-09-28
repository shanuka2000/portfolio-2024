import React from "react";
import SectionHeading from "./section-heading";
import { projectData } from "@/lib/data";
import Project from "@/components/project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

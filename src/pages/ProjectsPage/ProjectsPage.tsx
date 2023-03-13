import React from "react";
import H2 from "../../components/H2";
import ProjectTile from "../../components/ProjectTle/ProjectTile";
import { PROJECTS_LIST } from "../../helpers/consts";
import { StyledProjectsPage, StyledProjectsWrapper } from "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <StyledProjectsPage>
      <H2>Projects</H2>
      <StyledProjectsWrapper>
        {PROJECTS_LIST.map((project) => (
          <ProjectTile
            title={project.title}
            desc={project.desc}
            links={project.url}
          />
        ))}
      </StyledProjectsWrapper>
    </StyledProjectsPage>
  );
};

export default ProjectsPage;

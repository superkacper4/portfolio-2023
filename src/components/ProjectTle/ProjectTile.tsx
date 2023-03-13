import React from "react";
import A from "../A";
import P from "../P";
import {
  StyledA,
  StyledProjectLink,
  StyledProjectTile,
} from "./ProjectTile.css";
import H3 from "../H3";
import AnimationWrapper from "../AnimationWrapper";

interface ProjectTileProps {
  title: string;
  desc: string;
  links: string[];
}

const ProjectTile = ({ title, desc, links }: ProjectTileProps) => {
  return (
    <StyledProjectTile>
      <AnimationWrapper>
        <H3>{title}</H3>
      </AnimationWrapper>
      <AnimationWrapper>
        <P>{desc}</P>
      </AnimationWrapper>

      <AnimationWrapper>
        {links.map((link, index) => (
          <StyledProjectLink>
            <StyledA href={link} about="_blank">
              {index % 2 === 0 ? "Repository" : "Live"}
            </StyledA>
          </StyledProjectLink>
        ))}
      </AnimationWrapper>
    </StyledProjectTile>
  );
};

export default ProjectTile;

import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectHeaderContainer,
  ProjectHeader,
  ProjectSection,
} from "./ProjectElements";
import { Grid } from "@mui/material";
import { data1, data2 } from "../../Helpers/ProjectData";
import ProjectBox from "./ProjectBox";

function Project() {
  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <ProjectHeaderContainer>
            <ProjectHeader>{data1.text1}</ProjectHeader>
          </ProjectHeaderContainer>
          <ProjectSection>
            <Grid container spacing={2}>
              {data2.map((proData) => {
                return (
                  <ProjectBox
                  bgImage={proData.data2BgImg}
                    key={proData.data2Link}
                    myLink={proData.data2Link}
                  />
                );
              })}
            </Grid>
          </ProjectSection>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
}

export default Project;

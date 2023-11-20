import React from "react";
import {
  SkillWrapper,
  SkillSubtitlecontainer,
  SkillSubtitle,
  SkillLinearProgressContainer,
} from "./ResumeElements";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#a2a8d3" : "#308fe8",
  },
}));

function Linear({text, number}) {
  return (
    <>
      <SkillWrapper>
        <SkillSubtitlecontainer>
          <SkillSubtitle>{text}</SkillSubtitle>
        </SkillSubtitlecontainer>
        <SkillLinearProgressContainer>
          <Box SX={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={number} />
          </Box>
        </SkillLinearProgressContainer>
      </SkillWrapper>
    </>
  );
}

export default Linear;

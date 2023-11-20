import React from "react";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {
  CardContainer,
  CardTitle,
  CardAvatarBox,
  CardTitleBox,
  CardLink,
  CardBody,
  CardSlightBlock,
} from "./ProjectElements";

function ProjectBox({ myLink, bgImage }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardContainer>
          <CardTitle>
            <CardAvatarBox>
              <Avatar
                alt="my-profile-picture"
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#385170",
                  fontSize: "22px",
                }}
              >
                H
              </Avatar>
            </CardAvatarBox>
            <CardTitleBox>
              <CardLink href={myLink} target="_blank">
                Click Here
              </CardLink>
            </CardTitleBox>
          </CardTitle>
          <CardBody
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CardSlightBlock className="active" />
          </CardBody>
        </CardContainer>
      </Grid>
    </>
  );
}

export default ProjectBox;

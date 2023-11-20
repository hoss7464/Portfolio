import React from "react";
import "./EducationTimeline.css";
import { EducationIcon } from "./EducationTimelineElements";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function EducationTimeline() {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="education-dot-1">
              <EducationIcon />
            </TimelineDot>
            <TimelineConnector className="education-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-title-1">Education-Background: </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="education-item ">
          <TimelineSeparator>
            <TimelineDot className="education-dot-2" />
            <TimelineConnector className="education-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-subtitle">Degree:</p>
            <p className="education-content">Bachelor Of Architecture</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="education-item ">
          <TimelineSeparator>
            <TimelineDot className="education-dot-2" />
            <TimelineConnector className="education-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-subtitle">University:</p>
            <p className="education-content">PNU</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="education-item ">
          <TimelineSeparator>
            <TimelineDot className="education-dot-2" />
            <TimelineConnector className="education-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-subtitle">From:</p>
            <p className="education-content">September 2013</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="education-item ">
          <TimelineSeparator>
            <TimelineDot className="education-dot-2" />
            <TimelineConnector className="education-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-subtitle">To:</p>
            <p className="education-content">Augest 2017</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="education-item ">
          <TimelineSeparator>
            <TimelineDot className="education-dot-2" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="education-subtitle">Location:</p>
            <p className="education-content">Iran,Lorestan,KhorramAbad</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default EducationTimeline;

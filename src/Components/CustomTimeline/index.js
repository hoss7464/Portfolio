import React from "react";
import "./CustomTimeline.css";
import { Icon1 } from "./TimelineElement";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";

function CustomTimeline() {
  return (
    <>
      <Timeline className="timeline">
        <TimelineItem className="timeline-item1">
          <TimelineSeparator>
            <TimelineDot className="dot1">
              <Icon1 />
            </TimelineDot>
            <TimelineConnector className="connector" />
          </TimelineSeparator>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" >
              <div className="timeline-animated-circle"></div >
            </TimelineDot>
            <TimelineConnector className="connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Full-Name:</p>
            <p className="timeline-content">Hossein-Fathollahi</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Date-Of-Birth:</p>
            <p className="timeline-content">1995-07-26</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Marriage-Status:</p>
            <p className="timeline-content">Single</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Military-Status:</p>
            <p className="timeline-content">Out-Service</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Job:</p>
            <p className="timeline-content">Front-Developer</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="dot" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-title">Years-Of-Experience:</p>
            <p className="timeline-content">3 Years</p>
          </TimelineContent>
        </TimelineItem>

        
      </Timeline>
    </>
  );
}

export default CustomTimeline;

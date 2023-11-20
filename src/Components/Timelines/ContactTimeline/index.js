import React from "react";
import "./ContactTimeline.css";
import { ContactTimelineIcon } from "./ContactTimelineElements";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function ContactTimeline() {
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
            <TimelineDot className="Contact-dot-1">
              <ContactTimelineIcon />
            </TimelineDot>
            <TimelineConnector className="Contact-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-title">Contact-Me: </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="Contact-item ">
          <TimelineSeparator>
            <TimelineDot className="Contact-dot-2" />
            <TimelineConnector className="Contact-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-subtitle">Phone:</p>
            <p className="Contact-content">+989916551083</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="Contact-item ">
          <TimelineSeparator>
            <TimelineDot className="Contact-dot-2" />
            <TimelineConnector className="Contact-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-subtitle">Email:</p>
            <p className="Contact-content">hosseinfatollahi4541@gmail.com</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="Contact-item ">
          <TimelineSeparator>
            <TimelineDot className="Contact-dot-2" />
            <TimelineConnector className="Contact-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-subtitle">Whats-App:</p>
            <p className="Contact-content">+989916551083</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="Contact-item ">
          <TimelineSeparator>
            <TimelineDot className="Contact-dot-2" />
            <TimelineConnector className="Contact-connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-subtitle">Telegram:</p>
            <p className="Contact-content">+989916551083</p>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem className="Contact-item ">
          <TimelineSeparator>
            <TimelineDot className="Contact-dot-2" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="Contact-subtitle">Location:</p>
            <p className="Contact-content">Iran,Lorestan,KhorramAbad</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default ContactTimeline;

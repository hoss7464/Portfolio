import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactSection,
  ContactTitleContainer,
  ContactContentContainer,
  ContactTitle,
  ContactTimelineWrapper
} from "./ContactElements";
import ContactTimeline from "../../Components/Timelines/ContactTimeline/index"

function Contact() {
  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactSection>
            <ContactTitleContainer>
              <ContactTitle>
                Hire me:
              </ContactTitle>
              </ContactTitleContainer>
            <ContactContentContainer>
              <ContactTimelineWrapper>
                 <ContactTimeline />
              </ContactTimelineWrapper>
            </ContactContentContainer>
          </ContactSection>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}

export default Contact;

import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContactSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-top: 85px;
  }
`;

export const ContactTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;
export const ContactContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-top: 0.5rem;
  }
  @media only screen and (min-width: 600px) and (max-width:768px) {
    padding-top: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 4.8rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 20px;
  color: #385170;
  font-weight: 600;
  font-family: roboto;
  text-transform: capitalize;
`;

export const ContactTimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

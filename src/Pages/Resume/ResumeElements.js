import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
 

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
    margin-top: 85px;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    margin-top: 85px;
  }
`;

export const ResumeSection1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: solid 1px #d5def5;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const ResumeSection2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

export const AboutWrapper = styled.div`
  width: 100%;

  @media only screen and (max-width: 600px) {
    border: none;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    border: none;
  }

  @media only screen and (min-width: 768px) {
    border-bottom: solid 1px #d5def5;
  }
`;

export const AboutTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-bottom: 0.5rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const AboutTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-family: roboto;
  text-transform: capitalize;
  padding-left: 1rem;
  color: #385170;
`;

export const AboutContent = styled.p`
  font-family: roboto;
  text-transform: capitalize;
  padding-left: 1rem;
  color: #5f6368;

  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-top: 0.5rem;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    padding-top: 0.5rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-top: 2.5rem;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding-top: 0.3rem;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 2.5rem;
  }
`;

export const ResumeSection2Wrapper = styled.div`
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const SkillTitleContainer = styled.div`
  width: 100%;
  padding-left: 1rem;

  @media only screen and (max-width: 600px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 1.9rem;
  }
`;

export const SkillTitle = styled.h3`
  color: #385170;
  font-size: 20px;
  font-family: roboto;
  font-weight: 800;
`;

export const ResumeSection2LeftColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;

export const ResumeSection2RightColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;

export const SkillWrapper = styled.div`
  height: 50px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;

  @media only screen and (max-width: 600px) {
    width: 75%;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 90%;
  }

  @media only screen and (min-width: 1200px) {
    width: 75%;
  }
`;

export const LanguageContainer = styled.div`
  width: 100%;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 1rem;
  padding-left: 1rem;

  @media only screen and (max-width: 600px) {
    padding-top: 0.5rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    padding-top: 1rem;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 0.5rem;
  }
`;

export const LanguageTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #385170;
  font-family: roboto;
`;

export const SkillSubtitlecontainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const SkillLinearProgressContainer = styled.div`
  width: 100%;
  padding-top: 0.4rem;
`;

export const SkillSubtitle = styled.p`
  color: #5f6368;
  font-family: sans-serif;
  font-size: 14px;
`;

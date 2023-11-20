import React from "react";
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeSection1,
  ResumeSection2,
  AboutContainer,
  EducationContainer,
  AboutWrapper,
  AboutTitleContainer,
  AboutContentContainer,
  AboutTitle,
  AboutContent,
  ResumeSection2Wrapper,
  SkillTitleContainer,
  SkillTitle,
  ResumeSection2LeftColumn,
  ResumeSection2RightColumn,
  LanguageContainer,
  LanguageWrapper,
  LanguageTitle,
} from "./ResumeElements";
import EducationTimeline from "../../Components/Timelines/EducationTimeline/index";
import Linear from "./Linear";
import { data1, data2, data3, data4 } from "../../Helpers/ResumeData";

function Resume() {
  return (
    <>
      <ResumeContainer>
        <ResumeWrapper>
          <ResumeSection1>
            <AboutContainer>
              <AboutWrapper>
                <AboutTitleContainer>
                  <AboutTitle>{data1.text1}</AboutTitle>
                </AboutTitleContainer>
                <AboutContentContainer>
                  <AboutContent>
                    {data1.text2}
                    <br /> {data1.text3}
                  </AboutContent>
                </AboutContentContainer>
              </AboutWrapper>
            </AboutContainer>
            <EducationContainer>
              <EducationTimeline />
            </EducationContainer>
          </ResumeSection1>
          
          <ResumeSection2>
            <SkillTitleContainer>
              <SkillTitle>{data1.text4}</SkillTitle>
            </SkillTitleContainer>
            <ResumeSection2Wrapper>
              <ResumeSection2LeftColumn>
                {data2.map((myData) => {
                  return <Linear key={myData.text} text={myData.text} number={myData.number} />;
                })}
              </ResumeSection2LeftColumn>

              <ResumeSection2RightColumn>
                {data3.map((myData2) => {
                  return <Linear key={myData2.text} text={myData2.text} number={myData2.number} />;
                })}
                <LanguageContainer>
                  <LanguageWrapper>
                    <LanguageTitle>{data1.text5}</LanguageTitle>
                  </LanguageWrapper>
                  {data4.map((myData3) => {
                    return (
                      <Linear key={myData3.text} text={myData3.text} number={myData3.number} />
                    );
                  })}
                </LanguageContainer>
              </ResumeSection2RightColumn>
            </ResumeSection2Wrapper>
          </ResumeSection2>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
}

export default Resume;

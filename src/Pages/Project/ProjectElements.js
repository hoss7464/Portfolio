import styled from "styled-components";
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ProjectHeaderContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    margin-top: 85px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 85px;
  }
  
`;

export const ProjectHeader = styled.h1`
  font-size: 20px;
  color: #385170;
  font-weight: 600;
  font-family: roboto;
  text-transform: capitalize;
`;

export const ProjectSection = styled.div`
  width: 95%;
`;

export const CardContainer = styled.div`
  height: 270px;
  background-color: #a2a8d3;
  border-radius: 8px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
`;

export const CardSlightBlock = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: #a2a8d3;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  &:hover {
    .active {
      opacity: 0;
      transition: all 0.1s ease-in-out;
    }
  }
`;

export const CardAvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const CardTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const CardLink = styled.a`
  font-size: 15px;
  font-family: roboto;
  padding: 0.8rem 1.7rem;
  cursor: pointer;
  background-color: unset;
  color: #385176;
  border: solid 1px #385176;
  font-weight: 600;

  &:hover {
    background-color: #385176;
    color: #d5def5;
  }
`;

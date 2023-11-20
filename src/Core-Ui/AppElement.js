import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-image: linear-gradient(
    to right bottom,
    #e7eaf6,
    #e7eaf6,
    #e7eaf6,
    #e7eaf6,
    #e7eaf6,
    #e6e9f6,
    #e4e8f6,
    #e3e7f6,
    #e0e5f6,
    #dce2f6,
    #d9e0f5,
    #d5def5
  );

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    flex-direction: row;
   
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    height:100vh ;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to top,
    #e7eaf6,
    #e4e8f6,
    #e1e5f5,
    #dde3f5,
    #dae1f5,
    #d8e0f5,
    #d7dff5,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5
  );

  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 30%;
    margin-top: 0px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 25%;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`;

export const AppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 70%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 75%;
  }

  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`;

export const ProfileSection1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const SlightBox = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to left top,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5,
    #d5def5,
    #acb8d2,
    #8e9db9,
    #7183a0,
    #556988,
    #385170
  );
  z-index: 1;

  @media only screen and (max-width: 600px) {
    height: 220px;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    height: 230px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: 219px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: 219px;
  }

  @media only screen and (min-width: 1200px) {
    height: 219px;
  }
`;

export const ProfileSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  background-color: #d5def5;
  border-radius: 50%;
  transform: translate(0%, 25%);

  @media only screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (min-width: 1200px) {
    width: 170px;
    height: 170px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    width: 140px;
    height: 140px;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 1200px) {
    width: 160px;
    height: 160px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const TimelineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

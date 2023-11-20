import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-image: linear-gradient(
    to left,
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
  position: fixed;
  right: 0;
  z-index: 10;
  border: none;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width:768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width:992px) {
    width: 70%;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: 992px) and (max-width:1200px) {
    transition: all 0.2s ease-in-out;
    width: 75%;
  }

  @media only screen and (min-width: 1200px) {
    transition: all 0.2s ease-in-out;
    width: 80%;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
`;

export const MenueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MenueWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) and (max-width:768px) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 768px) and (max-width:992px) {
    width: 100%;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 992px) and (max-width:1200px) {
    width: 100%;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const LinkWrapper = styled.div`
border-radius: 8px;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) and (max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
  }

  @media only screen and (min-width: 768px) and (max-width:992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    margin-left: 2rem;
  }

  @media only screen and (min-width: 992px) and (max-width:1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    margin-left: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    margin-left: 2rem;
  }
`;

export const MyLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #385170;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: roboto;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
`;

export const MobileIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 600px) and (max-width:768px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width:992px) {
    display: none;
  }

  @media only screen and (min-width: 992px) and (max-width:1200px) {
    display: none;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  background-color: #385170;
  border-radius: 8px;
  cursor:pointer ;
  

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-right: 1rem;
  }
`;

export const MobileIcon = styled(FaBars)`
  font-size: 22px;
  color: #a2a8d3;
`;

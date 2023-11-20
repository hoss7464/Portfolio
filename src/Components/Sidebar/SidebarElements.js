import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  background-color: #d5def5;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  margin-top:85px ;
`;

export const SideLinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column ;
  width: 100%;
  padding-top:0.5rem ;
  padding-bottom:1rem ;
`;

export const SideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #385170;
  width:65% ;
  padding-top:0.5rem ;
  padding-bottom:0.5rem ;
  cursor: pointer;
  font-size:20px ;
  margin-top:1rem ;
  border-radius:8px ;
  color: #d5def5;
  font-family:roboto ;
`;


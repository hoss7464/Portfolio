import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SideLinkContainer,
  SideLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarWrapper>
          <SideLinkContainer>
            <SideLink
              onClick={toggle}
              to="/"
             
            >
              Resume
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/project"
              
            >
              Projects
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/contact"
              
            >
              Contact
            </SideLink>
          </SideLinkContainer>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

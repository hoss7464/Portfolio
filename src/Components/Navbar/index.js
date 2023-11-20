import React, { useState } from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  MenueContainer,
  MenueWrapper,
  LinkWrapper,
  MyLink,
  MobileIconWrapper,
  MobileContainer,
  MobileIcon,
} from "./NavbarElement";

function Navbar({ toggle }) {
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState(false);

  function changeNavbarBackground() {
    if (window.scrollY >= 30) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <NavContainer className={navbarColor ? "nav-active" : null}>
      <NavWrapper>
        <MenueContainer>
          <MenueWrapper>
            <LinkWrapper>
              <MyLink
                to="/"
                className={location.pathname === "/" ? "active" : null}
              >
                Resume
              </MyLink>
            </LinkWrapper>

            <LinkWrapper>
              <MyLink
                to="/project"
                className={location.pathname === "/project" ? "active" : null}
              >
                Projects
              </MyLink>
            </LinkWrapper>

            <LinkWrapper>
              <MyLink
                to="/contact"
                className={location.pathname === "/contact" ? "active" : null}
              >
                Hire Me
              </MyLink>
            </LinkWrapper>
          </MenueWrapper>
          <MobileIconWrapper>
            <MobileContainer onClick={toggle}>
              <MobileIcon />
            </MobileContainer>
          </MobileIconWrapper>
        </MenueContainer>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;

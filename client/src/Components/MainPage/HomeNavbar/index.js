import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const HomeNavbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">FHacademy</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact US">Contact US</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signup">Sing Up</NavBtnLink>
            <NavBtnLink to="/signin">Sing In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>

    </>
  );
};

export default HomeNavbar;

import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarSocialIcon,
  SidebarIcon,
  SidebarLinks,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";
function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks
            to="home"
            onClick={toggle}
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Home
          </SidebarLinks>
          <SidebarLinks
            to="about"
            onClick={toggle}
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            About
          </SidebarLinks>
          <SidebarLinks
            to="songs"
            onClick={toggle}
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            My Songs
          </SidebarLinks>
          <SidebarLinks
            to="gallery"
            onClick={toggle}
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Gallery
          </SidebarLinks>
          <SidebarLinks
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Contact
          </SidebarLinks>
        </SidebarMenu>
        <SidebarSocialIcon>
          <SidebarIcon>
            <a href="https://www.facebook.com/itsdsmuskan319/" target="_blank">
              <FaFacebook />
            </a>
          </SidebarIcon>
          <SidebarIcon>
            <a href="https://www.instagram.com/itsdsmuskan/" target="_blank">
              <FaInstagram />
            </a>
          </SidebarIcon>
          <SidebarIcon>
            <a href="https://twitter.com/itsdsmuskan" target="_blank">
              <FaTwitter />
            </a>
          </SidebarIcon>
          <SidebarIcon>
            <a href="https://in.pinterest.com/muskanpandey319/" target="_blank">
              <FaPinterest />
            </a>
          </SidebarIcon>
        </SidebarSocialIcon>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;

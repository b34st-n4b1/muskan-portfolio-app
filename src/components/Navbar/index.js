import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SocialButtons,
  SocialIcon,
} from "./NavbarElements";
import {
  FaBars,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#01ab71" }}> */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
            MP
          </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                scrollNav={scrollNav}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                scrollNav={scrollNav}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="songs"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                scrollNav={scrollNav}
              >
                My Songs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                scrollNav={scrollNav}
              >
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                scrollNav={scrollNav}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <SocialButtons>
            <SocialIcon scrollNav={scrollNav}>
              <a href="#">
                <FaFacebook />
              </a>
            </SocialIcon>
            <SocialIcon scrollNav={scrollNav}>
              <a href="#">
                <FaInstagram />
              </a>
            </SocialIcon>
            <SocialIcon scrollNav={scrollNav}>
              <a href="#">
                <FaTwitter />
              </a>
            </SocialIcon>
            <SocialIcon scrollNav={scrollNav}>
              <a href="#">
                <FaPinterest />
              </a>
            </SocialIcon>
          </SocialButtons>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;

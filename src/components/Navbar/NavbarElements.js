import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav
      ? "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
      : "none"};
  height: 80px;
  z-index: 2;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  /* color: #fff; */
  color: ${({ scrollNav }) => (scrollNav ? "#01bf71" : "#fff")};

  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? "#01bf71" : "#fff")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(LinkS)`
  /* color: #fff; */
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    /* background-color: rgba(255, 255, 255, 0.3); */
    background-color: ${({ scrollNav }) =>
      scrollNav ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.3)"};
    transition: all 0.3s;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcon = styled.div`
  margin-left: 1rem;
  a {
    font-size: 1.4rem;
    svg {
      color: ${({ scrollNav }) => (scrollNav ? "#01bf71" : "#fff")};
      &:hover {
        color: #01bf71;
        transform: scale(1.5);
        transition: all 350ms ease;
      }
    }
  }
`;

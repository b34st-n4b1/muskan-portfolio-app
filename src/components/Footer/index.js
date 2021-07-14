import React from "react";
import "./Footer.css";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          {/* <ul className="social-links">{networks}</ul> */}

          <ul className="copyright">
            <li>
              Copyright &copy; 2021 Muskan Pandey All rights reserved. <br />
              <span>
                Made by &nbsp;
                <a href="https://n4b1-portfolio.netlify.app">Nabi Gauda</a>
              </span>
            </li>
          </ul>
        </div>
        <div id="go-top" onClick={toggleHome}>
          <Link to="home" className="smoothscroll" title="Back to Top">
            {/* <i className="icon-up-open"></i> */}
            <FaChevronUp className="icon-up-open" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

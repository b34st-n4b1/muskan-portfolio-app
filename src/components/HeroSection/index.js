import React, { useState } from "react";
import { Button } from "../../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      {/* <Navbar /> */}
      <HeroBg>
        {/* <ImgBg src="/images/girlwithgituar.jpg" /> */}
        {/* <h1>HeroSection</h1> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hi, I'm <br />
          <span>Muskan Pandey</span>
        </HeroH1>
        <HeroP>The Sound of Today. The Music of Tomorrow.</HeroP>
        <HeroP>Singer | Actor | Model</HeroP>
        <HeroBtnWrapper>
          <Button
            to="gallery"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-80}
          >
            Go to Gallery {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

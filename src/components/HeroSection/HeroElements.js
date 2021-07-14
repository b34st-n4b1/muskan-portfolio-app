import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 0;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    /* background: rgba(0, 0, 0, 0.6); */
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  background: url(/images/girlwithgituar.jpg);
  background-size: cover;
  background-position: center;
  /* object-fit: contain; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-position: right;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  margin-right: 400px;
  margin-bottom: 150px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0 auto 100px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;

  & > span {
    text-transform: uppercase;
    font-size: 72px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  /* text-align: center; */
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    /* t-size: 24px; */
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    /* t-size: 24px; */
    text-align: center;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

import React, { useState, useEffect } from "react";
import "./InfoElements.css";
import CloseIcon from "@material-ui/icons/Close";

import Aos from "aos";
import "aos/dist/aos.css";
import { CafeData } from "./Data";
const InfoSection = ({ id, img, alt, infoText, highlightText }) => {
  const [cafeImage, setCafeImage] = useState(CafeData);
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
    console.log("click");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id={id} className="about-container">
        <div className="about-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="wor" data-aos="zoom-in-down">
          <div className="col-right">
            <p className="about-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infoText}
            </p>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="cafe-title">
          <h3>Cafe Gigs</h3>
          <div className="underline"></div>
        </div>
        <div className={modal ? "modal open" : "modal"}>
          <img src={tempImgSrc} alt="temp-img" />
          <CloseIcon onClick={() => setModal(false)} />
        </div>
        <div className="cafegigs-container">
          {cafeImage.map((item) => {
            const { id, img, animate } = item;
            return (
              <div
                key={id}
                className="cafe-item"
                onClick={() => getImage(img)}
                data-aos={animate}
              >
                <img src={img} alt="gigs" />
              </div>
            );
          })}
        </div>
        <div className="horizontal-line"></div>
        <div className="highlight-title">
          <h3>Hightlights</h3>
          <div className="underline"></div>
        </div>
        <article className="highlight-container" data-aos="zoom-in">
          <div className="glass-container" data-aos="flip-up" duration="1000">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{highlightText}
            </p>
          </div>
        </article>
        {/* <br /> */}
        <div className="horizontal-line-end"></div>
      </div>
    </>
  );
};

export default InfoSection;

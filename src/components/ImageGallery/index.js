import React, { useState, useEffect } from "react";
import "./image.css";
import { ImageData } from "./ImageData";
import CloseIcon from "@material-ui/icons/Close";
import Aos from "aos";
const ImageGallery = () => {
  const [imageData, setImageData] = useState(ImageData);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    console.log("clice");
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="temp-img" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div id="gallery" className="gallery-container">
        <div className="gallery-title">
          <h2>Image gallery</h2>
          <div className="underline"></div>
        </div>
        <div className="gallery">
          {showMore
            ? imageData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="pics"
                    onClick={() => getImage(item.imgSrc)}
                    // data-aos="zoom-in"
                    duration="500"
                  >
                    <img src={item.imgSrc} alt="pic" />
                  </div>
                );
              })
            : imageData.slice(0, 9).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="pics"
                    onClick={() => getImage(item.imgSrc)}
                    // data-aos="zoom-in"
                    duration="500"
                  >
                    <img src={item.imgSrc} alt="pic" />
                  </div>
                );
              })}
        </div>
        <button className="imageBtn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ImageGallery;

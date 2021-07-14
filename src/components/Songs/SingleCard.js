import React from "react";
import ReactPlayer from "react-player";
import "./card.css";
const SingleCard = ({ url, title, info }) => {
  return (
    <div className="card">
      <ReactPlayer width={"100"} url={url} />

      <div className="card-details">
        <h2 className="card-head">{title}</h2>
        <p className="card-text">{info}</p>
      </div>
    </div>
  );
};

export default SingleCard;

import React, { useEffect } from "react";
import Aos from "aos";
import SingleCard from "./SingleCard";
import "./Songs.css";
const Songs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="songs" className="song-container">
        <div className="song-title">
          <h2>Songs</h2>
          <div className="underline"></div>
        </div>
        <div className="videoCard-container">
          <SingleCard
            url="https://youtu.be/Z5UuC9Zl51Q"
            title="Taare Hain Baraati | Viraasat | Muskan Pandey"
            info="Glimpse Of The Very Last Show At Sagar With vivek singh And Must Say, I m in Love with This Beautiful SetUp."
            data-aos="fade-right"
          />
          <SingleCard
            url="https://youtu.be/EcKGIL6GYv0"
            title="Mere Rashke Qamar | Mile Ho Tum Humko | Aashiq Banaya Aapne"
            info="You've already made them most loved tracks of the Bollywood, here's presenting the A Medley Of Some Bollywood Hit Numbers."
          />
          <SingleCard
            url="https://youtu.be/0a9bZU3JDak"
            title="Main Kaun Hoon | O Ri Chirayiya | Lag Ja Gale | Muskan Pandey"
            info="A performance of  Medley..  With this I want to give you some message for girls...  
            Thnku for watching..... "
          />
        </div>
        <div className="btn">
          <a
            className="btn-link"
            target="_blank"
            href="https://www.youtube.com/channel/UCXPqIjOuGunrO5vxRZeOWCg"
          >
            Go checkout my youtube channel
          </a>
        </div>
      </div>
      <div className="horizontal-line-end"></div>
    </>
  );
};

export default Songs;

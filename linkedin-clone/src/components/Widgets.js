import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, description) => {
    return (
      <div className="widgets__newsarticle">
        <div className="widgets__newsarticleleft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__newsarticleright">
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn", "LinkedIn News")}
      {newsArticle(
        "React Js",
        "High Demand of React Js and React Native Developers...!!!"
      )}
      {newsArticle(
        "BitCoin",
        "High Variation in BitCoin observed by BitCoin developers"
      )}
      {newsArticle(
        "Next JS",
        "Many Developers are interested in the next JS and want to learn more about it and switch to NextJS"
      )}
      {newsArticle(
        "Binance",
        "Higher Authorities in Pakistan Finance decided to Bann Binance in Pakistan"
      )}
    </div>
  );
};

export default Widgets;

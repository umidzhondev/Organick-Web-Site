import React from "react";
import UserIcon from "../images/news/user-icon.png";
import ArrowIcon from "../images/news/arrow-icon.svg";

const NewsCard = ({ props }) => {
  const { src, name, title, description } = props;

  return (
    <div className="news__card">
      <img className="news__card-bg" src={src} alt="news card img" />
      <div className="news__card-main">
        <div className="news__card-user">
          <img src={UserIcon} alt="card user icon" />
          <span>{name}</span>
        </div>
        <h4 className="news__card-title">{title}</h4>
        <p className="news__card-description">{description}</p>
        <button className="news__card-button">
          <span>View More</span>
          <img src={ArrowIcon} alt="news card icon" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;

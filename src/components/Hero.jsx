import React from "react";
import MyButton from "./MyButton";
import HeroBgImage from "../images/hero/hero-bg-image.png";
import HeroCardImageFirst from "../images/hero/hero-card-image-1.jpg";
import HeroCardImageSecond from "../images/hero/hero-card-image-2.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__main">
        <div className="container">
          <div className="hero__content">
            <div className="hero__info">
              <h3 className="hero__suptitle">Made with nature</h3>
              <h1 className="hero__title">
                Welcome to the world of nature and organic.
              </h1>
              <MyButton bgColor={"yellow"}>Explore Now</MyButton>
            </div>
          </div>
        </div>
        <div className="hero__bg">
          <img src={HeroBgImage} alt="hero..." />
        </div>
      </div>
      <div className="hero__footer">
        <div className="container">
            <div className="hero__cards">
                <div className="hero__card">
                    <span>Natural!!</span>
                    <h3>Get Garden Fresh Fruits</h3>
                    <img className="hero__card-bg" src={HeroCardImageFirst} alt="hero card img" />
                </div>
                <div className="hero__card">
                    <span>Offer!!</span>
                    <h3>Get 10% off on Vegetables</h3>
                    <img className="hero__card-bg" src={HeroCardImageSecond} alt="hero card img" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

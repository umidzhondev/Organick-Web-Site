import React from "react";
import AboutMainImage from "../images/about/about-main-image.png";
import AboutItemImageFirst from "../images/about/about-item-image-1.png";
import AboutItemImageSecond from "../images/about/about-item-image-2.png";
import SectionHeader from "./SectionHeader";
import MyButton from "./MyButton";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__imgbox">
            <img src={AboutMainImage} alt="about main img" />
          </div>
          <div className="about__info">
            <SectionHeader
              suptitle={"About Us"}
              title={"We Believe in Organic Foods For Strong Health"}
            />
            <p className="about__description">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              and care. We aim to give our customers a healthy chemical-free
              meal for perfect nutrition.
            </p>
            <div className="about__items">
              <div className="about__item">
                <div className="about__item-imgbox">
                  <img src={AboutItemImageFirst} alt="about item img" />
                </div>
                <div className="about__item-texts">
                  <h4>Organic Foods Only</h4>
                  <p>
                    The Product that you ordered will be verified that we have
                    or not if have we will start to move on with the next step.
                  </p>
                </div>
              </div>
              <div className="about__item">
                <div className="about__item-imgbox">
                  <img src={AboutItemImageSecond} alt="about item img" />
                </div>
                <div className="about__item-texts">
                  <h4>Quality Standards</h4>
                  <p>
                    Once your product is packed it will be delivered to your
                    nearby locality you can directly visit the to buy the
                    product.
                  </p>
                </div>
              </div>
            </div>
            <MyButton bgColor={"blue"}>Shop now</MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

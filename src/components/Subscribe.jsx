import React from "react";
import MyButton from "./MyButton";
import BgImage from "../images/subscribe/subscribe-bg-image.jpg";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          <h2 className="subscribe__text">Subscribe our Newsletter</h2>
          <form className="subscribe__form">
            <input type="text" placeholder="Enter your email address" />
            <MyButton bgColor={"blue"}>Subscribe</MyButton>
          </form>
          <div className="subscribe__bg">
            <img src={BgImage} alt="subscribe bg img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

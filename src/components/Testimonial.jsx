import React from "react";
import SectionHeader from "./SectionHeader";
import TestimonialUserImage from "../images/testimonial/testimonial-user-image.png";
import TestimonialMainImage from "../images/testimonial/testimonial-main-image.png";
import StarIcon from "../images/products/star-icon.svg";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <section id="shop" className="testimonial">
      <div className="container">
        <div className="testimonial__content">
          <div className="testimonial__header">
            <SectionHeader
              suptitle={"Testimonial"}
              title={"What Our Customer Saying?"}
            />
          </div>
          <div className="testimonial__main">
            <img
              className="testimonial__main-img"
              src={TestimonialUserImage}
              alt="testimonial main img"
            />
            <div className="testimonial__main-rating">
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
            </div>
            <p className="testimonial__main-description">
              The quality of organic produce is extremely high, the service is
              second to none and the taste of the food takes me back to my
              childhood when we were growing our own.
            </p>
            <h3 className="testimonial__main-title">Sara Taylor</h3>
            <span className="testimonial__main-subtitle">Consumer</span>
            <div className="line"></div>
          </div>
          <div className="testimonial__items">
            <TestimonialItem title={"100%"} subtitle={"Organic"} />
            <TestimonialItem title={"285"} subtitle={"Active Product"} />
            <TestimonialItem title={"385+"} subtitle={"Organic Orchads"} />
            <TestimonialItem title={"25+"} subtitle={"Years of Farming"} />
          </div>
        </div>
      </div>
      <div className="testimonial__bg">
        <img src={TestimonialMainImage} alt="testimonial bg" />
      </div>
    </section>
  );
};

export default Testimonial;

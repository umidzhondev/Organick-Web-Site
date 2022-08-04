import React from "react"
import EcoMainImage from "../images/eco/eco-main-image.png"
import SectionHeader from "./SectionHeader";
import data from "../utls/EcoData";
import EcoCard from "./EcoCard";

const Eco = () => {
  return (
    <section className="eco">
      <div className="eco__content">
        <div className="container">
          <div className="eco__main">
            <div className="eco__imgbox">
              <img src={EcoMainImage} alt="eco main img" />
            </div>
            <div className="eco__info">
              <div className="eco__info-main">
                <div className="eco__info-header">
                  <SectionHeader
                    title={"From our Farm to your Home."}
                    suptitle={"Eco Friendly"}
                  />
                </div>
                <div className="eco__items">
                  <div className="eco__item">
                    <h4>Choose Your Products</h4>
                    <p>
                      In our listing, we have several collections of organic
                      products. This is the place where you need to choose the
                      product you want.
                    </p>
                  </div>
                  <div className="eco__item">
                    <h4>Farmers will produce it</h4>
                    <p>
                      The Product that you ordered will be verified that we have
                      or not if have we will start to move on with the next
                      step.
                    </p>
                  </div>
                  <div className="eco__item">
                    <h4>We Can Delivery too</h4>
                    <p>
                      If you are not comfortable going to the nearby market
                      place we also will deliver your product to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eco__footer">
          <div className="container">

          <div className="eco__cards">
            {data.map((item) => {
              return <EcoCard key={item.id} title={item.title} src={item.src} />;
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco;

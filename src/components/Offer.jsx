import React from "react";
import SectionHeader from "./SectionHeader";
import MyButton from "./MyButton";
import data from "../utls/OfferData";
import ProductsCard from "./ProductsCard";

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          <div className="offer__header">
            <div className="offer__header-texts">
              <SectionHeader
                title={"We Offer Organic for You"}
                suptitle={"Offer Products"}
              />
            </div>
            <MyButton bgColor={"yellow"}>View All products</MyButton>
          </div>
          <div className="offer__cards">
            {data.map((item) => {
              return <ProductsCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

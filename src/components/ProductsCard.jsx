import React from "react";
import StarIcon from '../images/products/star-icon.svg'

const ProductsCard = ({src, suptitle, title, oldPrice, newPrice }) => {
  return (
    <div className="products__card">
      <span className="products__card-suptitle">{suptitle}</span>
      <div className="products__card-imgbox">
        <img src={src} alt="products card img" />
      </div>
      <div className="products__info">
        <h4 className="products__card-title">{title}</h4>
        <div className="line"></div>
        <div className="products__footer">
            <div className="products__prices">
                <span className="products__card-oldprice">$ {oldPrice.toFixed(2).toString()} USD</span>
                <span className="products__card-newprice">$ {newPrice.toFixed(2).toString()} USD</span>
            </div>
            <div className="products__rating">
                <img src={StarIcon} alt="products card rating" />
                <img src={StarIcon} alt="products card rating" />
                <img src={StarIcon} alt="products card rating" />
                <img src={StarIcon} alt="products card rating" />
                <img src={StarIcon} alt="products card rating" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

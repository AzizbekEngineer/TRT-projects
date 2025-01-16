import React from "react";
import "./product.scss";

const Product = ({ product }) => {
  return (
    <div className="result__card">
      <div className="result__card__img">
        <img src={product?.img} alt="" />
      </div>
      <div className="result__card__info">
        <p className="result__card__info-text">{product?.title}</p>
        <p className="result__card__info-title">{product?.desc}</p>
      </div>
    </div>
  );
};

export default Product;

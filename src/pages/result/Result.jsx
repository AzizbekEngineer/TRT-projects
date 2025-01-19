import React, { useEffect } from "react";
import "./result.scss";
import { FILTER } from "../../static";
import ProductItem from "../../components/productItem/ProductItem";

const Result = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="result">
      <div className="result__bg"></div>
      <div className="container">
        <p className="result__desc">ФИЛЬТР</p>
        <h3 className="result__title">Рычаги подвески</h3>
        <div className="result__cards">
          <ProductItem data={FILTER} />
        </div>
      </div>
    </div>
  );
};

export default Result;

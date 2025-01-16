import React from "react";
import Filter from "../../components/filter/Filter";
import "./filterSearch.scss";
import ProductItem from "../../components/productItem/ProductItem";
import { FILTER } from "../../static";

const FilterSearch = () => {
  return (
    <div className="filterSearch">
      <div className="filterSearch-bg"></div>
      <div>
        <Filter />
      </div>
      <div className="container">
        <div className="filterSearch__cards-info">
          <h3 className="filterSearch__cards-info-text">Результат поиска:</h3>
        </div>
        <div className="filterSearch__cards">
          <ProductItem data={FILTER} />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;

import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

import "./searchProduct.scss";
import ProductItem from "../../components/productItem/ProductItem";
import { FILTER } from "../../static";

const SearchProduct = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="searchProduct">
      <div className="container">
        <p className="searchProduct__text">ПОИСК</p>
        <h3 className="searchProduct__title">Найти продукцию</h3>
        <div className="searchProduct__top">
          <CiSearch />
          <input placeholder="Поиск продукции..." type="search" />
        </div>
        <div className="searchProduct__search-result">
          <h3 className="searchProduct__search-result-text">
            Результат поиска:
          </h3>
        </div>
        <div className="searchProduct__cards">
          <ProductItem data={FILTER} />
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;

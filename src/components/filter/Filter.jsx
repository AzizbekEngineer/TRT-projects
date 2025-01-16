import React from "react";
import img from "../../assets/icons/settings.svg";
import "./filter.scss";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filter">
      <div className="container">
        <div className="filter__top">
          <div className="filter__top__left">
            <p className="filter__top__left-text">ФИЛЬТР</p>
            <p className="filter__top__left-title">Поиск продукции</p>
          </div>
          <div className="filter__top__icon">
            <img src={img} alt="" />
          </div>
        </div>
        <form action="" className="filter__form">
          <label htmlFor="">
            Наименование детали
            <div className="filter__form-search">
              <input value={"Например, опора КПП"} type="text" />
              <FiSearch />
            </div>
          </label>
          <label htmlFor="">
            TRT-код
            <input value={"NR1001"} type="text" />
          </label>
          <label htmlFor="">
            OEM номер
            <input value={"2875013"} type="text" />
          </label>
          <label htmlFor="">
            Марка
            <input value={"DAEWOO"} type="text" />
          </label>
          <label htmlFor="">
            Модель
            <input value={"Nexia"} type="text" />
          </label>
          <button className="filter__form-btn">
            <NavLink to={"/filter"}>Найти деталь</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;

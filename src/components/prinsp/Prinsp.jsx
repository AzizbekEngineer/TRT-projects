import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import "./prinsp.scss";
import Service from "../service/Service";

const Prinsp = () => {
  return (
    <div className="prinsp container">
      <div className="prinsp__top">
        <div className="prinsp__top__left">
          <p className="prinsp__top__left-text">ПРИЦНИПЫ</p>
          <h2 className="prinsp__top__left-title">
            Высочайшее качество <br />
            <span>на всех этапах производства</span>
          </h2>
        </div>
        <div className="prinsp__top__right">
          <button className="prinsp__top__right-white">О компании</button>
          <button className="prinsp__top__right-red">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Service />
    </div>
  );
};

export default Prinsp;

import React from "react";
import "./leazy.scss";
import img from "../../assets/video/leazy1.webp";

const Leazy = () => {
  return (
    <div className="leazy">
      <div className="leazy__card">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Leazy;

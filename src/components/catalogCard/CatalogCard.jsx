import React from "react";
import img1 from "../../assets/img/catalog1.png";
import img2 from "../../assets/img/catalog2.png";
import img3 from "../../assets/img/catalog3.png";
import img4 from "../../assets/img/catalog4.png";
import img5 from "../../assets/img/catalog5.png";
import img6 from "../../assets/img/catalog6.png";

import "./catalogCard.scss";
import { NavLink } from "react-router-dom";

const catalogItems = [
  { id: 1, image: img1, title: "Рычаги подвески", section: "Раздел" },
  { id: 2, image: img2, title: "Шаровые опоры", section: "Раздел" },
  { id: 3, image: img3, title: "Резиновые комплектующие", section: "Раздел" },
  { id: 4, image: img4, title: "Наконечники рулевой тяги", section: "Раздел" },
  { id: 5, image: img5, title: "Стойки стабилизатора", section: "Раздел" },
  { id: 6, image: img6, title: "Шарниры и рулевые тяги", section: "Раздел" },
];

const CatalogCard = () => {
  return (
    <div className="catalogCard">
      <div className="catalogCard__box">
        {catalogItems.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "contain",
            }}
            className="catalogCard__box-item"
          >
            <div className="catalogCard__box-item-card">
              <NavLink to={"/result"}>
                <button>→</button>
              </NavLink>
              <div className="catalogCard__box-info">
                <h3 className="catalogCard__box-info-title">{item.title}</h3>
                <p className="catalogCard__box-info-text">{item.section}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCard;

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icons/headerIcon.svg";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import uzb from "../../assets/icons/uzb.webp";
import rus from "../../assets/icons/rus.png";

import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("uzb");
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);

    const dropdown = document.querySelector(".custom-dropdown-options");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        document
          .querySelector(".custom-dropdown-options")
          ?.classList.remove("show");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="header">
      <nav className="header__nav container">
        <NavLink to={"/"} className="header__nav__icons">
          <img src={icon} alt="header-icon" />
        </NavLink>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/razdel"}>
              {/* {t("O'quvchilar")} */}
              Каталог
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/company"}>
              О компании
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/partner"}>
              Партнеры
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/newost"}>
              Новости
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/search"}>
              Контакты
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/single"}>
              Галарея
            </NavLink>
          </li>
          <li className="header__nav__item">
            <div className="custom-dropdown" ref={dropdownRef}>
              <div
                className="custom-dropdown-selected"
                onClick={() =>
                  document
                    .querySelector(".custom-dropdown-options")
                    .classList.toggle("show")
                }
              >
                <img
                  src={selectedLang === "uzb" ? uzb : rus}
                  alt={selectedLang}
                  className="lang-icon"
                />
                <span>{t(selectedLang === "uzb" ? "Uzbek" : "Rus")}</span>
              </div>
              <div className="custom-dropdown-options">
                <div
                  className="custom-dropdown-option"
                  onClick={() => handleLanguageChange("uzb")}
                >
                  <img src={uzb} alt="Uzbek" className="lang-icon" />
                  {t("Uzbek")}
                </div>
                <div
                  className="custom-dropdown-option"
                  onClick={() => handleLanguageChange("rus")}
                >
                  <img src={rus} alt="Russian" className="lang-icon" />
                  {t("Rus")}
                </div>
              </div>
            </div>
          </li>
          <li className="header__nav__item-phone">
            <a className={"header__nav__item-tel"} href="tel:+99871 203-20-30">
              +99871 203-20-30
            </a>
            <span>Заказать обратный звонок</span>
          </li>
        </ul>
        <div className="header__nav__search">
          <FiSearch />
        </div>
        <div className="header__nav__btn">
          <button>Оставить заявку</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

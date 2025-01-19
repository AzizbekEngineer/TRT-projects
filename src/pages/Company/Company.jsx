import React, { useEffect } from "react";
import img from "../../assets/img/trt.png";
import img1 from "../../assets/sertifikat/IQNET.png";
import img2 from "../../assets/sertifikat/SICQ.png";
import img3 from "../../assets/sertifikat/TRT.png";
import img4 from "../../assets/sertifikat/UZAUTO.png";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./company.scss";
import Service from "../../components/service/Service";
import Photo from "../../components/photo/Photo";

const Company = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  const items = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img3,
    },
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img3,
    },
  ];

  return (
    <div className="company">
      <div className="company__bg"></div>
      <div className="container">
        <div className="company__info">
          <div className="company__info__left">
            <p className="company__info__left-text">ПРЕДПРИЯТИЕ</p>
            <h3 className="company__info__left-title">О компании</h3>
            <h3 className="company__info__left-desc">
              TECHNOLOGIES OF REAL TIME
            </h3>
            <p className="company__info__left-texts">
              <span>
                Компания TECHNOLOGIES OF REAL TIME была основана в 2015 году в
                Ташкенте и специализируется на полном цикле производства
                высококачественных автозапчастей для легковых и грузовых
                автомобилей.
              </span>{" "}
              <br />
              <span>
                В TRT трудятся опытные специалисты, осведомленные о всех
                аспектах продукции и производственных процессов.{" "}
              </span>
              <br />
              <span>
                Сотрудники компании регулярно проходят тренинги от GENERAL
                MOTORS по внедрению стандартов качества и контроля в
                производстве. Производственный процесс начинается с отдела
                конструирования, где опытные специалисты разрабатывают детали.
              </span>
            </p>
          </div>
          <div className="company__info__right">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="company__info__bottom">
          <p className="company__info__bottom-text">
            Лаборатория компании использует современное автоматизированное
            оборудование для тестирования материалов, проверки качества покрытий
            и свойств продукции при различных условиях.
          </p>
          <p className="company__info__bottom-text">
            Особое внимание уделяется выбору поставщиков сырья. Компания
            стремится к высокому качеству, используя передовые технологии
            обработки металла, сборки и покраски готовой продукции. TRT успешно
            сотрудничает с отечественными и зарубежными производителями
            автозапчастей, изготавливая продукцию для мировых автомобильных
            брендов.
          </p>
          <p className="company__info__bottom-text">
            При производстве резиновых изделий компания использует корейскую
            рецептуру и высококачественное сырье, что способствует улучшению
            характеристик автомобильных деталей. TRT экспортирует свою продукцию
            в Украину, Кыргызстан, Туркменистан и Таджикистан, и планирует
            расширить свое присутствие на новые международные рынки в будущем.
          </p>
        </div>
        <Service />
        <Photo />
      </div>
      <div className="custom-swiper-container container">
        <h2 className="swiper-title__name">Рекомендации</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={4}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            200: { slidesPerView: 1 }, // 380px va undan kichik ekranlarda 1 ta
            650: { slidesPerView: 2 }, // 381px - 650px oralig'ida 2 ta
            1111: { slidesPerView: 3 }, // 651px - 1111px oralig'ida 3 ta
            1112: { slidesPerView: 4 }, // 1112px va undan kattaroq ekranlarda 4 ta
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide-content">
                <img src={item.img} alt={item.title} className="swiper-image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button prev-button"></button>
        <button className="swiper-button next-button"></button>
      </div>
    </div>
  );
};

export default Company;

import React, { useEffect } from "react";
import img from "../../assets/img/trt.png";
import img1 from "../../assets/sertifikat/IQNET.png";
import img2 from "../../assets/sertifikat/SICQ.png";
import img3 from "../../assets/sertifikat/TRT.png";
import img4 from "../../assets/sertifikat/UZAUTO.png";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import img from "../../assets/imgRedCar.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./company.scss";
import Service from "../../components/service/Service";

const Company = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
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

        <div className="company__swiper">
          <div className="company__swiper__top">
            <h3 className="sertificat__title">СЕРТИФИКАТЫ КОМПАНИИ</h3>
            <div className="company__buttons"></div>
          </div>
          <Swiper
            slidesPerView={4}
            navigation={true}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide className="company__swiper__card">
              <img src={img1} alt="Hero Slide 3" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img2} alt="Hero Slide 1" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img3} alt="Hero Slide 2" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img4} alt="Hero Slide 3" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img1} alt="Hero Slide 3" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img2} alt="Hero Slide 1" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img3} alt="Hero Slide 2" />
            </SwiperSlide>
            <SwiperSlide className="company__swiper__card">
              <img src={img4} alt="Hero Slide 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Company;

// import "../../node_modules/swiper/swiper.scss";
// import "../../node_modules/swiper/swiper-bundle.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "../../node_modules/swiper/swiper.min.css";

import avocade from "./../images/hero/hero_img_avocado.jpg";
// import fish_icon from "./../images/icons.svg#icon-hero_fish"
import fish_icon from "./../images/fish_1.svg";
import carrot_icon from "./../images/carrot.svg";
import bottle_icon from "./../images/bottle.svg";
import meat_icon from "./../images/meat.svg";
import table_icon from "./../images/table.svg";
import ellipse from "./../images/Ellipse 100.png";

// import SwiperCore, { , Navigation } from 'swiper/modules';

// Импортируйте стили для вашего компонента, если необходимо
// import 'стили.css';

// Установите модули Swiper
// SwiperCore.use([Autoplay, Navigation]);

function Hero() {
  return (
    <>
      <section
        className="section hero"
      >
        {/* <div className="circle"></div> */}

        <div
          classNameName="hero__slider swiper"
          // style={{ width: '800px', height: 'auto' }}
        >
          <ul
            classNameName="hero_advertisement--list swiper-wrapper"
            // style={{ width: '800px', height: 'auto' }}
          >
            <Swiper
            
              // style={{ width: '800px', height: 'auto' }}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              keyboard={true}
            >
              {/* <div className="circle"></div> */}

              <SwiperSlide>
                <li className="swiper-slide">
                  <div className="hero_advertisement--item">
                    <div className="hero__sliderBox">
                      <h2 className="hero__sliderBox--title">
                        Detox программа –
                        <span className="hero__sliderBox--title-color">
                          вкусное очищение
                        </span>
                        организма
                      </h2>
                      <p className="hero__sliderBox--descr">
                        8 бутылочек
                        <span className="hero__sliderBox--descr-color">
                          натуральных смузи
                        </span>
                        и фрешей.
                      </p>
                      <div className="hero__sliderBox--order">
                        <button className="hero__sliderBox--btn">
                          Заказать
                        </button>
                        <p className="hero__sliderBox--price">
                          Пробный день всего:
                          <br />
                          <span className="hero__sliderBox--price-color">
                            427 грн
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      src={avocade}
                      alt=""
                      width="20px"
                      className="hero__slider--img"
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="swiper-slide">
                  <div className="hero_advertisement--item second">
                    <div className="hero__sliderBox">
                      <h2 className="hero__sliderBox--title second">
                        Сервис правильного питания. <br />
                        <span className="hero__sliderBox--title-color">
                          Худей быстро!
                        </span>
                      </h2>
                      <div className="hero__sliderBox--order">
                        <button className="hero__sliderBox--btn">
                          Заказать
                        </button>
                        <p className="hero__sliderBox--price">
                          Пробный день <br />
                          <span className="hero__sliderBox--price-color">
                            -30 %
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      src={avocade}
                      alt=""
                      width="20px"
                      className="hero__slider--img"
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="swiper-slide">
                  <div className="hero_advertisement--item third">
                    <div className="hero__sliderBox">
                      <h2 className="hero__sliderBox--title third">
                        <span className="hero__sliderBox--title-color">
                          Доверьтесь профессионалам.
                        </span>
                        Я Кобылинский Кирилл - основатель.
                      </h2>
                      <p className="hero__sliderBox--descr">
                        <span className="hero__sliderBox--descr-color">
                          Мастер спорта
                        </span>
                        Мастер спорта Украины по тяжелой атлетике.
                        <span className="hero__sliderBox--descr-color">
                          Высшее образование
                        </span>
                        института физкультуры(НуфвсУ).
                      </p>
                      <div className="hero__sliderBox--order">
                        <button className="hero__sliderBox--btn third">
                          Мой инстаграм
                        </button>
                        <p className="hero__sliderBox--price third">
                          Всегда открыт для клиентов
                        </p>
                      </div>
                    </div>
                    <img
                      src={avocade}
                      alt=""
                      width="20px"
                      className="hero__slider--img"
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="swiper-slide">
                  <div className="hero_advertisement--item">
                    <div className="hero__sliderBox">
                      <h2 className="hero__sliderBox--title">
                        Кето питание -
                        <span className="hero__sliderBox--title-color">
                          вкусное и экстремальное
                        </span>
                        быстрое похудение
                      </h2>
                      <p className="hero__sliderBox--descr">4 приема пищи.</p>
                      <div className="hero__sliderBox--order">
                        <button className="hero__sliderBox--btn">
                          Заказать
                        </button>
                        <p className="hero__sliderBox--price">
                          Пробный день <br />
                          <span className="hero__sliderBox--price-color">
                            от 490 грн
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      src={avocade}
                      alt=""
                      width="20px"
                      className="hero__slider--img"
                    />
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>

        <ul className="hero__foodConstuctor--list">
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              ККал
              <p className="hero__foodConstructor--descr">
                Программы 800 - 2400 ккал
              </p>
            </button>
          </li>
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              <img
                src={fish_icon}
                className="hero__foodConstuctor--svg"
                width="40px"
                height="40px"
              />
              <p className="hero__foodConstructor--descr">Fish</p>
            </button>
          </li>
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              <img
                src={carrot_icon}
                className="hero__foodConstuctor--svg"
                width="40px"
                height="40px"
              />
              <p className="hero__foodConstructor--descr">Veggie</p>
            </button>
          </li>
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              <img
                src={bottle_icon}
                className="hero__foodConstuctor--svg"
                width="40px"
                height="40px"
              />
              <p className="hero__foodConstructor--descr">Detox</p>
            </button>
          </li>
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              <img
                src={meat_icon}
                className="hero__foodConstuctor--svg"
                width="40px"
                height="40px"
              />
              <p className="hero__foodConstructor--descr">Keto</p>
            </button>
          </li>
          <li className="hero__foodConstuctor--item">
            <button type="button" className="hero__foodConstuctor--btn">
              {/* <div className="hero__foddConstructor--btn-box"> */}
              <span className="hero__foodConstuctor--btn-text">5</span>
              <img
                src={table_icon}
                className="hero__foodConstuctor--svg"
                width="30px"
                height="40px"
              />
              {/* </div>  */}
              <p className="hero__foodConstructor--descr">5 стол</p>
            </button>
          </li>
        </ul>
        {/* <div className="hero__sliderNav is-hidden">
          <div className="swiper-button-prev">
            <svg className="hero__sliderArrow--svg" width="8px" height="16px">
              <use href="./images/icons.svg#icon-hero_arrow_prev"></use>
            </svg>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next">
            <svg className="hero__sliderArrow--svg" width="8px" height="16px">
              <use href="./images/icons.svg#icon-hero_arrow_next"></use>
            </svg>
          </div>
        </div> */}

        <div className="hero-foodConstuctor-positionBox">
          <ul className="hero__foodConstuctor--list-mob">
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                ККал
              </button>
              <p className="hero__foodConstructor--descr-mob marginTop">
                Программы <br /> 800 - 2400 ккал
              </p>
            </li>

            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
              <img
                src={fish_icon}
                className="hero__foodConstuctor--svg-mob"
                width="40px"
                height="40px"
              />
              </button>
              <p className="hero__foodConstructor--descr-mob">Fish</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
              <img
                src={carrot_icon}
                className="hero__foodConstuctor--svg-mob"
                width="40px"
                height="40px"
              />
              </button>
              <p className="hero__foodConstructor--descr-mob">Veggie</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
              <img
                src={bottle_icon}
                className="hero__foodConstuctor--svg-mob"
                width="40px"
                height="40px"
              />
              </button>
              <p className="hero__foodConstructor--descr-mob">Detox</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
              <img
                src={meat_icon}
                className="hero__foodConstuctor--svg-mob"
                width="40px"
                height="40px"
              />
              </button>
              <p className="hero__foodConstructor--descr-mob">Keto</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                <span className="hero__foodConstuctor--btn-text-mob">5</span>

                <img
                src={table_icon}
                className="hero__foodConstuctor--svg-mob"
                width="40px"
                height="40px"
              />
              </button>
              <p className="hero__foodConstructor--descr-mob">5 стол</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="hero__decoration"></div>
        </div>
        <ul className="hero_networks-list"></ul>
      </section>
    </>
  );
}

export default Hero;

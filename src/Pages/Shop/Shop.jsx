// import styles from "../Shop/style.scss";
import first from "../../images/gallery/slider-desktop.jpg";
import second from "../../images/gallery/slider-desktop2.jpg";
import { Link } from "react-router-dom";

import fish_icon from "../../images/fish_1.svg";
import carrot_icon from "../../images/carrot.svg";
import bottle_icon from "../../images/bottle.svg";
import meat_icon from "../../images/meat.svg";
import table_icon from "../../images/table.svg";
import shop__img from "../../images/1Z5A5988.png";
import arrow from "../../images/Arrow.svg";

export default function shop() {
  return (
    // <div className={styles.shop}>
    //   <div className={styles.container}>
    //     <div className={styles.shop__items}>
    //       <div className={styles.shop__item}>
    //         <Link href="/candies" legacyBehavior>
    //           <a>
    //             <img
    //               src={first}
    //               alt="logo"
    //               layout={"raw"}
    //               className={styles.shop__img}
    //             />
    //           </a>
    //         </Link>
    //         <div className={styles.shop__name}>
    //           <h2 className={styles.shop__title}>Полезные конфеты</h2>
    //           <Link href="/candies" legacyBehavior>
    //             <a className={styles.shop__more_link}>
    //               <button className={styles.shop__more_btn}>Ассортимент</button>
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className={styles.shop__item_soon}>
    //         <Link href="/shopItem" legacyBehavior>
    //           <a>
    //             <img
    //               src={second}
    //               alt="logo"
    //               layout={"raw"}
    //               className={styles.shop__img}
    //             />
    //           </a>
    //         </Link>
    //         <div className={styles.shop__name}>
    //           <h2 className={styles.shop__title}>Гранола</h2>
    //           <Link href="/shopItem" legacyBehavior>
    //             <a className={styles.shop__more_link_soon}>
    //               <button className={styles.shop__more_btn}>Ассортимент</button>
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <section className="section hero shop">
        <div classNameName="hero__slider swiper">
          <div className="pagination">
            <div className="pagination-arrow">&lt;</div>
            <div className="pagination-item">1</div>
            <div className="pagination-item">2</div>
            <div className="pagination-item">3</div>
            <div className="pagination-arrow">&gt;</div>
          </div>
          <ul classNameName="hero_advertisement--list swiper-wrapper">
            {/* <Swiper
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
              <div className="circle"></div>

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
            </Swiper> */}

            <div className="menu_container">
              <div className="menu_columb">
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
              </div>
              <div className="menu_columb">
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
              </div>
              <div className="menu_columb">
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
                <div className="shop_card">
                  <img src={shop__img} alt="" className="menu_img" />
                  <p className="menu_title">Lorem ipsum dolor sit.</p>
                  <div className="menu_info">
                    <div className="menu_date">
                      <p>29.05.2020</p>
                    </div>
                    <button className="menu_button">Подробнее <img src={arrow} alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <div className="pagination">
            <div className="pagination-arrow">&lt;</div>
            <div className="pagination-item">1</div>
            <div className="pagination-item">2</div>
            <div className="pagination-item">3</div>
            <div className="pagination-arrow">&gt;</div>
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
                width="40px"
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
                <svg
                  className="hero__foodConstuctor--svg-mob"
                  width="40px"
                  height="40px"
                >
                  <use href="./images/icons.svg#icon-hero_fish"></use>
                </svg>
              </button>
              <p className="hero__foodConstructor--descr-mob">Fish</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                <svg
                  className="hero__foodConstuctor--svg-mob"
                  width="40px"
                  height="40px"
                >
                  <use href="./images/icons.svg#icon-hero_carrot"></use>
                </svg>
              </button>
              <p className="hero__foodConstructor--descr-mob">Veggie</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                <svg
                  className="hero__foodConstuctor--svg-mob"
                  width="40px"
                  height="40px"
                >
                  <use href="./images/icons.svg#icon-hero_bottle"></use>
                </svg>
              </button>
              <p className="hero__foodConstructor--descr-mob">Detox</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                <svg
                  className="hero__foodConstuctor--svg-mob"
                  width="40px"
                  height="40px"
                >
                  <use href="./images/icons.svg#icon-hero_meat"></use>
                </svg>
              </button>
              <p className="hero__foodConstructor--descr-mob">Keto</p>
            </li>
            <li className="hero__foodConstuctor--item-mob">
              <button type="button" className="hero__foodConstuctor--btn-mob">
                <span className="hero__foodConstuctor--btn-text-mob">5</span>
                <svg
                  className="hero__foodConstuctor--svg-mob"
                  width="40px"
                  height="40px"
                >
                  <use href="./images/icons.svg#icon-hero_table"></use>
                </svg>
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

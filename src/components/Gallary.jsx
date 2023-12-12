import React from "react";
import sliderDesktop1 from "../images/gallery/slider-desktop.webp";


import "../../node_modules/swiper/swiper.scss";
import "../../node_modules/swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';

function Gallary() {
  return (
    <>
      <section class="section gallery">
        <h2 class="gallery__title">Фото блюд</h2>
        <div class="mySwiper">
          <div class="swiper-wrapper">

          <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>
                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>
                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>
            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>
            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>
            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>

                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
              <SwiperSlide>
            <div class="swiper-slide">
              <div class="img__wrapper">
                <picture>
 
                  <img
                    class="slider__img"
                    src={sliderDesktop1}
                    alt="picture"
                    width="240"
                    height="346"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div></SwiperSlide>
          </Swiper>
            








          </div>
        </div>
      </section>
    </>
  );
}

export default Gallary;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Pagination]);

const SwiperIndicators = ({ totalSlides, activeIndex, onSlideChange }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      onSlideChange={onSlideChange}
    >
      {[...Array(totalSlides)].map((_, index) => (
        <SwiperSlide key={index}>
          <div
            className={`swiper-pagination-bullet ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            {index + 1}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperIndicators;

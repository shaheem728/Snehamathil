'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { slides } from '../assets/assets';

const PanoramaSlider = () => {

  return (
    <>
      <div className="w-full  py-8 ">
          <Swiper
            modules={[ Autoplay]}
         
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2.9, spaceBetween: 20 },
            1024: { slidesPerView: 4.5, spaceBetween: -10 },
            1280: { slidesPerView: 6.90 , spaceBetween:1},
          }}
         

            className="panorama-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="overflow-hidden">
                <div className="aspect-auto ">
                  <img
                    src={slide.url}
                    alt="slide"
                    className="w-full h-64  object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>
  );
};

export default PanoramaSlider;
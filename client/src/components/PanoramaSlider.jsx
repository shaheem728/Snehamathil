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
              640: {
                slidesPerView: 1.5,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: -1,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 4.5,
                spaceBetween: -40,
              },
            }}
            className="panorama-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="overflow-hidden  ">
                <div className="aspect-4/3 md:aspect-3/2 ">
                  <img
                    src={slide.url}
                    alt="slide"
                    className="w-screen  h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      <style jsx global>{`
        .panorama-swiper {
        padding: 0 !important;
        margin: 0 !important;
        padding-bottom: 50px !important;
        perspective: 1200px;
        transform-style: preserve-3d;
        }
        
        .panorama-swiper .swiper-wrapper {
          align-items: center;
        }
        
        .panorama-swiper .swiper-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform: scale(0.89);
        }
        
        .panorama-swiper .swiper-slide-active {
          transform: scale(0.84);
          z-index: 10;
        }
        
        .panorama-swiper .swiper-slide-prev,
        .panorama-swiper .swiper-slide-next {
          transform: scale(0.86);
        }
     
        
      `}</style>
    </>
  );
};

export default PanoramaSlider;
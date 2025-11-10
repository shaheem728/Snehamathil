'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { slides } from '../assets/assets'; // import your slides array

const PanoramaSwiper = () => {
  return (
    <div className="w-full  flex justify-center items-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5} // 5 images visible
        centeredSlides={true}
        spaceBetween={-80}
        className="w-[90%] max-w-7xl perspective-distant"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center transition-all duration-700"
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-lg shadow-gray-800/70">
                <img
                  src={slide.url}
                  alt={`Slide ${slide.id}`}
                  className="object-cover w-[300px] h-[250px] transition-all duration-700 group-hover:scale-105"
                />
                {/* Reflection effect */}
                <div className="absolute bottom-[-70%] left-0 right-0 h-full opacity-30 rotate-180 scale-x-[-1]">
                  <img
                    src={slide.url}
                    alt={`Reflection ${slide.id}`}
                    className="object-cover w-[300px] h-[250px]"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Panorama Curved Effect */}
      <style jsx>{`
        .swiper {
          transform-style: preserve-3d;
        }

        .swiper-slide {
          transform-origin: center;
          transition: transform 0.7s ease, opacity 0.7s ease;
        }

        /* Center slide (slightly smaller + lowered for curved look) */
        .swiper-slide-active img {
          transform: scale(0.8) translateY(40px) rotateY(0deg);
          filter: brightness(1);
        }

        /* Left side slides tilt inward */
        .swiper-slide-prev img {
          transform: scale(0.9) translateY(25px) rotateY(25deg);
          filter: brightness(0.9);
        }

        /* Right side slides tilt inward */
        .swiper-slide-next img {
          transform: scale(0.9) translateY(25px) rotateY(-25deg);
          filter: brightness(0.9);
        }

        /* Farther slides smaller and dimmer */
        .swiper-slide-next + .swiper-slide img,
        .swiper-slide-prev + .swiper-slide img {
          transform: scale(0.75) translateY(50px) rotateY(40deg);
          filter: brightness(0.7);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default PanoramaSwiper;

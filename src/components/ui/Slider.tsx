'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

// Estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Slider.module.scss';
import { bannerSlides } from '@/constants';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.carousel}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        keyboard
        breakpoints={{
          // cuando el ancho de la ventana es >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // cuando el ancho de la ventana es >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // cuando el ancho de la ventana es >= 1024px
          1024: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }}
      >
        {bannerSlides.map((bannerSlide) => (
          <SwiperSlide key={bannerSlide.name}>
            <Image
              src={bannerSlide.source}
              alt={bannerSlide.name}
              width={1921} // Ajusta el tamaño según sea necesario
              height={713} // Ajusta el tamaño según sea necesario
              className={styles.bannerImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
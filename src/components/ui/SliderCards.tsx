'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './SliderCards.module.scss';
import Image from 'next/image';

const Slider = ({ images }: any) => {

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.carousel}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        keyboard
      >
        {images.map((image: any) => (
          <SwiperSlide
            key={image}>
            <Image
              src={image}
              alt={image}
              width={500}
              height={500}
              className={styles.camisa}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
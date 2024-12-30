'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

// Estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Slider.module.scss';
import { bannerSlides, bannerSlidesMobile } from '@/constants';
import Image from 'next/image';

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = isMobile ? bannerSlidesMobile : bannerSlides;

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
      >
        {slides.map((bannerSlide) => (
          <SwiperSlide key={bannerSlide.name}>
            <Image
              src={bannerSlide.source}
              alt={bannerSlide.name}
              width={isMobile ? 879 : 1921}
              height={isMobile ? 641 : 713}
              className={styles.bannerImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
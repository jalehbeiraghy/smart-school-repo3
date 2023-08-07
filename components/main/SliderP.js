import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
        </SwiperSlide>
      <SwiperSlide>
              <Image src='/images/2.jpg' width='800' height='600' alt="ceo" />
       </SwiperSlide>
      <SwiperSlide>
      <Image src='/images/4.jpg' width='800' height='600' alt="ceo" />
      </SwiperSlide>
      <SwiperSlide>
      <Image src='/images/2.jpg' width='800' height='600' alt="ceo" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
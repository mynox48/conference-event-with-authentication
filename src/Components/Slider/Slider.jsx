// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Event1 from '..//..//assets/event (1).jpg'
import Event2 from '..//..//assets/event (2).jpg'
import Event3 from '..//..//assets/event (3).jpg'
import Event4 from '..//..//assets/event (4).jpg'
import Event5 from '..//..//assets/event (5).jpg'
import Event6 from '..//..//assets/event (6).jpg'
import Event7 from '..//..//assets/event (7).jpg'
import Event8 from '..//..//assets/event (8).jpg'
import Event9 from '..//..//assets/event (9).jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Event1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event9} />
        </SwiperSlide>
  
      </Swiper>
    </>
  );
}

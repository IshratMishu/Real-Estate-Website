import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex relative'>
            <div className='absolute left-2 top-2 lg:left-14 lg:top-1/3 md:left-14 md:top-1/4'>
              <h2 className='text-xs md:text-lg lg:text-2xl font-bold'>Experience Luxury Like Never Before</h2>
              <p className='text-xs md:text-lg font-medium mt-1 md:mt-4'>Step into Timeless Elegance with <br /> Our <span className='font-bold text-xs md:text-xl'>Grand Mansions</span>, <br /> Where Luxury Meets Sophistication <br />in Sprawling Grounds of Opulence.</p>
              <button className='btn btn-xs md:btn-md '>Explore Now</button>
            </div>
            <div className=''>
              <img className='' src="/src/assets/mansion.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex relative'>
            <div className='absolute left-2 top-2 md:left-14 md:top-1/3'>
              <h2 className='text-base md:text-3xl font-bold'>MODERN RESORT</h2>
              <h4 className='text-sm font-semibold'>FOR SALE</h4>
              <p className='mt-1 md:mt-4 text-base font-semibold'>Find your Property</p>
              <button className='btn btn-sm md:btn-md md:mt-2'>Book Now</button>
            </div>
            <div><img src="/src/assets/resort.png" alt="" /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex relative'>
            <div>
              <h2 className='text-sm lg:text-4xl md:text-2xl font-bold absolute left-24 top-2 lg:left-96 lg:top-10 md:left-60 md:top-7'>Beachfront Properties</h2>
            </div>
            <div><img src="/src/assets/beach.png" alt="" /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/Modern Luxury Penthouse Living.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
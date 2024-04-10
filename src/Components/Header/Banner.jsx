

import mansion from '../../assets/mansion1.jpeg'
import sat from '../../assets/123.jpg'
import era from '../../assets/house-2469110_1280.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div>
        <SwiperSlide style={{
          backgroundImage: `url(${sat})`,
        }}>
          <div className="title font-medium text-lg md:text-4xl" data-swiper-parallax="-300" >
            Modern Luxury Penthouse Living
          </div>
          <div className="subtitle card glass rounded-none text-sm md:text-xl" data-swiper-parallax="-200">
            <p>Elevate your lifestyle with cutting-edge design and breathtaking views.</p>
          </div>
          <div className="text card glass rounded-none p-2 mt-3 md:max-w-[400px] text-sm" data-swiper-parallax="-100">
            <p>
              From sleek architectural features to expansive windows framing panoramic vistas, immerse yourself in a world of unparalleled elegance and sophistication.
            </p>
          </div>
          <Link to="/gallery"><button className="btn btn-primary mt-2">View in Gallery</button></Link>
        </SwiperSlide>

        <SwiperSlide style={{
          backgroundImage: `url(${mansion})`
        }}>
          <div className="title card glass rounded-none font-medium text-lg md:text-4xl p-2" data-swiper-parallax="-300">
            Tranquil Haven: Your Ideal Retreat
          </div>
          <div className="text card glass rounded-none p-2 mt-3 text-sm md:max-w-lg md:text-lg" data-swiper-parallax="-100">
            <p>
              Step into a realm of unparalleled luxury with this magnificent mansion, where opulence intertwines seamlessly with timeless elegance.
            </p>
          </div>
          <Link to="/blogs"><button className="btn btn-primary mt-2">Read Blogs</button></Link>
        </SwiperSlide>

        <SwiperSlide style={{
          backgroundImage: `url(${era})`
        }}>
          <div className="text card glass bg-gray-400 rounded-none p-5 mt-52 md:mt-5 md:max-w-xl text-sm md:text-lg" data-swiper-parallax="-200">
            The epitome of elegance and luxury, this villa offers a haven of tranquility amidst breathtaking surroundings.
          </div>
          <Link to="/gallery"><button className="btn btn-primary mt-2">View in Gallery</button></Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;




import 'animate.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import luxury1 from '../assets/facade-modern-building-with-geometric-windows-curved-walls_181624-16998.jpg'
import luxury2 from '../assets/pexels-keegan-checks-19199133.jpg'
import luxury3 from '../assets/modern-style-house-exterior-with-terrace_114579-2229.jpg'
import luxury4 from '../assets/pool-hammocks_1203-141.jpg'



const Gallery = () => {

    return (
        <>
            <Helmet>
                <title>LuxVista - Gallery</title>
            </Helmet>
            <Swiper
                slidesPerView={3}
                spaceBetween={2}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 4,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper rounded-2xl w-full h-full mt-32"
            >
                <SwiperSlide className='bg-slate-50 '>
                    <p className='text-black text-2xl font-bold mt-36 flex items-center animate__animated animate__bounceInLeft'>Find Our Luxury Properties here <IoMdArrowRoundForward className="text-4xl font-bold animate__animated animate__headShake animate__infinite text-secondary" /></p>
                </SwiperSlide>
                <SwiperSlide className='text-center bg-slate-50 text-lg flex justify-center items-center animate__animated animate__bounceInDown'>
                    <p className='text-black text-sm font-medium'>Exterior shot of a luxurious mansion surrounded by lush landscaping and scenic views.</p>
                    <img className='block h-full w-full object-cover' src={luxury1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center bg-slate-50 text-lg flex justify-center items-center animate__animated animate__bounceInUp'>
                    <p className='text-black text-sm font-medium'>Enjoy resort-style amenities in your own private oasis.</p>
                    <img className='block h-full w-full object-cover' src={luxury2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center bg-slate-50 text-lg flex justify-center items-center'>
                    <p className='text-black text-sm font-medium'>Aerial view of a luxurious villa featuring outdoor lounge area, and manicured gardens.</p>
                    <img className='block h-full w-full object-cover' src={luxury3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center bg-slate-50 text-lg flex justify-center items-center'>
                    <p className='text-black text-sm font-medium'>Immerse yourself in sophistication and elegance at this exclusive address.</p>
                    <img className='block h-full w-full object-cover' src={luxury4} alt="" />
                </SwiperSlide>
            </Swiper>



            <div className="stats shadow mt-20 mb-28 text-center flex flex-col md:flex-row justify-center shadow-gray-400 shadow-md m-4">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white text-lg">Views</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white text-lg">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-white text-lg">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </>
    );
}

export default Gallery;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LandSupport = () => {
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className="flex flex-col md:flex-row gap-5 mt-20">
            <div data-aos="fade-up-right"
                data-aos-anchor-placement="top-bottom" className="w-auto md:w-1/2 space-y-7 p-5 mt-0 md:mt-20">
                <h2 className='text-xl font-bold'>We facilitate hassle-free property transactions for our clients, whether they are selling, buying, or renting.</h2>
                <p className='font-medium'>At <span className='text-lg font-bold'>LuxVista</span>, we are committed to delivering exceptional real estate support services that drive success for our clients. Let us handle the details so you can focus on achieving your goals and growing your business.</p>
                <ul>
                    <li className='flex gap-1 items-center'><FaCheckCircle /> We offer round-the-clock support</li>
                    <li className='flex gap-1 items-center'><FaCheckCircle />
                        Personalized assistance with home loans </li>
                    <li className='flex gap-1 items-center'><FaCheckCircle /> Free submission on our website</li>
                    <li className='flex gap-1 items-center'><FaCheckCircle /> Expert legal guidance</li>
                </ul>
                <Link to="/contact"><button className="btn btn-primary font-bold text-lg mt-4">Contact Us</button></Link>
            </div>



            <div className="w-auto">
                <div data-aos="fade-up" data-aos-duration="3000" className="relative lg:w-[450px] md:w-80 h-72">
                    <img className='absolute top-5 left-0 md:left-5 rounded-xl shadow-gray-400 shadow-lg' src="/src/assets/1.jpg" alt="" />
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="relative lg:w-[420px] h-72">
                    <img className='absolute lg:right-10 md:right-5 rounded-xl shadow-gray-400 shadow-lg' src="/src/assets/2.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default LandSupport;
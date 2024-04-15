import { Link } from "react-router-dom";
import man from '../assets/young-successful-businessman-posing-with-crossed-arms.jpg'


const About = () => {
    return (
        <div data-aos="flip-right" className="flex flex-col md:flex-row mt-28">
            <div className="w-auto md:w-2/5">
            <img className="rounded-3xl shadow-gray-400 shadow-md" src={man} alt="" />
            </div>
            <div className="mt-auto w-auto md:w-3/5 lg:mt-32 md:mt-10 space-y-5 p-6">
                <h3>WHO WE ARE</h3>
                <h1 className="text-3xl lg:text-3xl md:text-xl font-semibold text-white">We help clients buy and sell <br /> houses since 1992</h1>
                <p className="font-medium">With over $2 Billion in sales, due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Las Vegas. Our agency is the industry’s top luxury producer.</p>
                <Link to="/about"><button className="btn btn-primary font-bold text-lg mt-4">More About Us</button></Link>
            </div>
        </div>
    );
};

export default About;
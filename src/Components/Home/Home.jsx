
import { useState } from "react";
import EstatesData from "../../Pages/EstatesData";
import Banner from "../Header/Banner";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import 'animate.css';


const Home = () => {
    const luxuryCards = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSeeAll = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowAll(true);
        }, 2000);
    }

    return (
        <div className="mt-24 font-poppins">
            <Banner></Banner>
            <div className="mt-32">
                <div className="flex justify-between mt-32">
                    <h1 className="text-4xl font-semibold">Our Newest Properties</h1>
                    {!showAll && (<button onClick={handleSeeAll} className="flex items-center font-medium animate__animated animate__headShake animate__infinite">See All <IoIosArrowForward className=" font-bold text-accent" /></button>)}
                </div>
                <PiDotsThreeOutlineFill className="text-3xl text-gray-300" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 ">
                {loading ? (
                    <span className="loading loading-spinner loading-lg ml-40 lg:ml-[550px] md:ml-96"></span>
                )
                    :
                    showAll ? luxuryCards.map(estate => <EstatesData key={estate.id} estate={estate}></EstatesData>) : luxuryCards.slice(0, 6).map(estate => <EstatesData key={estate.id} estate={estate}></EstatesData>)
                }
            </div>
        </div>
    );
};

export default Home;
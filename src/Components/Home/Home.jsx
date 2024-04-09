
import EstatesData from "../../Pages/EstatesData";
import PropertyHeader from "../../Pages/PropertyHeader";
import Banner from "../Header/Banner";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const luxuryCards = useLoaderData();

    return (
        <div className="mt-24 font-poppins">
            <Banner></Banner>
            <PropertyHeader></PropertyHeader>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 ">
                {
                    luxuryCards.map(estate => <EstatesData key={estate.id} estate={estate}></EstatesData>)
                }
            </div>
        </div>
    );
};

export default Home;
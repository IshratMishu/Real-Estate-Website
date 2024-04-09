import { IoIosArrowForward } from "react-icons/io";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
const PropertyHeader = () => {
    return (
        <div className="mt-32">
            <div className="flex justify-between mt-32">
            <h1 className="text-4xl font-semibold">Our Newest Properties</h1>
            <button className="flex items-center font-medium">See All <IoIosArrowForward /></button>
            </div>
            <PiDotsThreeOutlineFill className="text-3xl text-gray-300"/>
        </div>
    );
};

export default PropertyHeader;
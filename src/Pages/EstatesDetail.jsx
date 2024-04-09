
import { useLoaderData, useParams } from "react-router-dom";
import { PiSirenThin } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { HiOutlineMinus } from "react-icons/hi";

const EstatesDetail = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const singleEstate = estates.find(singleEstate => singleEstate.id === idInt);

  return (
    <div className="card bg-base-100 shadow-xl mt-28">
      <figure className="px-10 pt-10">
        <img src={singleEstate.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center space-y-3">
        <h2 className="card-title text-4xl">{singleEstate.estate_title}</h2>
        <div className="flex gap-12 md:gap-96 text-lg">
          <p className="flex items-center gap-1"><MdOutlineRealEstateAgent /> {singleEstate.segment_name}</p>
          <p className="flex items-center gap-1"><PiSirenThin className="animate__animated animate__shakeX"/> {singleEstate.status}</p>
        </div>

        <p className="text-lg font-semibold text-gray-600">{singleEstate.description}</p>


        <table className="table table-zebra">
          <tbody>
          <tr>
              <td className="text-2xl font-semibold">Overview <HiOutlineMinus/></td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{singleEstate.area}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{singleEstate.price}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{singleEstate.location}</td>
            </tr>
            <tr>
              <td>Bedroom</td>
              <td>{singleEstate.bedrooms}</td>
            </tr>
            <tr>
              <td>Bathroom</td>
              <td>{singleEstate.bathrooms}</td>
            </tr>
            <tr>
              <td>Facilities</td>
              <td>{singleEstate.facilities[0]}, {singleEstate.facilities[1]}, {singleEstate.facilities[2]}</td>
            </tr>
            <tr>
              <td>Garden</td>
              <td>{singleEstate.garden ? singleEstate.garden : 'No Garden'}</td>
            </tr>
            <tr>
              <td>Garage</td>
              <td>{singleEstate.garage ? singleEstate.garage : 'No Garage'}</td>
            </tr>
            <tr>
              <td>Built Year</td>
              <td>{singleEstate.year_built}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstatesDetail;
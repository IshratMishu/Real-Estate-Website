import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";


const EstatesData = ({ estate }) => {
  const { image, estate_title, id, location, status, segment_name, year_built, area, price } = estate;


  return (
    <div className="card glass shadow-gray-400 shadow-md ">
      <figure className="w-auto relative"><img src={image} alt="car!" />
        <div className="badge badge-secondary text-white badge-lg p-4 absolute right-5 top-14">{status}</div>
      </figure>
      <div className="card-body space-y-3 text-white">
        <h2 className="card-title">{estate_title}</h2>

        <div className="flex flex-col flex-grow">
          <small className="flex items-center gap-1"><MdOutlineLocationOn /> {location}</small>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              <tr>
                <td>Segment</td>
                <td>{segment_name}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{price}</td>
              </tr>
              <tr>
                <td>Built Year</td>
                <td>{year_built}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{area}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions justify-end flex flex-col flex-grow">
          <Link to={`/luxuryEstates/${id}`}><button className="btn btn-primary font-bold ml-20">View Property</button></Link>
        </div>
      </div>
    </div>

  );
};

export default EstatesData;

EstatesData.propTypes = {
  estate: PropTypes.object
}
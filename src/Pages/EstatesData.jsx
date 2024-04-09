import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EstatesData = ({ estate }) => {
  const { image, estate_title, id, location, status } = estate;


  return (

    <div className="card glass">
      <figure className="w-auto relative"><img src={image} alt="car!"/>
      <div className="badge badge-secondary badge-lg absolute right-5 top-14">{status}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <small>{location}</small>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/luxuryEstates/${id}`}><button>View Property</button></Link>
        </div>
      </div>
    </div>

  );
};

export default EstatesData;

EstatesData.propTypes = {
  estate: PropTypes.object
}
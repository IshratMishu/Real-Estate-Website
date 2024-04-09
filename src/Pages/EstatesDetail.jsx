
import { useLoaderData , useParams} from "react-router-dom";

const EstatesDetail = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const singleEstate = estates.find(singleEstate => singleEstate.id === idInt);
    
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{singleEstate.area}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
    );
};

export default EstatesDetail;
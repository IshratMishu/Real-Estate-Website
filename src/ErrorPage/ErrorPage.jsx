import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="font-poppins text-center border-2 shadow-xl p-5 m-10 md:p-20 md:m-20">
            <h2 className="font-bold text-3xl">Oops! Not Found☹️</h2>
            <Link to='/'><button className="btn text-white font-bold text-lg mt-5">Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
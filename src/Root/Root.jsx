import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className='font-poppins'>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <ToastContainer />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
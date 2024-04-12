import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user , loading} = useAuth();
    const location = useLocation();
  
    if (loading) {
        return <span className="loading loading-spinner loading-lg mt-28 ml-40 lg:ml-[550px] md:ml-96"></span>;
    }

    if (user) {
        return children;
    }
  
    return <Navigate state={location?.pathname || '/'} to='/login' ></Navigate>;
    
}

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}





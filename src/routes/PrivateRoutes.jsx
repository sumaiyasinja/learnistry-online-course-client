import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
'use client';


const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location= useLocation()

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <button color="gray">
                <div aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3 md:text-9xl text-teal-500">Loading...</span>
            </button>
        </div>

    }
    if(user){
        return children
     }
    
    return <Navigate state={location?.pathname} to='/login'></Navigate>
    };

    PrivateRoutes.propTypes = {
        children: PropTypes.node,
      };

export default PrivateRoutes;
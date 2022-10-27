import React, { useContext } from 'react';
import { Vortex } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';



const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    console.log("currentLocation", location);


    if (loader) {
        return <div className="mt-10 flex justify-center">
            <Vortex

                visible={true}
                height="100"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#20B486', '#047857', '#20B486', '#047857', '#20B486', '#047857']}
            />
        </div>
    }
    // Authorization
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate >
    }
    else
        return children;
};

export default PrivateRoute;
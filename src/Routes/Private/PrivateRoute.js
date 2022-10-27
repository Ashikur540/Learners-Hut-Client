import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log("currentLocation", location);
    // Authorization
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate >
    }
    else
        return children;
};

export default PrivateRoute;
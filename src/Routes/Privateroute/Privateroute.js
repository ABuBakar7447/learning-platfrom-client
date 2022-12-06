import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProbider/AuthProbider';

const Privateroute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <Spinner animation="border" variant="dark" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default Privateroute;
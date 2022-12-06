import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HmPgDetails = ({course}) => {
    const {id, name, image} = course
    return (
        <div className="col">
        <div className="card h-100 p-2">
            <img src={image} className="card-img-top w-50 h-50 mx-auto" alt="..."/>
            <div id="neymarBoxChild" className="card-body text-center my-4">
                <h5 className="card-title">{name}</h5>
                <Link to={`/course/${id}`}><Button className="w-75 p-2 border border-0 rounded">Select </Button></Link>
                
            </div>
        </div>
    </div>
    );
};

export default HmPgDetails;
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Premium = () => {
    const premiumDetails = useLoaderData()
    const {name, image, payment,course_id} = premiumDetails
    const navigate = useNavigate()

    const notify = () => toast("Welcome, you have got the premium access");
    
    const notifyCancel = () =>{ 
        alert("Are you sure?");
        navigate('/');

    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name} Course</Card.Title>
                <Card.Text>
                    <>
                    <span className='text-primary fw-bold fs-6 me-2'>Course Id:</span>{course_id}</>
                    <> <span className='text-primary fw-bold fs-6 me-2'>Price:</span> <span className='text-success fw-bold fs-6 me-2'>{payment}</span></>
                </Card.Text>
                <div className='my-2'>
                    <Button onClick={notify} variant="primary">Buy This Course</Button>
                    <ToastContainer />
                </div>
                <div className='my-2'>
                    <Button onClick={notifyCancel} variant="primary">Go to course page</Button>
                    <ToastContainer />
                </div>
    
                
            </Card.Body>
        </Card>
    );
};

export default Premium;
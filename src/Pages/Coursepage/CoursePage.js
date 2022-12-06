import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CoursePage = () => {
    const coursedetails = useLoaderData()
    const {name, image, details, payment,course_id} = coursedetails
    return (
        <div>

            <Pdf  targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => 
            
            <><p className='text-center fs-5 fw-bold'>Language Details: <span className='fs-5 fw-bold text-warning me-2'>{name} </span> <button className='border rounded' onClick={toPdf}> Generate Pdf</button></p></>}
            </Pdf>

            <div >
                
                <Card className="text-center">
                    <div ref={ref}>
                        <Card.Header className='fw-bold'>
                        {name}
                        </Card.Header>
                        <Card.Body>
                        
                            <img src={image} className="card-img-top w-75 h-75 mx-auto" alt="..."/>
                            <Card.Text className='text-start'> <span className='text-primary fs-5 me-2'>Details:</span> 
                            {details}
                            </Card.Text>
                

                        </Card.Body>
                    </div>
                
                <Link to={`/premium/${course_id}`}>
                    <Button variant="primary">Get Premium Access at <span className='text-warning fw-bold fs-6'> {payment}</span></Button>
                </Link>
            
                </Card>
            </div>
        </div>
        
    );
};

export default CoursePage;
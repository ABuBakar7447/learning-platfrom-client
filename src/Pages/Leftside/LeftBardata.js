import React from 'react';
import './LeftBardata.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LeftBardata = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect( ()=>{
        fetch('https://course-hub-server-alpha.vercel.app/course-data')
        .then( res => res.json())
        .then(data => setCourseData(data))
        
    }, [])


    return (
        <div className='mx-auto'>
            {
                courseData.map(course => 
                    <Link key={course.id} to={`/course/${course.id}`}><Button className="w-75 p-2 border border-0 rounded btn btn-dark mb-2">{course.name}</Button></Link>
                )
                
            }
        </div>
    );
};

export default LeftBardata;
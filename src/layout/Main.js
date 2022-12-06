import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftBardata from '../Pages/Leftside/LeftBardata';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <LeftBardata></LeftBardata>
                    </Col>

                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Main;
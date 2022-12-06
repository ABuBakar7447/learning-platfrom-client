import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import LeftBardata from '../Pages/Leftside/LeftBardata';
import photo from '../Image/course-icon.png'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProbider/AuthProbider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DarkModeToggle from "react-dark-mode-toggle";



const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const handleLogout = () =>{
        logout()
        .then( () => {})
        .catch( error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >
                    <img src={photo} style={{ height: '40px' }} alt="" />
                    <Link to='/' style={{ textDecoration: 'none' }} className='fw-bold link-light'>CouseHub</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav><Link to='/' style={{ textDecoration: 'none' }} className='fw-bold link-light me-2'>Course</Link></Nav>

                        <Nav
                        ><Link to='' style={{ textDecoration: 'none' }} className='me-2 fw-bold link-light'>Faq</Link></Nav>

                        <Nav><Link to='/blog' style={{ textDecoration: 'none' }} className='me-2 fw-bold link-light'>Blog</Link></Nav>

                    </Nav>
                    <Nav>
                        <Nav className='mx-2' href="#deets">
                            {
                            user?.uid?
                            <>
                                
                                <Button variant="light" onClick={handleLogout}>Logout</Button>
                            </>
                            :
                            <>
                                <Link className='mx-2' to='/login' >Login</Link>
                                <Link to='/register' >Register</Link>
                            </>
                            }
                        </Nav>

                        <Nav className='mx-2' href="#deets">
                            <><span className='text-light'>Light</span><DarkModeToggle
                         onChange={setIsDarkMode}
                        checked={isDarkMode}
                          size={60}
                        /><span className='text-light'>Dark</span></>
                        
                        </Nav>

                        <Nav.Link eventKey={2} href="#memes">
                        {user?.photoURL ?
                                <Image
                                    title={user.displayName}
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <button title={user?.displayName} ><FaUser></FaUser></button>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftBardata></LeftBardata>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
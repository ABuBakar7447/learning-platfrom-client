import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProbider/AuthProbider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'; 

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from,{replace:true});
        })
        .catch(error =>{console.error(error)
        setError(error.message)
        })
    }

    return (
        <Form onSubmit={handleLogin}>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <div>
                <>Need a to open a acceount? <Link to='/register' >Register Now</Link> </>
            </div>
        </Form>
    );
};

export default Login;
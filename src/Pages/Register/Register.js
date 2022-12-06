import { GoogleAuthProvider, updateProfile, getAuth, GithubAuthProvider} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProbider/AuthProbider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const Register = () => {
    const {providerGoogleLogin, createUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            updateUserName(name)
        })
        .catch(error =>{ console.error(error)
        setError(error.message)
        })
    }
    const handleGoogle = () =>{
        providerGoogleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const handleGitHub = () =>{
        providerGoogleLogin(gitProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser,{
            displayName: name
        })
        .then( () =>{
            console.log('found')
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Full Name" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="photoURL" placeholder="Enter Photo URL" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
               {error}
            </Form.Text>
        </Form>

        <Button onClick={handleGoogle} className="mt-3" variant="dark" type="submit">
              Sign In With Google
        </Button>
        
        <Button onClick={handleGitHub} className="mt-3 mx-5" variant="dark" type="submit">
              Sign In With GitHub
        </Button>
        </div>
    );
};

export default Register;
import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Signup.css';
import {userSignupMutation, useSignup} from '../services/appApi';
import { Alert } from 'bootstrap';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [signup, {error, isLoading, isError}] = userSignupMutation();
    
    function handleSignup (e)  {
        e.preventDefault();
        signup({name, email, password});
    }
    return (
        <Container>
            <Row>
                <Col md={6} className="signup_form--container mt-5">
                <Form style={{width: '100%'}} onSubmit={handleSignup} >
                        <h3>Create an account</h3>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control  type="text" placeholder="Your Name" value={name} required onChange= { e => setName (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control  type="email" placeholder="Enter your email" value={email} required onChange= { e => setEmail (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your Password" value={password} required onChange={e=> setPassword (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>Create account</Button>
                         <a>
                         <p>Don't have an account?<Link to="/login">Login</Link></p>
                         </a>
                        </Form.Group>
                    </Form>
                </Col>
                   <Col md={6} className="signup_image--container"></Col>
            </Row>
       </Container>
    );
};

export default Signup; 




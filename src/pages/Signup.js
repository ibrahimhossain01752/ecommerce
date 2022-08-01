import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Container>
            <Row>
                <Col md={6} className="signup_form--container mt-5">
                <Form style={{width: '100%'}} >
                        <h3>Create an account</h3>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control  type="email" placeholder="Enter your email" value={email} required onChange= { e => setEmail (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your Password" value={password} required onChange={e=> setPassword (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit">Login</Button>
                         <a>
                         <p>Don't have an account?<Link to="">Crate an account</Link></p>
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




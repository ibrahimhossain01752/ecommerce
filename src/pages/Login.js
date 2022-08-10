import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Signup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
       <Container>
            <Row>
                <Col md={6} className="login_form--container">
                <Form style={{width: '100%'}}>
                        <h3>Login to your account</h3>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={email} required onChange= { e => setEmail (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your Password" value={password} required onChange={e=> setPassword (e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit">Login</Button>
                           <p>Don't have an account?<Link to="/signup">Crate an account</Link></p>
                        </Form.Group>
                    </Form>
                </Col>
                   <Col md={6} className="signup_image--container"></Col>
            </Row>
       </Container>
    );
};

export default Login;
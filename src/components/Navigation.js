import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector,useDispatch} from "react-redux";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../features/userSlice';

const Navigation = () => {
    const user = useSelector (state => state.user);
    const dispatch = useDispatch();

    function handleLogout (){
        dispatch(logout());
    }
    
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Ecommerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user */}
            {!user && (
                <LinkContainer to="/login">
                     <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            )}
           
            {/* if user */}
            {user && (
            <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                    <>
                    <LinkContainer to="/dashboard">
                    <NavDropdown.Item href="#action/3.3">Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new-Product">
                    <NavDropdown.Item href="#action/3.3">Create Product</NavDropdown.Item>
                    </LinkContainer>
             
              
              </>
                )}
                {user.isAdmin && (
                     <>
                     <LinkContainer to="/cart">
                     <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                     </LinkContainer>
                     <LinkContainer to="/orders">
                     <NavDropdown.Item href="#action/3.3">My orders</NavDropdown.Item>
                     </LinkContainer>
              
               
               </>
                )}
              <NavDropdown.Divider />
                    <Button varient="danger" onClick={handleLogout} className="logout-btn">Logout</Button>
            </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;
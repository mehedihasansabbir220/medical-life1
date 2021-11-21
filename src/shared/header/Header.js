import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';
import './header.css'

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Medical Life </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/about#about">ABOUT US </Nav.Link>
                        <Nav.Link as={HashLink} to="/services#services">SERVICES </Nav.Link>
                        <Nav.Link as={HashLink} to="/appointment#appointment">APPOINTMENT  </Nav.Link>
                        <Nav.Link as={HashLink} to="/contact#contact">CONTACT</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="info">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
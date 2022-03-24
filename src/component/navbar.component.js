import React from 'react';


//css
import { Container, Navbar, Nav } from 'react-bootstrap';

//routing
import {Link} from 'react-router-dom';


const ApplicationNavbar = () => {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className='navTitle' href="/">Rishith Gandham</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}



export default ApplicationNavbar
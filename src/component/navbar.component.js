import React from 'react';


//css
import { Container, Navbar, Nav } from 'react-bootstrap';


const ApplicationNavbar = () => {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className='navTitle' href="/">Rishith Gandham</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}



export default ApplicationNavbar
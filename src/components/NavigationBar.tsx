import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import React from 'react';
import { Form } from 'react-bootstrap';

const logoStyle = {
    width: '40px',
    height: '40px',
};

const navFormStyle: React.CSSProperties = {
    marginRight: 'auto',
    maxWidth: '200px',
    width: '100%',
}

const brandCentered: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
};

const navStyle = {
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    width: '100%',
    gap: '1rem',
};

const navbarStyle: React.CSSProperties = {
    position: 'relative',
    height: '90px',
    backgroundColor: '#000',
    color: '#fff',
};

const navLinkStyle: React.CSSProperties = {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    padding: '1rem',
    fontStyle: 'bold',
};

function NavigationBar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" style={navbarStyle}>
            <Container>
                <Form className="d-flex" style={navFormStyle}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Brand href="/" style={brandCentered}>
                    <Image src="/logo/logo-light.png" alt="Logo" style={logoStyle} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={navStyle}>
                        <Nav.Link href="/epicdata" style={navLinkStyle}>EpicData</Nav.Link>
                        <Nav.Link href="/blogpost" style={navLinkStyle}>Blogpost</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;

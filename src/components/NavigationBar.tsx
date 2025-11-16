import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const logoStyle = {
    width: '40px',
    height: '40px',
};

const navStyle = {
    //the links to be on the right side
    justifyContent: 'flex-end',
    width: '100%',
    // space between links
    gap: '55px',
};

const titleStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
};


function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="/public/logo/logo-dark.png" alt="Logo" style={logoStyle} />
                </Navbar.Brand>
                <h1 style={titleStyle}>GalacticView</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={navStyle}>
                        <Nav.Link href="/epicdata">EpicData</Nav.Link>
                        <Nav.Link href="/blogpost">Blogpost</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;

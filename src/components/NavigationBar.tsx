import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const logoStyle = {
    width: '42px',
    height: 'auto',
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
}

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="src/assets/logo-dark.png" alt="Logo" style={logoStyle} />
                </Navbar.Brand>
                <h1 style={titleStyle}>GalacticView</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={navStyle}>
                        <Nav.Link href="/epicdata">EpicData</Nav.Link>
                        <Nav.Link href="/blogpost">Blogpost</Nav.Link>
                        {/*
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
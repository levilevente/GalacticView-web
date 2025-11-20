import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';
import style from './NavigationBar.module.css'

function NavigationBar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className={style.navbarStyle}>
            <Container>
                <Form className={`d-flex ${style.searchForm}`}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Brand href="/" className={style.brandCentered}>
                    <Image src="/logo/logo-light.png" alt="Logo" className={style.logoStyle} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto ${style.navStyle}`}>
                        <Nav.Link href="/epicdata" className={style.navLinkStyle}>EpicData</Nav.Link>
                        <Nav.Link href="/imageoftheday" className={style.navLinkStyle}>Image of the Day</Nav.Link>
                        <Nav.Link href="/blogpost" className={style.navLinkStyle}>Blogpost</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;

import { type FormEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { searchNasaLibrary } from '../api/nasaImageAndVideoLibrary.api.ts';
import style from './NavigationBar.module.css';

function NavigationBar() {
    const [query, setQuery] = useState('');

    const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await searchNasaLibrary(query);
        console.log(data);
    };

    return (
        <Navbar expand="lg" data-bs-theme="dark" className={style.navbarStyle}>
            <Container className={style.gridContainer}>
                <Form className={`d-flex ${style.searchForm}`} onSubmit={(e) => void searchHandler(e)}>
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => setQuery(e.target.value)} />
                </Form>
                <Navbar.Brand href="/" className={style.brandCentered}>
                    <Image src="/logo/logo-light.png" alt="Logo" className={style.logoStyle} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`ms-auto ${style.navStyle}`}>
                        <Nav.Link href="/epicdata" className={style.navLinkStyle}>
                            EpicData
                        </Nav.Link>
                        <Nav.Link href="/imageoftheday" className={style.navLinkStyle}>
                            Image of the Day
                        </Nav.Link>
                        <Nav.Link href="/blogpost" className={style.navLinkStyle}>
                            Blogpost
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;

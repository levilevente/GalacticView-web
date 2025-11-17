import React from 'react';

const footerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '3rem 0',
    textAlign: 'center',
    marginTop: '2rem',
    display: 'flex',
    bottom: '0',
    left: '0',
    justifyContent: 'space-between',
};

const firstDivStyle: React.CSSProperties = {
    marginLeft: '10rem',
    marginRight: '10rem',
    textAlign: 'left',
    width: '40rem',
}

const secondDivStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '5rem',
    marginRight: '10rem',
    textAlign: 'left',
}

function FooterBar() {
    return (
        <footer className="footer-bar" style={footerStyle}>
            <div style={firstDivStyle}>
                <img src="/logo/logo-light.png" alt="App Logo" style={{ width: '30px', height: '30px', marginRight: '10px', marginBottom: '10px' }} />
                <h1>GalacticView </h1>
                <p>GalacticView is build for space enthusiasts by space enthusiasts. Explore the wonders of the universe with us! You can create blog posts, share your favorite images, and stay updated with the latest space news.</p>
                <p>© 2025 GalacticView. All rights reserved.</p>
            </div>
            <div style={secondDivStyle}>
                <div>
                    <p>Home</p>
                    <p>Explore</p>
                    <p>Blog</p>
                    <p>About Us</p>
                </div>
                <div>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Help Center</p>
                </div>
                <div>
                    <p>Follow Us</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterBar;
import styles from './FooterBar.module.css';

function FooterBar() {
    return (
        <footer className={styles.footerBar}>
            <div className={styles.firstDiv}>
                <img src="/logo/logo-light.png" alt="App Logo" className={styles.logo} />
                <h1>GalacticView </h1>
                <p>GalacticView is built for space enthusiasts by space enthusiasts. Explore the wonders of the universe with us! You can create blog posts, share your favorite images, and stay updated with the latest space news.</p>
                <p>© 2025 GalacticView. All rights reserved.</p>
            </div>
            <div className={styles.secondDiv}>
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
    );
}

export default FooterBar;
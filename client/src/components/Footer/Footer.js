//TODO: Update Footer Component
//Update hrefs and add style

import React from "react"
import "./Footer.css"

const Footer = () => (
    <footer className="footer grid-x medium-12">
        <div className="footer-back-to-top cell medium-12">
            <a href="#">Back to Top</a>
        </div>
        <div className="footer-content grid-x medium-12">
            <div className="footer-content-section footer-description cell medium-4">
                <h3>Carbos</h3>
                <p>We create, display, demonstrate, and share web templates with the developer community. Let Carbos do the heavy-lifting for you.</p>
            </div>
            <div className="footer-content-section footer-technology cell medium-4">
                <h5>Our Stack</h5>
                <a href="https://www.mongodb.com/">MongoDB</a><br/>
                <a href="https://expressjs.com/">Express</a><br/>
                <a href="https://reactjs.org/">React</a><br/>
                <a href="https://nodejs.org/en/">Node</a><br/>
            </div>
            <div className="footer-content-section footer-links cell medium-4">
                <h5>Navigate</h5>
                <a href="/">Home</a><br/>
                <a href="/docs">Docs</a><br/>
                <a href="/templates">Templates</a><br/>
                <a href="/forum">Forum</a><br/>
                <a href="/team">Team</a>
            </div>
        </div>
        <div className="footer-copyright cell medium-12">
            &copy; Carbos 2018
        </div>
    </footer>
);

export default Footer;
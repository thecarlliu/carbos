//TODO: Update Footer Component
//Update hrefs and add style

import React from "react"
import "./Footer.scss"

const Footer = () => (
    <footer className="marketing-site-footer grid-x medium-12">
        <div className="medium-unstack grid-x medium-12">
            <div className="cell medium-6">
                <h4 className="marketing-site-footer-name">Carbos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
            </div>
            <div className="cell medium-6">
                <ul className="menu marketing-site-footer-menu-social simple grid-x medium-12">
                    <li><a href="https://github.com/thecarlliu/carbos"><img src="https://via.placeholder.com/100x100"/></a></li>
                    <li><a href="https://github.com/thecarlliu/carbos"><img src="https://via.placeholder.com/100x100"/></a></li>
                    <li><a href="https://github.com/thecarlliu/carbos"><img src="https://via.placeholder.com/100x100"/></a></li>
                    <li><a href="https://github.com/thecarlliu/carbos"><img src="https://via.placeholder.com/100x100"/></a></li>
                </ul>
            </div>
        </div>
        <div className="marketing-site-footer-bottom grid-x medium-12">
            <div className="large-unstack align-middle grid-x medium-12">
                <div className="cell medium-6">
                    <p>&copy; 2018 Carbos</p>
                </div>
                <div className="cell medium-6">
                    <ul className="menu marketing-site-footer-bottom-links">
                        <li><a href="/">Back to Top</a></li>
                        <li><a href="/docs">Docs</a></li>
                        <li><a href="/templates">Templates</a></li>
                        <li><a href="/forum">Forum</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
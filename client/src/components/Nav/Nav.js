//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const Nav = () => (
	<div>
        <div className="top-bar" id="responsive-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text"><img src="https://via.placeholder.com/20x20" alt="logo"/>  Carbos</li>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/team">Team Carbos</a></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search Docs"/></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;
//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const Nav = () => (
	<div>
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
            <div className="title-bar-title"><img src="https://via.placeholder.com/50x50" alt="logo"/>Carbos</div>
        </div>

        <div className="top-bar" id="responsive-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">Site Title</li>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/team">Team Carbos</a></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search"/></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;
//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const Nav = () => (
	<div>
        <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
            <button className="menu-icon" type="button" data-toggle></button>
            <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="main-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">Carbos</li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu vertical medium-horizontal expanded" data-responsive-menu="drilldown medium-dropdown">
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/team">Team</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;
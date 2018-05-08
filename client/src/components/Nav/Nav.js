//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const logo = require("../../images/logo.png");

const Nav = () => (
	<div className="nav">
        <nav className="top-bar topbar-responsive">
            <div className="top-bar-title">
    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle="topbar-responsive"/>
    </span>
                <a className="topbar-responsive-logo" href="/"><img className="nav-logo" src={logo} alt=""/></a>
            </div>
            <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                    <ul className="nav-links menu simple vertical medium-horizontal">
                        <li><a href="/docs">Docs</a></li>
                        <li><a href="/templates">Templates</a></li>
                        <li><a href="/forum">Forum</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
);

export default Nav;
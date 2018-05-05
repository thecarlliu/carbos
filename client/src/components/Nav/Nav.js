//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const Nav = () => (
	<div className="nav">
        <nav className="top-bar topbar-responsive">
            <div className="top-bar-title">
    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle="topbar-responsive"/>
    </span>
                <a className="topbar-responsive-logo" href="/"><strong>Carbos</strong></a>
            </div>
            <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                    <ul className="menu simple vertical medium-horizontal">
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
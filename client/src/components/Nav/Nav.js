//TODO: Update Nav Component
//Update hrefs and add style. Add logo.

import React from "react";
import "./Nav.css"

const Nav = () => (
	<div className="top-bar">
		<div className="top-bar-left">
			<ul className="dropdown menu align-left expanded button-group" data-dropdown-menu>
				<li className="menu-text">Carbos Logo</li>
				<ul className="dropdown menu expanded button-group">
					<li className="cell medium-2 nav-btn"><a href="/docs">Docs</a></li>
                    <li className="cell medium-2 nav-btn"><a href="/templates">Templates</a></li>
					<li className="cell medium-2 nav-btn"><a href="/forum">Forum</a></li>
					<li className="cell medium-2 nav-btn"><a href="/team">Team</a></li>
				</ul>
			</ul>
		</div>
	</div>
);

export default Nav;
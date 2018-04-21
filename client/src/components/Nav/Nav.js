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
					<li className="cell medium-2 nav-btn"><a href="#">Docs</a></li>
					<li className="cell medium-2 nav-btn"><a href="#">Templates</a></li>
					<li className="cell medium-2 nav-btn"><a href="#">Forum</a></li>
					<li className="cell medium-2 nav-btn"><a href="#">Team</a></li>
				</ul>
			</ul>
		</div>
	</div>
);

export default Nav;
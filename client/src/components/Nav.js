//TODO: Create Nav Component
//On the left: Needs logo that links to home page, and section tabs (Docs, Templates, Forum, Team <- in that order)
//On the right: Sign In / Register Button

const React = require('react');

const Nav = () -> {
  	render() {

		return(
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu align-left expanded button-group" data-dropdown-menu>
			      <li className="menu-text">Carbos Logo</li>
			    <ul class="dropdown menu expanded button-group">  
			      <li className="cell medium-2 nav-btn"><a href="#">Docs</a></li>
			      <li className="cell medium-2 nav-btn"><a href="#">Templates</a></li>
			      <li className="cell medium-2 nav-btn"><a href="#">Forum</a></li>
			      <li className="cell medium-2 nav-btn"><a href="#">Team</a></li>
			    </ul>
			  </div>
			</div>
		)
	}	
};

export default Nav;
//TODO: Create Footer Component
//From top to bottom:
//Should have links to the different sections (Docs, Templates, Forum, Meet the Team)
//As well as an area for all our names, github, linkedin
//A logo
//Copyright
//(see Footer UI diagram)

const React = require('react');

const Footer = () -> {
  render() {

    return(
	  	<footer>
			  <div className="grid-x expanded callout secondary">
			    <div className="small-6 large-4 cell" id="footer-one">
			      <p className="lead">Site Navigation</p>
			      <ul className="menu vertical">
			        <li><a href="#">Templates</a></li>
			        <li><a href="#">Forum</a></li>
			        <li><a href="#">Documentation</a></li>
			        <li><a href="#">Contact</a></li>
			      </ul>
			    </div>
			  <div className="small-6 large-4 cell meet-team">
			    <p className="lead">Meet The Team</p>

			    <ul className="menu vertical">
			      <li>Kevin Hinkel</li>
			    </ul>
			    <ul className="menu">
			      <li><a href="#">Github</a></li>
			      <li><a href="#">LinkedIn</a></li>
			    </ul>

			    <ul className="menu vertical">
			      <li>Derek Jacobson</li>
			    </ul>
			    <ul class ="menu">
			      <li><a href="#">Github</a></li>
			      <li><a href="#">LinkedIn</a></li>
			    </ul>

			    <ul className="menu vertical">
			      <li>Carl Liu</li>
			    </ul>
			    <ul className="menu">
			      <li><a href="#">Github</a></li>
			      <li><a href="#">LinkedIn</a></li>
			    </ul>

			    <ul className="menu vertical">
			      <li>Sandy McElfresh</li>
			    </ul>
			    <ul className ="menu">
			      <li><a href="#">Github</a></li>
			      <li><a href="#">LinkedIn</a></li>
			    </ul>

			    <ul className="menu vertical">
			      <li>Paul Prokosch</li>
			    </ul>
			    <ul className="menu">
			      <li><a href="#">Github</a></li>
			      <li><a href="#">LinkedIn</a></li>
			    </ul>
			  </div>
			  <div className="small-6 large-4 cell">
			    <p className="lead">Additional Resources</p>
			      <ul className="menu vertical">
			        <li><a href="#">One</a></li>
			        <li><a href="#">Two</a></li>
			        <li><a href="#">Three</a></li>
			        <li><a href="#">Four</a></li>
			      </ul>
			  </div>

			  <div class="medium-12 cell">
			    <ul class="menu align-center">
			    <li class="menu-text">© 2018 Carbos, Inc.</li>
			    </ul>
			  </div>
			  </div>
		</footer>
    )
  }
};


export default Footer;
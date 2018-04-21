//TODO: Update Footer Component
//Update hrefs and add style

import React from "react"
import "./Footer.css"

const Footer = () => (
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
                  <ul className="menu">
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
              <div className="medium-12 cell">
                  <ul className="menu align-center">
                      <li className="menu-text">© 2018 Carbos, Inc.</li>
                  </ul>
              </div>
          </div>
	</footer>
);

export default Footer;
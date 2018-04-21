//TODO: Update Template Component
// Add style

import React from "react";
import "./Template.css"

const Template = (props) => (
		<div className="card-user-profile">
			<img className="card-user-profile-img" src={props.image} alt={props.title} />
			<div className="card-user-profile-content card-section">
				<p className="card-user-profile-name">{props.title}</p>
				<p className="card-user-profile-info">{props.description}</p>
			</div>
			<div className="card-user-profile-actions">
				<a href={props.sourceURL} className="card-user-profile-button button hollow">Source</a>
				<a href={props.demoURL} className="card-user-profile-button button hollow secondary">Demo</a>
			</div>
		</div>
);

export default Template;
//TODO: Create Template Component
//This component takes props
//Should be like a card with a title, image, and two buttons.
//First button should be labeled "Source"
//Second button should be labeled "Demo"

import React from "react";
import "./Template.css"

const Template = (props) => (
		<div className="card-user-profile">
			<img className="card-user-profile-img" src="https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb" alt="picture of space" />
			<div className="card-user-profile-content card-section">
				<p className="card-user-profile-name">{props.name}</p>
				<p className="card-user-profile-status">We do the heavy lifting</p>
				<p className="card-user-profile-info">{props.description}</p>
			</div>
			<div className="card-user-profile-actions">
				<a href={props.sourceURL} className="card-user-profile-button button hollow">Source</a>
				<a href={props.demoURL} className="card-user-profile-button button hollow secondary">Demo</a>
			</div>
		</div>
);

export default Template;
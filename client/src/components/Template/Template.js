//TODO: Update Template Component
// Add style

import React from "react";
import "./Template.css"

const Template = (props) => (
    <div className="row large-up-4 small-up-2">
        <div className="featured-image-block column">
            <img src={props.image} alt={props.title}/>
            <p className="text-center featured-image-block-title">{props.title}</p>
            <p>{props.description}</p>
            <a className="button button-rounded-hover" href={props.sourceURL}>Source</a>
            <a className="button button-rounded-hover" href={props.demoURL}>Demo</a>
        </div>
    </div>
);

export default Template;
//TODO: Update Post Component
//Add style

import React from "react";
import "./Post.css"

const Thread = (props) => (
    <div className="callout secondary">
        <p>{props.text} user: {props.user} date: {props.date}</p>
    </div>
);

export default Thread;
import React from "react";
import "./Post.css"

const Post = (props) => (
    <div className="callout secondary">
        <p>{props.text} user: {props.user} date: {props.date}</p>
    </div>
);

export default Post;
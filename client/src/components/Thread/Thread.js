//TODO: Update Thread Component
//Add style

import React from "react";
import "./Thread.css"

const Thread = (props) => (
    <ul className="accordion" data-accordion data-allow-all-closed="true">
        <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">{props.title}{props.description}{props.date}</a>
            <div className="accordion-content" data-tab-content>
                {
                    props.posts.map((post) => (
                            <div className="callout secondary">
                                <p>{post.text} user: {post.user} date: {post.date}</p>
                            </div>
                        )
                    )
                }
                Comment
                <input type="text"></input>
                <a href="#" className="button">Submit</a>
            </div>
        </li>
    </ul>
);

export default Thread;
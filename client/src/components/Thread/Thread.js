//TODO: Create Thread Component
//This component takes props
//At first a thread should simply display the thread name, description, post count, and when the last post was created
//Upon being clicked, the component should expand as a modal pop up and display everything mentioned previously in one section, with all posts following below sorted by oldest to most recent in a text-messenger style format. There should be a sticky input text field at the very bottom of the modal, where new posts can be made, submitted via button.

//Later on, we should limit how many posts are seen at a time so that the user doesnt have to scroll so far down. EX: loads 5 posts upon pop-up, and theres a button to load the next five, etc.

import React from "react";
import "./Thread.css"

const Thread = (props) => (
    <ul className="accordion" data-accordion>
        <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">{props.title}{props.description}{props.date}</a>
            <div className="accordion-content" data-tab-content>
                {
                    props.posts.map((post) => {
                        return(
                            <p>{post.text} user: {post.user} date: {post.date}</p>
                        )
                    })
                }
                Comment
                <input type="text"></input>
                <a href="#" className="button">Submit</a>
            </div>
        </li>
    </ul>
);

export default Thread;
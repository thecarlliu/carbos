//TODO: Fix Forum Page
//Currently says that this.state.general is not an array, which has something to do with the res.data that is coming in from our api route.
//Also will need to add more functions to include the posting functionality.

import React from "react";
import "./Forum.css";
import Post from "../../components/Post";
import api from "../../utils/API";

class Forum extends React.Component {

    state = {
        general: [],
        support: []
    };

    componentDidMount() {
        this.loadGeneral();
        this.loadSupport();
        console.log(this.state.general);
    }

    loadGeneral = () => {
        api.getGeneral()
            .then(res =>
                this.setState({ general: res.data})
            )
            .catch(err => console.log(err));
    };

    loadSupport = () => {
        api.getSupport()
            .then(res =>
                this.setState({ support: res.data})
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Forum</h1>
                <div>

                    {/*News Thread*/}
                    <ul className="accordion" data-accordion data-allow-all-closed="true">
                        <li className="accordion-item" data-accordion-item>
                            <a href="#" className="accordion-title"><h2>News</h2><h3>Carbos Updates</h3></a>
                            <div className="accordion-content" data-tab-content>
                                <div className="callout secondary">
                                    <p>Carbos is still under development.</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/*General Discussion*/}
                    <ul className="accordion" data-accordion data-allow-all-closed="true">
                        <li className="accordion-item" data-accordion-item>
                            <a href="#" className="accordion-title"><h2>General Discussion</h2><h3>Discuss Carbos</h3>
                            </a>
                            <div className="accordion-content" data-tab-content>
                                {
                                    this.state.general.length>0 &&
                                        this.state.general.map((post) => (
                                        <Post
                                            id={post._id}
                                            key={post._id}
                                            text={post.text}
                                            user={post.user}
                                            date={post.date}
                                        />
                                    ))
                                }
                            </div>

                            Comment
                            <input type="text"></input>
                            <a href="#" className="button">Submit</a>
                        </li>
                    </ul>

                    {/*Technical Support*/}
                    <ul className="accordion" data-accordion data-allow-all-closed="true">
                        <li className="accordion-item" data-accordion-item>
                            <a href="#" className="accordion-title"><h2>Technical Support</h2><h3>Report technical
                                issues
                                here</h3></a>
                            <div className="accordion-content" data-tab-content>
                                {
                                    this.state.support.length > 0 &&
                                    this.state.support.map((post) => (
                                        <Post
                                            id={post._id}
                                            key={post._id}
                                            text={post.text}
                                            user={post.user}
                                            date={post.date}
                                        />
                                    ))
                                }
                            </div>

                            Comment
                            <input type="text"></input>
                            <a href="#" className="button">Submit</a>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Forum;
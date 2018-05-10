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
                this.setState({ general: Array.from(res.data)})
            )
            .catch(err => console.log(err));
    };

    loadSupport = () => {
        api.getSupport()
            .then(res =>
                this.setState({ support: Array.from(res.data)})
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="forum-content">
                <h3 className="forum-content-header">Forum</h3>
                <div>

                    {/*News Thread*/}
                    <ul className="accordion" data-accordion data-allow-all-closed="true">
                        <li className="accordion-item" data-accordion-item>
                            <a href="#" className="accordion-title">
                                <h4>News</h4>
                                <h5>Carbos Updates</h5>
                            </a>
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
                            <a href="#" className="accordion-title">
                                <h4>General Discussion</h4>
                                <h5>Discuss Carbos</h5>
                            </a>
                            <div className="accordion-content" data-tab-content>
                                {
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
                                Comment
                                <input type="text"></input>
                                <a href="#" className="button">Submit</a>
                            </div>
                        </li>
                    </ul>

                    {/*Technical Support*/}
                    <ul className="accordion" data-accordion data-allow-all-closed="true">
                        <li className="accordion-item" data-accordion-item>
                            <a href="#" className="accordion-title">
                                <h4>Technical Support</h4>
                                <h5>Report technical issues here</h5>
                            </a>
                            <div className="accordion-content" data-tab-content>
                                {
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
                                Comment
                                <input type="text"></input>
                                <a href="#" className="button">Submit</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Forum;
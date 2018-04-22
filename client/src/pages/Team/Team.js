//TODO: Update Team page
//Add style

import React from "react";
import "./Team.css";

const teamMembers = [
    {
        id: 1,
        name: "Carl Liu",
        image: "https://via.placeholder.com/100x100",
        description: "Project Lead",
        hometown: "Orange County, CA"
    }
];

const Team = () => (

    <div>
        {
            teamMembers.map((member) => (
                <div className="blogpost-footer-author-section">

                    <div>
                        <a href="#" className="blogpost-footer-author">
                            <img className="avatar" src={member.image} alt="" />
                            <div>
                                <p className="author">{member.name}</p>
                                <p className="bio">{member.description}</p>
                            </div>
                        </a>
                    </div>

                </div>
            ))
        }
    </div>

);

export default Team;
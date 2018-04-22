//TODO: Update Team page
//Add style

import React from "react";
import "./Team.css";

const teamMembers = [
    {
        id: 1,
        name: "Carl Liu",
        image: "https://via.placeholder.com/100x100",
        role: "Project Lead",
        hometown: "Orange County, CA"
    }
];

const Team = () => (

    <div>
        {
            teamMembers.map((member) => (
                <div className="card-user-container">
                    <div className="card-user-avatar">
                        <img src={member.image} alt={member.name} className="user-image"/>
                    </div>
                    <div className="card-user-bio">
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                        <span className="location"><span className="location-icon fa fa-map-marker"></span><span
                            className="location-text">{member.hometown}</span></span>
                    </div>
                    <div className="card-user-social">
                        <ul className="menu">
                            <li className="fa fa-twitter"></li>
                            <li className="fa fa-dribbble"></li>
                            <li className="fa fa-instagram"></li>
                            <li className="fa fa-github"></li>
                        </ul>
                    </div>
                </div>
            ))
        }
    </div>

);

export default Team;
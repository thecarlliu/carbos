import React from "react";
import "./Team.css";

const teamMembers = [
    {
        name: "Carl Liu",
        image: "https://via.placeholder.com/100x100",
        role: "Project Lead",
        description: "blah blah"
    },
    {
        name: "Sandy McElfresh",
        image: "https://via.placeholder.com/100x100",
        role: "Database Manager",
        description: "blah blah"
    },
    {
        name: "Paul Prokosch",
        image: "https://via.placeholder.com/100x100",
        role: "Tester",
        description: "blah blah"
    },
    {
        name: "Derek Jacobson",
        image: "https://via.placeholder.com/100x100",
        role: "Developer",
        description: "blah blah"
    },
    {
        name: "Kevin Hinkel",
        image: "https://via.placeholder.com/100x100",
        role: "Graphic Artist",
        description: "blah blah"
    }
];

const Team = () => (

    <div className="team-page grid-x">
        <div className="team-header cell small-12 medium-12">
            <h1>Meet the Carbos Team</h1>
        </div>
        {
            teamMembers.map((member) => (
                <div className="testimonial-block-vertical cell small-12 medium-6">
                    <div className="testimonial-block-vertical-quote">
                        <p>{member.description}</p>
                    </div>
                    <div className="testimonial-block-vertical-person">
                        <img className="testimonial-block-vertical-avatar" src={member.image} alt="" />
                        <div>
                            <p className="testimonial-block-vertical-name">{member.name}</p>
                            <p className="testimonial-block-vertical-info">{member.role}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>

);

export default Team;
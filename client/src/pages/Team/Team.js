import React from "react";
import "./Team.css";

const carlImg = require("../../images/carlImg.png");
const sandyImg = require("../../images/sandyImg.png");
const derekImg = require("../../images/derekImg.png");
const paulImg = require("../../images/paulImg.png");
const kevinImg = require("../../images/kevinImg.png");

const teamMembers = [
    {
        name: "Carl Liu",
        image: carlImg,
        role: "Student at Macalester College - Project Lead",
        description: "blah blah"
    },
    {
        name: "Sandy McElfresh",
        image: sandyImg,
        role: "SCRUM Master - React Developer",
        description: "blah blah"
    },
    {
        name: "Paul Prokosch",
        image: paulImg,
        role: "Sr. Manager QA - React Developer",
        description: "blah blah"
    },
    {
        name: "Derek Jacobson",
        image: derekImg,
        role: "SEO Consultant - React Developer",
        description: "blah blah"
    },
    {
        name: "Kevin Hinkel",
        image: kevinImg,
        role: "Graphic Designer - React Developer",
        description: "blah blah"
    }
];

const Team = () => (

    <div className="team-page team-content grid-x">
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
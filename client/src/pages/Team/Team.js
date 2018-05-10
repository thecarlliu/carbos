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
        description: "I chose to study computer science and dive into the world of web development because I wanted to combine my artistic abilities with my problem-solving skills."
    },
    {
        name: "Sandy McElfresh",
        image: sandyImg,
        role: "SCRUM Master - React Developer",
        description: "I am a certified IT Program/Project Manager who decided to take the full-stack developer program to gain technical skills in web applications. In my spare time, I enjoy golfing, biking, and just grillin’ and chillin’ with friends and neighbors."
    },
    {
        name: "Paul Prokosch",
        image: paulImg,
        role: "Sr. QA Manager - React Developer",
        description: "I have been a QA leader for close to 20 years. I took the full-stack class to learn JavaScript for my QA endeavors. In my spare time I love playing bocce ball, spending time with friends, walking my dog and going to see live music."
    },
    {
        name: "Derek Jacobson",
        image: derekImg,
        role: "SEO Consultant - React Developer",
        description: "I am a digital marketer with a focus on technical SEO for eCommerce businesses that are looking to improve site functionality and increase online visibility."
    },
    {
        name: "Kevin Hinkel",
        image: kevinImg,
        role: "Graphic Designer - React Developer",
        description: "I am expanding my design career from print to web, with 10 years of experience in fast paced work environments that demand speed, accuracy and adaptability."
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
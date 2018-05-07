import React from "react";
import "./Home.css";

const mongoDBIcon = require("../../images/mongoDB.png");
const expressIcon = require("../../images/express.png");
const reactIcon = require("../../images/react.png");
const nodeIcon = require("../../images/node.png");

const features = [
    {
        key: 1,
        name: "Aesthetic",
        description: "Our team looks at the most popular web designs and derives custom web templates that emphasize clean user interfaces and smooth functionality.",
        icon: "fi fi-pencil"
    },
    {
        key: 2,
        name: "Responsive",
        description: "All Carbos templates are mobile-first, meaning that we design the layout with responsiveness as a priority.",
        icon: "fi fi-mobile"
    },
    {
        key: 3,
        name: "Customizable",
        description: "Carbos templates are created with customization and reusability in mind. Each template comes with documentation, open source code, and a demo site where you can find the template in action.",
        icon: "fi fi-widget"
    }
];

const techStack = [
    {
        key: 1,
        name:"MongoDB",
        description:"MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.",
        image: mongoDBIcon,
        link:"https://google.com"
    },
    {
        key: 2,
        name:"Express",
        description:"In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.",
        image: expressIcon,
        link:"https://google.com"
    },
    {
        key: 3,
        name:"React",
        description:"In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.",
        image: reactIcon,
        link:"https://google.com"
    },
    {
        key: 4,
        name:"Node",
        description:"Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.",
        image: nodeIcon,
        link:"https://google.com"
    }
];

const Home = () => (
    <div className="grid-x">
{/*hero*/}
        <div className="marketing-site-hero cell small-12 medium-12">
            <div className="marketing-site-hero-content">
                <h1>Welcome to Carbos</h1>
                <p className="subheader">Ready to use, full-stack web templates.</p>
                <a href="/docs" className="round button">learn more</a>
            </div>
        </div>
{/*features*/}
        <section className="marketing-site-three-up grid-x small-12 medium-12">
                <h2 className="marketing-site-three-up-headline cell small-12 medium-12">Let Carbos do the heavy lifting for you</h2>
                {
                    features.map((feature) => (
                        <div className="feature-section cell small-12 medium-4">
                            <i className={feature.icon} aria-hidden="true"/>
                            <h4 className="marketing-site-three-up-title">{feature.name}</h4>
                            <p className="marketing-site-three-up-desc">{feature.description}</p>
                        </div>
                    ))
                }
        </section>
{/*techstack*/}
        <div className="marketing-site-features grid-x small-12 medium-12">
            <h2 className="marketing-site-features-headline cell small-12 medium-12">Our Technology Stack</h2>
            <p className="marketing-site-features-subheadline subheader cell small-12 medium-12">Best for creating isomorphic and interactive web applications, MERN is gaining ground as the web developer's favorite technology stack.</p>
            {
                techStack.map((tech) => (
                    <div className="tech-section cell small-12 medium-6">
                        <img className="tech-icon" src={tech.image} alt={tech.name} aria-hidden="true" />
                        <a href={tech.link}><h4 className="marketing-site-features-title">{tech.name}</h4></a>
                        <p className="marketing-site-features-desc">{tech.description}</p>

                    </div>
                ))
            }
        </div>

    </div>
);

export default Home;
import React from "react";
import "./Home.css";

const features = [
    {
        name: "Aesthetic",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        icon: "fi fi-puzzle"
    },
    {
        name: "Aesthetic",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        icon: "fi fi-puzzle"
    },
    {
        name: "Aesthetic",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        icon: "fi fi-puzzle"
    }
];

const techStack = [
    {
        name:"MongoDB",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image:"https://via.placeholder.com/200x200",
        link:"https://via.placeholder.com/200x200"
    },
    {
        name:"Express",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image:"https://via.placeholder.com/200x200",
        link:"https://via.placeholder.com/200x200"
    },
    {
        name:"React",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image:"https://via.placeholder.com/200x200",
        link:"https://via.placeholder.com/200x200"
    },
    {
        name:"Node",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image:"https://via.placeholder.com/200x200",
        link:"https://via.placeholder.com/200x200"
    }
];

const Home = () => (
    <div className="grid-x">
{/*hero*/}
        <div className="marketing-site-hero cell small-12 medium-12">
            <div className="marketing-site-hero-content">
                <h1>Welcome to Carbos</h1>
                <p className="subheader">Striving for aesthetic and immersive interfaces.</p>
                <a href="/#" className="round button">learn more</a>
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
            <p className="marketing-site-features-subheadline subheader cell small-12 medium-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit quaerat eos words and phrases.</p>
            {
                techStack.map((tech) => (
                    <div className="tech-section cell small-12 medium-6">
                        <img src={tech.image} alt={tech.name} aria-hidden="true"/>
                        <a href={tech.link}><h4 className="marketing-site-features-title">{tech.name}</h4></a>
                        <p className="marketing-site-features-desc">{tech.description}</p>

                    </div>
                ))
            }
        </div>

    </div>
);

export default Home;
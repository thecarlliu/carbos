//TODO: Create Home Page

//From top to bottom:
//A full-wide and animated section that shows our slogan, and welcomes users to the site.
//Below, we want three cards to represent the Docs, Templates, and Forum sections.
//Each section should link to the appropriate route.

//This page is the best place to express our creativity. Themes, patterns, characters, designs, whatever -- The content on this page has to "hook" our customer.
import React from "react";
import "./Home.css";

const Home = () => (
    <div>
        <div className="marketing-site-hero">
            <div className="marketing-site-hero-content">
                <h1>Welcome to Carbos</h1>
                <p className="subheader">Striving for aesthetic and immersive interfaces.</p>
                <a href="/templates" className="round button">learn more</a>
            </div>
        </div>
    </div>
);

export default Home;
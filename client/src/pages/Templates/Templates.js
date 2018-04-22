//TODO: Update Templates
//Add style

import React from "react"
import "./Templates.css"
import Template from "../../components/Template";

const templates = [
    {
        id: 1,
        title: "Farfalle",
        description: "Amaze viewers with a clean and hip gallery.",
        image: "https://via.placeholder.com/200x200",
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    }
];

const Templates = () => (
    <div className="featured-image-block-grid">
        <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
            <h2>Browse our collection of web templates</h2>
            <p>We hope you like pasta</p>
        </div>
        {
            templates.map((template) => (
                <Template
                    id={template.id}
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    image={template.image}
                    sourceURL={template.sourceURL}
                    demoURL={template.demoURL}
                />
            ))

        }
    </div>
);

export default Templates;


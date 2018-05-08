//TODO: Update Templates
//Add style

import React from "react"
import "./Templates.css"
import Template from "../../components/Template";

const farfalleIcon = require("../../images/farfalleIcon.png");
const orzoIcon = require("../../images/orzoIcon.png");
const tortelliniIcon = require("../../images/tortelliniIcon.png");
const fusilliIcon = require("../../images/fusilliIcon.png");
const linguineIcon = require("../../images/linguineIcon.png");

const templates = [
    {
        id: 1,
        title: "Farfalle",
        description: "Clean and hip",
        stack: "Full Stack",
        image: farfalleIcon,
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    },
    {
        id: 1,
        title: "Orzo",
        description: "Simple and playful",
        stack: "Front End",
        image: orzoIcon,
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    },
    {
        id: 1,
        title: "Tortellini",
        description: "Sharp and effective",
        stack: "Full Stack",
        image: tortelliniIcon,
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    },
    {
        id: 1,
        title: "Fusilli",
        description: "Warm, friendly, appetite-inducing",
        stack: "Full Stack",
        image: fusilliIcon,
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    },
    {
        id: 1,
        title: "Linguine",
        description: "Go with the flow",
        stack: "Front End",
        image: linguineIcon,
        sourceURL: "https://github.com/thecarlliu/art1-source",
        demoURL: "https://github.com/thecarlliu/art1-demo"
    }
];

const Templates = () => (
    <div className="templates-content featured-image-block-grid">
        <div className="templates-header featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
            <h2>Browse our collection of web templates</h2>
            <p>We hope you like pasta</p>
        </div>
        <div className="grid-x medium-12">
        {
            templates.map((template) => (
                <Template
                    id={template.id}
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    tech={template.stack}
                    image={template.image}
                    sourceURL={template.sourceURL}
                    demoURL={template.demoURL}
                />
            ))

        }
        </div>
    </div>
);

export default Templates;


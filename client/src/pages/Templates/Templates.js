//TODO: Update Templates
//Add style

import "./Templates.css"
import Template from "../../components/Template";
import api from "../../utils/API";

const templates = api.getTemplates();

const Templates = () => (
    <div className="featured-image-block-grid">
        <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
            <h2>Browse our collection of web templates</h2>
            <p>We hope you like pasta</p>
        </div>
        {
            templates.map((template) => (
                <Template
                    id = {template.id}
                    key = {template.id}
                    title = {template.title}
                    description = {template.description}
                    image = {template.image}
                    sourceURL = {template.sourceURL}
                    demoURL = {template.demoURL}
                />
            ))
        }
    </div>
);

export default Templates;


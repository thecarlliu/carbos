const db = require("../models");

// Defining methods for the templateController
//TODO: update template methods, see routes/api/template.js and client/src/utils/API.js

module.exports = {
    findAll: function(req, res) {
        db.Template
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Template
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
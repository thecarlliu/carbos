const router = require("express").Router();
const templateController = require("../../controllers/templateController");

// Matches with "/api/template"
router.route("/")
    .get(templateController.findAll);

module.exports = router;

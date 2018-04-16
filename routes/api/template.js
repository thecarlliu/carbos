const router = require("express").Router();
const templateController = require("../../controllers/templateController");

// Matches with "/api/template"
router.route("/")
    .get(templateController.findAll);

// Matches with "/api/template/:id"
router
    .route("/:id")
    .get(templateController.findById);

module.exports = router;

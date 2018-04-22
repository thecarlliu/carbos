const router = require("express").Router();
const templateController = require("../../controllers/templateController");

router.route("/templates").get(templateController.findAll);

module.exports = router;

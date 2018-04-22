const router = require("express").Router();
const generalController = require("../../controllers/generalController");

// Matches with "/api/forum/general"
router.route("/forum/general")
    .get(generalController.findAll)
    .post(generalController.create)
    .delete(generalController.remove);

module.exports = router;
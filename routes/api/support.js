const router = require("express").Router();
const supportController = require("../../controllers/supportController");

// Matches with "/api/forum/support"
router.route("/forum/support")
    .get(supportController.findAll)
    .post(supportController.create)
    .delete(supportController.remove);

module.exports = router;
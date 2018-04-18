const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// Matches with "/api/forum"
router.route("/")
    .get(forumController.findAll)
    .post(forumController.create)
    .delete(forumController.remove);

module.exports = router;

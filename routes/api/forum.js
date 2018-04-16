const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// Matches with "/api/forum"
router.route("/")
    .get(forumController.findAll);

// Matches with "/api/forum/thread/:id"
router
    .route("/thread/:id")
    .get(forumController.findById)
    .post(forumController.create);

//Matches with "/api/forum/thread:id1/comments:id2"
router
    .route("/thread/:id1/comments/:id2")
    .delete(forumController.remove);

module.exports = router;

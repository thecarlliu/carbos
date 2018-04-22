const router = require("express").Router();
const forumRoutes = require("./forum");

//Routes
router.use("/forum", forumRoutes);

module.exports = router;

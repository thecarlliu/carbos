const router = require("express").Router();
const forumRoutes = require("./forum");
const templateRoutes = require("./template");
const userRoutes = require("./user");


//Routes
router.use("/forum", forumRoutes);
router.use("/template", templateRoutes);
router.use("/user", userRoutes);


module.exports = router;

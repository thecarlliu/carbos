const router = require("express").Router();
const generalRoute = require("./general");
const supportRoute = require("./support");


//Routes
router.use("/forum/general", generalRoute);
router.use("/forum/support", supportRoute);

module.exports = router;

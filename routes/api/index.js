const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");
const fetch = require("./fetch");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

router.use("/fetch", fetch);

module.exports = router;

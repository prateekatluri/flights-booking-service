const express = require("express");
const router = express.Router();
const { logger } = require("../../config");

logger.info("inside v1 routes");


//dummy route
router.get("/", () => {});

module.exports = router;

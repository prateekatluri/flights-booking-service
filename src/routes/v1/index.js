const express = require("express");
const router = express.Router();
const { logger } = require("../../config");
const bookingRoute = require("./booking-route")

logger.info("inside v1 routes");


//dummy route
router.get("/", () => {});

module.exports = router;

"use strict";

const router = require("express").Router();

const dashboardController = require("../controllers/dashboard.controller");

router
    .route("/")
    .get(dashboardController.renderDashboard);

module.exports = router;

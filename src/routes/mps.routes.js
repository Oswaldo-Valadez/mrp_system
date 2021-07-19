"use strict";

const router = require("express").Router({ mergeParams: true });

const mpsController = require("../controllers/mps.controller");

router
  .route("/")
  .get(mpsController.redirectToFirstYear)
  .post(mpsController.createMPS);

router.route("/new").get(mpsController.createMPS);

router.route("/:year").get(mpsController.renderMPS);

router.route("/:year/new").get(mpsController.createMPSPeriod);

module.exports = router;

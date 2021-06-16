"use strict";

const router = require("express").Router();

const measurementunitsController = require("../controllers/measurementunits.controller");

router.route("/").post(measurementunitsController.createMeasurementunit);

router.route("/:id").post(measurementunitsController.updateMeasurementunit);

router
  .route("/:id/delete")
  .get(measurementunitsController.deleteMeasurementunit);

router.route("/:id/pin-up").get(measurementunitsController.pinupMeasurementunit);

module.exports = router;

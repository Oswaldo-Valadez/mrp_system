"use strict";

const router = require("express").Router();

const componentsController = require("../controllers/components.controller");

const mpsRoutes = require("./mps.routes");

router
  .route("/")
  .get(componentsController.renderComponents)
  .post(componentsController.createComponent);

router.use("/:id/mps", mpsRoutes);

router
  .route("/:id")
  .get(componentsController.renderComponent)
  .post(componentsController.updateComponent);

router.route("/:id/delete").get(componentsController.deleteComponent);

module.exports = router;

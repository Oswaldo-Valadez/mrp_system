"use strict";

const router = require("express").Router();

const componentsController = require("../controllers/components.controller");

router
    .route("/")
    .get(componentsController.renderComponents)
    .post(componentsController.createComponent);

router
    .route("/:id")
    .get(componentsController.renderComponent)
    .post(componentsController.updateComponent);

router.route("/:id/delete").get(componentsController.deleteComponent);

module.exports = router;

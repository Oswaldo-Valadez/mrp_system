"use strict";

const router = require("express").Router();

const materialsController = require("../controllers/materials.controller");

router
    .route("/")
    .get(materialsController.renderMaterials)
    .post(materialsController.createMaterial);

router
    .route("/:id")
    .get(materialsController.renderMaterial)
    .post(materialsController.updateMaterial);

router.route("/:id/delete").get(materialsController.deleteMaterial);

module.exports = router;

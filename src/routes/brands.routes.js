"use strict";

const router = require("express").Router();

const brandsController = require("../controllers/brands.controller");

router.route("/").post(brandsController.createBrand);

router.route("/:id").post(brandsController.updateBrand);

router.route("/:id/delete").get(brandsController.deleteBrand);

router.route("/:id/pin-up").get(brandsController.pinupBrand);

module.exports = router;

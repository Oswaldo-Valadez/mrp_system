"use strict";

const router = require("express").Router();

const categoriesController = require("../controllers/categories.controller");

router.route("/").post(categoriesController.createCategory);

router.route("/:id").post(categoriesController.updateCategory);

router.route("/:id/delete").get(categoriesController.deleteCategory);

router.route("/:id/pin-up").get(categoriesController.pinupCategory);

module.exports = router;

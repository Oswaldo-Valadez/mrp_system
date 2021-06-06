"use strict";

const router = require("express").Router();

const categoriesController = require("../controllers/categories.controller");

router
    .route("/")
    .get(categoriesController.renderCategories)
    .post(categoriesController.createCategory);

router.route("/:id").get(categoriesController.renderCategory);

router.route("/:id/update").post(categoriesController.updateCategory);

router.route("/:id/delete").post(categoriesController.deleteCategory);

module.exports = router;

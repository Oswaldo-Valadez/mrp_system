"use strict";

const router = require("express").Router();

const subcategoriesController = require("../controllers/subcategories.controller");

router.route("/").post(subcategoriesController.createSubcategory);

router.route("/:id").post(subcategoriesController.updateSubcategory);

router.route("/:id/delete").get(subcategoriesController.deleteSubcategory);

module.exports = router;

"use strict";

const router = require("express").Router();

const subcategoriesController = require("../controllers/subcategories.controller");

router.route("/").post(subcategoriesController.createSubcategory);

router.route("/:id").post(subcategoriesController.updateSubcategory);

router.route("/:id/delete").get(subcategoriesController.deleteSubcategory);

router
  .route("/json/categories/:id")
  .get(subcategoriesController.getJSONSubcategoriesByCategory);

module.exports = router;

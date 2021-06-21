"use strict";

const router = require("express").Router();

const catalogsController = require("../controllers/catalogs.controller");

const brandsRoutes = require("./brands.routes");
const categoriesRoutes = require("./categories.routes");
const measurementunitsRoutes = require("./measurementunits.routes");

router.route("/").get(catalogsController.renderCatalogs);

router.use("/brands", brandsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/measurement-units", measurementunitsRoutes);

module.exports = router;

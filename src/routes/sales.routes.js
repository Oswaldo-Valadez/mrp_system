"use strict";

const router = require("express").Router();

const salesController = require("../controllers/sales.controller");

router
  .route("/")
  .get(salesController.renderSales)
  .post(salesController.createSale);

router
  .route("/:id")
  .get(salesController.renderSale)
  .post(salesController.updateSale);

router.route("/:id/delete").get(salesController.deleteSale);

module.exports = router;

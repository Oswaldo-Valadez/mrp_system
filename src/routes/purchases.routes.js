"use strict";

const router = require("express").Router();

const purchasesController = require("../controllers/purchases.controller");

router
  .route("/")
  .get(purchasesController.renderPurchases)
  .post(purchasesController.createPurchase);

router
  .route("/:id")
  .get(purchasesController.renderPurchase)
  .post(purchasesController.updatePurchase);

router.route("/:id/delete").get(purchasesController.deletePurchase);

module.exports = router;

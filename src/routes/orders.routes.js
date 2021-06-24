"use strict";

const router = require("express").Router();

const ordersController = require("../controllers/orders.controller");

router
  .route("/")
  .get(ordersController.renderOrders)
  .post(ordersController.createOrder);

router
  .route("/:id")
  .get(ordersController.renderOrder)
  .post(ordersController.updateOrder);

router.route("/:id/delete").get(ordersController.deleteOrder);

module.exports = router;

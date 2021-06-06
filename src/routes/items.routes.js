"use strict";

const router = require("express").Router();

const itemsController = require("../controllers/items.controller");

router
  .route("/")
  .get(itemsController.renderItems)
  .post(itemsController.createItem);

router
  .route("/:id")
  .get(itemsController.renderItem)
  .post(itemsController.updateItem);

router.route("/:id/delete").get(itemsController.deleteItem);

module.exports = router;

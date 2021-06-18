"use strict";

const router = require("express").Router();

const productsController = require("../controllers/products.controller");

router
    .route("/")
    .get(productsController.renderProducts)
    .post(productsController.createProduct);

router
    .route("/:id")
    .get(productsController.renderProduct)
    .post(productsController.updateProduct);

router.route("/:id/delete").get(productsController.deleteProduct);

module.exports = router;

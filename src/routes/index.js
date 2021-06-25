"use strict";

const router = require("express").Router();

const { requiresAuthentication } = require("../utils/middlewares/auth");

const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const catalogsRoutes = require("./catalogs.routes");
const inventoryRoutes = require("./inventory.routes");
const productsRoutes = require("./products.routes");
const mpsRoutes = require("./mps.routes");
const ordersRoutes = require("./orders.routes");

router.use("/", authRoutes);

router.use("/dashboard", requiresAuthentication, dashboardRoutes);

router.use("/dashboard/catalogs", catalogsRoutes);
router.use("/dashboard/inventory", inventoryRoutes);
router.use("/dashboard/products", productsRoutes);
router.use("/dashboard/mps", mpsRoutes);
router.use("/dashboard/orders", ordersRoutes);

module.exports = router;

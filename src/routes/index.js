"use strict";

const router = require("express").Router();

const { requiresAuthentication } = require("../utils/middlewares/auth");

const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const catalogsRoutes = require("./catalogs.routes");
const inventoryRoutes = require("./inventory.routes");
const productsRoutes = require("./products.routes");
const mpsRoutes = require("./mps.routes");
const purchasesRoutes = require("./purchases.routes");
const salesRoutes = require("./sales.routes");

router.use("/", authRoutes);

router.use("/dashboard", requiresAuthentication, dashboardRoutes);

router.use("/dashboard/catalogs", catalogsRoutes);
router.use("/dashboard/inventory", inventoryRoutes);
router.use("/dashboard/products", productsRoutes);
router.use("/dashboard/mps", mpsRoutes);
router.use("/dashboard/purchases", purchasesRoutes);
router.use("/dashboard/sales", salesRoutes);

module.exports = router;

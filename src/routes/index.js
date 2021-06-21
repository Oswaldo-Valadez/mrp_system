"use strict";

const router = require("express").Router();

const { requiresAuthentication } = require("../utils/middlewares/auth");

const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const catalogsRoutes = require("./catalogs.routes");
const componentsRoutes = require("./components.routes");
const productsRoutes = require("./products.routes");
const mpsRoutes = require("./mps.routes");

router.use("/", authRoutes);

router.use("/dashboard", requiresAuthentication, dashboardRoutes);

router.use("/dashboard/catalogs", catalogsRoutes);
router.use("/dashboard/inventory", componentsRoutes);
router.use("/dashboard/products", productsRoutes);
router.use("/dashboard/mps", mpsRoutes);

module.exports = router;

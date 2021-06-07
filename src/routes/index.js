"use strict";

const router = require("express").Router();

const { requiresAuthentication } = require("../utils/middlewares/auth");

const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const catalogsRoutes = require("./catalogs.routes");
const materialsRoutes = require("./materials.routes");

router.use("/", authRoutes);

router.use("/dashboard", requiresAuthentication, dashboardRoutes);

router.use("/dashboard/catalogs", catalogsRoutes);
router.use("/dashboard/materials", materialsRoutes);

module.exports = router;

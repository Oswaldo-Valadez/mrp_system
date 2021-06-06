"use strict";

const router = require("express").Router();

const { requiresAuthentication } = require("../utils/middlewares/auth");

const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const itemsRoutes = require("./items.routes");

router.use("/", authRoutes);

router.use("/dashboard", requiresAuthentication, dashboardRoutes);
router.use("/dashboard/items", itemsRoutes);

module.exports = router;

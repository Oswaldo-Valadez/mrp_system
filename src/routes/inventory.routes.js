"use strict";

const router = require("express").Router();

const componentsRoutes = require("./components.routes");

router.use(componentsRoutes);

module.exports = router;

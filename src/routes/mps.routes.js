"use strict";

const router = require("express").Router();

const mpsController = require("../controllers/mps.controller");

router
    .route("/")
    .get(mpsController.renderMPS)
    
module.exports = router;
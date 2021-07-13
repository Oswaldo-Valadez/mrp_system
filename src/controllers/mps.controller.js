"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const MPS = require("../models/mps.model");

exports.redirectToFirstYear = async (req, res, next) => {
  try {
    res.redirect("mps/2021");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderMPS = async (req, res, next) => {
  try {
    const mps = await MPS.getAllMPS();

    ErrorHandler.handleRender(req, res, "modules/mps/mps", {
      mps,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

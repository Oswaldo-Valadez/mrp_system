"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const MPS = require("../models/mps.model");

exports.renderMPS = async (req, res, next) => {
  try {
    const mps = await MPS.getMPS();

    ErrorHandler.handleRender(req, res, "modules/mps/mps", {
      mps,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

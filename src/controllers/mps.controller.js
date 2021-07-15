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
    const { id: id_component, year } = req.params;

    const all_mps = await MPS.getAllMPSByComponent(id_component);

    const { mps, mps_periods } = await MPS.getOneMPS(id_component, year);

    ErrorHandler.handleRender(req, res, "modules/mps/mps", {
      mps,
      mps_periods,
      all_mps,
      id_component,
      year,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

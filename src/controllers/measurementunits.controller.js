"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Measurementunits = require("../models/measurementunits.model");

exports.createMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.createMeasurementunit(req.body);

    req.flash("success", "The measurementunit has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.updateMeasurementunit(req.params.id, req.body);

    req.flash("success", "The measurementunit has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.deleteMeasurementunit(req.params.id);

    req.flash("success", "The measurementunit has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

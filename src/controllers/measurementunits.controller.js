"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Measurementunits = require("../models/measurementunits.model");

exports.createMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.createMeasurementunit(req.body);

    req.flash("success", "The measurement unit has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.updateMeasurementunit(req.params.id, req.body);

    req.flash("success", "The measurement unit has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteMeasurementunit = async (req, res, next) => {
  try {
    await Measurementunits.deleteMeasurementunit(req.params.id);

    req.flash("success", "The measurement unit has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.pinupMeasurementunit = async (req, res, next) => {
  try {
    switch (req.query.toggle) {
      case "on":
        await Measurementunits.pinupMeasurementunit(req.params.id, 1);
        req.flash("success", "Pin-Up ON");
        break;
      case "off":
        await Measurementunits.pinupMeasurementunit(req.params.id, 0);
        req.flash("success", "Pin-Up OFF");
        break;
      default:
        req.flash("error", "You can't perform this action");
    }
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

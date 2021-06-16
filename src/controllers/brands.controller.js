"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Brands = require("../models/brands.model");

exports.createBrand = async (req, res, next) => {
  try {
    await Brands.createBrand(req.body);

    req.flash("success", "The brand has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    await Brands.updateBrand(req.params.id, req.body);

    req.flash("success", "The brand has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteBrand = async (req, res, next) => {
  try {
    await Brands.deleteBrand(req.params.id);

    req.flash("success", "The brand has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.pinupBrand = async (req, res, next) => {
  try {
    switch (req.query.toggle) {
      case "on":
        await Brands.pinupBrand(req.params.id, 1);
        req.flash("success", "Pin-Up ON");
        break;
      case "off":
        await Brands.pinupBrand(req.params.id, 0);
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

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

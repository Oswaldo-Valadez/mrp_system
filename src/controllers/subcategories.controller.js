"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Subcategories = require("../models/subcategories.model");

exports.createSubcategory = async (req, res, next) => {
  try {
    await Subcategories.createSubcategory(req.body);

    req.flash("success", "The subcategory has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateSubcategory = async (req, res, next) => {
  try {
    await Subcategories.updateSubcategory(req.params.id, req.body);

    req.flash("success", "The subcategory has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteSubcategory = async (req, res, next) => {
  try {
    await Subcategories.deleteSubcategory(req.params.id);

    req.flash("success", "The subcategory has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};
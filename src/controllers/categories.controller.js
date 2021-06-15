"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Categories = require("../models/categories.model");

exports.createCategory = async (req, res, next) => {
  try {
    await Categories.createCategory(req.body);

    req.flash("success", "The category has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await Categories.updateCategory(req.params.id, req.body);

    req.flash("success", "The category has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await Categories.deleteCategory(req.params.id);

    req.flash("success", "The category has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.pinupCategory = async (req, res, next) => {
  try {
    switch (req.query.toggle) {
      case "on":
        await Categories.pinupCategory(req.params.id, 1);
        req.flash("success", "Pin-Up ON");
        break;
      case "off":
        await Categories.pinupCategory(req.params.id, 0);
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

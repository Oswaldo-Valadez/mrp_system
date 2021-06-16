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

exports.getJSONSubcategoriesByCategory = async (req, res, next) => {
  try {
    const subcategories = await Subcategories.getSubcategoriesByCategory(
      req.params.id
    );

    res.json({ subcategories });
  } catch (error) {
    ErrorHandler.handleJSONError(req, res, error);
  }
};

exports.pinupSubcategory = async (req, res, next) => {
  try {
    switch (req.query.toggle) {
      case "on":
        await Subcategories.pinupSubcategory(req.params.id, 1);
        req.flash("success", "Pin-Up ON");
        break;
      case "off":
        await Subcategories.pinupSubcategory(req.params.id, 0);
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

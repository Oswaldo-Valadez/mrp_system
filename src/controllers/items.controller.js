"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Items = require("../models/items.model");
const Categories = require("../models/categories.model");

const { newItemForm } = require("../utils/helpers/forms");

exports.renderItems = async (req, res, next) => {
  try {
    const items = await Items.getAllItems();
    const categories = await Categories.getAllCategories();

    res.render("modules/items/items", {
      items,
      newItemForm: newItemForm({ categories }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderItem = async (req, res, next) => {
  try {
    const item = await Items.getOneItem(req.params.id);

    res.render("modules/items/item", { item });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createItem = async (req, res, next) => {
  try {
    await Items.createItem(req.body);

    req.flash("success", "The item has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    await Items.updateItem(req.params.id, req.body);

    req.flash("success", "The item has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    await Items.deleteItem(req.params.id);

    req.flash("success", "The item has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

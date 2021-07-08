"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  formPurchase,
  formAddPurchaseComponent,
} = require("../utils/helpers/forms");

const Purchases = require("../models/purchases.model");
const Components = require("../models/components.model");

exports.renderPurchases = async (req, res, next) => {
  try {
    const purchases = await Purchases.getAllPurchases();

    res.render("modules/purchases/purchases", { purchases });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderPurchase = async (req, res, next) => {
  try {
    const purchase = await Purchases.getOnePurchase(req.params.id);

    res.render("modules/purchases/purchase", { purchase });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createPurchase = async (req, res, next) => {
  try {
    await Purchases.createPurchase(req.body);

    req.flash("success", "The purchase has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updatePurchase = async (req, res, next) => {
  try {
    await Purchases.updatePurchase(req.params.id, req.body);

    req.flash("success", "The purchase has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deletePurchase = async (req, res, next) => {
  try {
    await Purchases.deletePurchase(req.params.id);

    req.flash("success", "The purchase has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderCreatePurchase = async (req, res, next) => {
  try {
    const components = await Components.getAllComponents();

    ErrorHandler.handleRender(req, res, "modules/purchases/new-purchase", {
      newPurchaseForm: formPurchase(),
      addPurchaseComponentForm: formAddPurchaseComponent({ components }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

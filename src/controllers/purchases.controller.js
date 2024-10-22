"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  formPurchase,
  formAddPurchaseComponent,
} = require("../utils/helpers/forms");
const { codeGenerator } = require("../utils/helpers/code-gen");

const Purchases = require("../models/purchases.model");
const Components = require("../models/components.model");

exports.renderPurchases = async (req, res, next) => {
  try {
    const purchases = await Purchases.getAllPurchases();

    ErrorHandler.handleRender(req, res, "modules/purchases/purchases", {
      purchases,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderPurchase = async (req, res, next) => {
  try {
    const { purchase, purchase_components } = await Purchases.getOnePurchase(
      req.params.id
    );

    ErrorHandler.handleRender(req, res, "modules/purchases/purchase", {
      purchase,
      purchase_components,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createPurchase = async (req, res, next) => {
  try {
    const { insertId } = await Purchases.createPurchase(req.body);

    req.flash("success", "The purchase has been created successfully");
    res.redirect(`purchases/${insertId}`);
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

    const count = await Purchases.getPurchasesCountByDay();

    const reference_code = await codeGenerator("PURCHASE", count, 4);

    ErrorHandler.handleRender(req, res, "modules/purchases/new-purchase", {
      newPurchaseForm: formPurchase({ reference_code }),
      addPurchaseComponentForm: formAddPurchaseComponent({ components }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

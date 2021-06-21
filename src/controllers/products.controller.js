"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const { formProduct } = require("../utils/helpers/forms");

const Products = require("../models/products.model");

const Components = require("../models/components.model");

exports.renderProducts = async (req, res, next) => {
  try {
    const products = await Products.getAllProducts();
    const components = await Components.getAllComponents();

    ErrorHandler.handleRender(req, res, "modules/products/products", {
      products,
      newProductForm: formProduct({ components }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderProduct = async (req, res, next) => {
  try {
    const product = await Products.getOneProduct(req.params.id);

    ErrorHandler.handleRender(req, res, "modules/products/product", {
      product,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    await Products.createProduct(req.body);

    req.flash("success", "The product has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    await Products.updateProduct(req.params.id, req.body);

    req.flash("success", "The product has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Products.deleteProduct(req.params.id);

    req.flash("success", "The product has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

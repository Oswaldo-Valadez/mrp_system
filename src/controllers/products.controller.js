"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  formProduct,
  formAddProductComponent,
} = require("../utils/helpers/forms");
const { codeGenerator } = require("../utils/helpers/code-gen");

const Products = require("../models/products.model");

const Components = require("../models/components.model");

exports.renderProducts = async (req, res, next) => {
  try {
    const products = await Products.getAllProducts();

    ErrorHandler.handleRender(req, res, "modules/products/products", {
      products,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderProduct = async (req, res, next) => {
  try {
    const { product, spreadsheet } = await Products.getOneProduct(
      req.params.id
    );

    ErrorHandler.handleRender(req, res, "modules/products/product", {
      product,
      spreadsheet,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { insertId } = await Products.createProduct(req.body);

    req.flash("success", "The product has been created successfully");
    res.redirect(`products/${insertId}`);
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

exports.renderCreateProduct = async (req, res, next) => {
  try {
    const components = await Components.getAllComponents();

    const count = await Products.getProductsCount();

    const serial_number = await codeGenerator("SN", count, 5);

    ErrorHandler.handleRender(req, res, "modules/products/new-product", {
      newProductForm: formProduct({ serial_number }),
      addProductComponentForm: formAddProductComponent({ components }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const { formSale, formAddSaleProduct } = require("../utils/helpers/forms");

const Sales = require("../models/sales.model");
const Products = require("../models/products.model");

exports.renderSales = async (req, res, next) => {
  try {
    const sales = await Sales.getAllSales();

    ErrorHandler.handleRender(req, res, "modules/sales/sales", { sales });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderSale = async (req, res, next) => {
  try {
    const { sale, sale_products } = await Sales.getOneSale(req.params.id);

    console.log(sale, sale_products)

    ErrorHandler.handleRender(req, res, "modules/sales/sale", {
      sale,
      sale_products,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createSale = async (req, res, next) => {
  try {
    const { insertId } = await Sales.createSale(req.body);

    req.flash("success", "The sale has been created successfully");
    res.redirect(`sales/${insertId}`);
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateSale = async (req, res, next) => {
  try {
    await Sales.updateSale(req.params.id, req.body);

    req.flash("success", "The sale has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteSale = async (req, res, next) => {
  try {
    await Sales.deleteSale(req.params.id);

    req.flash("success", "The sale has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderCreateSale = async (req, res, next) => {
  try {
    const products = await Products.getAllProducts();

    ErrorHandler.handleRender(req, res, "modules/sales/new-sale", {
      newSaleForm: formSale(),
      addSaleProductForm: formAddSaleProduct({ products }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

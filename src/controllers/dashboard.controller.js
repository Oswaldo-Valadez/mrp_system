"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Measurementunits = require("../models/measurementunits.model");
const Components = require("../models/components.model");
const Products = require("../models/products.model");
const Purchases = require("../models/purchases.model");
const Sales = require("../models/sales.model");

exports.renderDashboard = async (req, res, next) => {
  try {
    const count_brands = await Brands.getBrandsCount();
    const count_categories = await Categories.getCategoriesCount();
    const count_measurementunits =
      await Measurementunits.getMeasurementunitsCount();

    const count_products = await Products.getProductsCount();
    const count_components = await Components.getComponentsCount();
    const count_purchases = await Purchases.getPurchasesCount();
    const count_sales = await Sales.getSalesCount();

    const count_catalogs =
      count_brands + count_categories + count_measurementunits;

    ErrorHandler.handleRender(req, res, "dashboard", {
      count_catalogs,
      count_components,
      count_products,
      count_purchases,
      count_sales,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

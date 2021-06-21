"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Measurementunits = require("../models/measurementunits.model");
const Materials = require("../models/materials.model");
const Products = require("../models/products.model");

exports.renderDashboard = async (req, res, next) => {
  try {
    const count_brands = await Brands.getBrandsCount();
    const count_categories = await Categories.getCategoriesCount();
    const count_measurementunits =
      await Measurementunits.getMeasurementunitsCount();
    const count_products = await Products.getProductsCount();

    const count_materials = await Materials.getMaterialsCount();

    const count_catalogs =
      count_brands + count_categories + count_measurementunits;

    ErrorHandler.handleRender(req, res, "dashboard", {
      count_catalogs,
      count_materials,
      count_products,
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Subcategories = require("../models/subcategories.model");
const Measurementunits = require("../models/measurementunits.model");
const Materials = require("../models/materials.model");

exports.renderDashboard = async (req, res, next) => {
  try {
    const brands = await Brands.getBrandsCount();
    const categories = await Categories.getCategoriesCount();
    const subcategories = await Subcategories.getSubcategoriesCount();
    const measurementunits = await Measurementunits.getMeasurementunitsCount();

    const total_materials = await Materials.getMaterialsCount();

    const total_catalogs =
      brands + categories + subcategories + measurementunits;

    console.log(total_catalogs);
    res.render("dashboard", { total_catalogs, total_materials });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

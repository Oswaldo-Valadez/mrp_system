"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  formBrand,
  formCategory,
  formMeasurementunit,
} = require("../utils/helpers/forms");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Measurementunits = require("../models/measurementunits.model");

exports.renderCatalogs = async (req, res, next) => {
  try {
    const brands = await Brands.getAllBrands();
    const categories = await Categories.getAllCategories();
    const measurement_units = await Measurementunits.getAllMeasurementunits();

    ErrorHandler.handleRender(req, res, "modules/catalogs/catalogs", {
      brands,
      categories,
      measurement_units,
      newBrandForm: formBrand(),
      newCategoryForm: formCategory(),
      newMeasurementunitForm: formMeasurementunit(),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  formBrand,
  formCategory,
  formSubcategory,
  formMeasurementunit,
} = require("../utils/helpers/forms");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Subcategories = require("../models/subcategories.model");
const Measurementunits = require("../models/measurementunits.model");

exports.renderCatalogs = async (req, res, next) => {
  try {
    const brands = await Brands.getAllBrands();
    const categories = await Categories.getAllCategories();
    const subcategories = await Subcategories.getAllSubcategories();
    const measurement_units = await Measurementunits.getAllMeasurementunits();

    ErrorHandler.handleRender(req, res, "modules/catalogs/catalogs", {
      brands,
      categories,
      subcategories,
      measurement_units,
      newBrandForm: formBrand(),
      newCategoryForm: formCategory(),
      newSubcategoryForm: formSubcategory({ categories }),
      newMeasurementunitForm: formMeasurementunit(),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

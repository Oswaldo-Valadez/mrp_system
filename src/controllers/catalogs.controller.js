"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const {
  newBrandForm,
  newCategoryForm,
  newSubcategoryForm,
  newMeasurementunitForm,
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

    res.render("modules/catalogs/catalogs", {
      brands,
      categories,
      subcategories,
      measurement_units,
      newBrandForm: newBrandForm(),
      newCategoryForm: newCategoryForm(),
      newSubcategoryForm: newSubcategoryForm({ categories }),
      newMeasurementunitForm: newMeasurementunitForm(),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

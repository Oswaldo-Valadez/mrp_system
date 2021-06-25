"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const { formComponent } = require("../utils/helpers/forms");

const Components = require("../models/components.model");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Measurementunits = require("../models/measurementunits.model");

exports.renderComponents = async (req, res, next) => {
  try {
    const components = await Components.getAllComponents();
    const brands = await Brands.getAllBrands();
    const categories = await Categories.getAllCategories();
    const measurement_units = await Measurementunits.getAllMeasurementunits();

    res.render("modules/inventory/inventory", {
      components,
      newComponentForm: formComponent({
        brands,
        categories,
        measurement_units,
      }),
      editComponentForm: formComponent({
        brands,
        categories,
        measurement_units,
        fields: { stock: true },
      }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderComponent = async (req, res, next) => {
  try {
    const component = await Components.getOneComponent(req.params.id);

    res.render("modules/components/component", { component });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createComponent = async (req, res, next) => {
  try {
    await Components.createComponent(req.body);

    req.flash("success", "The component has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateComponent = async (req, res, next) => {
  try {
    await Components.updateComponent(req.params.id, req.body);

    req.flash("success", "The component has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteComponent = async (req, res, next) => {
  try {
    await Components.deleteComponent(req.params.id);

    req.flash("success", "The component has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

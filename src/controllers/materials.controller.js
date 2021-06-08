"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");
const { newMaterialForm } = require("../utils/helpers/forms");

const Materials = require("../models/materials.model");

const Brands = require("../models/brands.model");
const Categories = require("../models/categories.model");
const Subcategories = require("../models/subcategories.model");
const Measurementunits = require("../models/measurementunits.model");

exports.renderMaterials = async (req, res, next) => {
  try {
    const materials = await Materials.getAllMaterials();
    const brands = await Brands.getAllBrands();
    const categories = await Categories.getAllCategories();
    const subcategories = await Subcategories.getAllSubcategories();
    const measurement_units = await Measurementunits.getAllMeasurementunits();

    res.render("modules/materials/materials", {
      materials,
      newMaterialForm: newMaterialForm({
        brands,
        categories,
        measurement_units,
      }),
      editMaterialForm: newMaterialForm({
        brands,
        categories,
        subcategories,
        measurement_units,
      }),
    });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderMaterial = async (req, res, next) => {
  try {
    const material = await Materials.getOneMaterial(req.params.id);

    res.render("modules/materials/material", { material });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createMaterial = async (req, res, next) => {
  try {
    await Materials.createMaterial(req.body);

    req.flash("success", "The material has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateMaterial = async (req, res, next) => {
  try {
    await Materials.updateMaterial(req.params.id, req.body);

    req.flash("success", "The material has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteMaterial = async (req, res, next) => {
  try {
    await Materials.deleteMaterial(req.params.id);

    req.flash("success", "The material has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

"use strict";

const Categories = require("../models/categories.model");

exports.renderCategories = async (req, res, next) => {
    const categories = await Categories.getAllCategories();

    res.render("modules/categories/categories", { categories });
};

exports.renderCategory = async (req, res, next) => {
    const category = await Categories.getOneCategory(req.params.id);

    res.render("modules/categories/category", { category });
};

exports.createCategory = async (req, res, next) => {
    await Categories.createCategory(req.body);

    res.redirect("back");
};

exports.updateCategory = async (req, res, next) => {
    await Categories.updateCategory(req.params.id, req.body);

    res.redirect("back");
};

exports.deleteCategory = async (req, res, next) => {
    await Categories.deleteCategory(req.params.id);

    res.redirect("back");
};

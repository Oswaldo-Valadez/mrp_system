"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const Orders = require("../models/orders.model");

exports.renderOrders = async (req, res, next) => {
  try {
    const orders = await Orders.getAllOrders();

    res.render("modules/orders/orders", { orders });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.renderOrder = async (req, res, next) => {
  try {
    const order = await Orders.getOneOrder(req.params.id);

    res.render("modules/orders/order", { order });
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    await Orders.createOrder(req.body);

    req.flash("success", "The order has been created successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    await Orders.updateOrder(req.params.id, req.body);

    req.flash("success", "The order has been updated successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    await Orders.deleteOrder(req.params.id);

    req.flash("success", "The order has been deleted successfully");
    res.redirect("back");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

exports.renderDashboard = async (req, res, next) => {
  try {
    res.render("dashboard");
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

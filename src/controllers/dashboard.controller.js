"use strict";

exports.renderDashboard = async (req, res, next) => {
  res.render("starter", { items: [1, 2, 3, 4] });
};

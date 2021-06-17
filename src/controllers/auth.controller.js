"use strict";

const ErrorHandler = require("../utils/helpers/error-handler");

const passport = require("passport");

exports.renderSignIn = (req, res, next) => {
  ErrorHandler.handleRender(req, res, "signin", { layout: "layouts/main" });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/dashboard",
    failureRedirect: "/signin",
    failureFlash: true,
  })(req, res, next);
};

exports.signout = (req, res, next) => {
  req.logOut();
  res.redirect("/signin");
};

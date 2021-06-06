"use strict";

require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const MySQLStore = require("express-mysql-session");
const flash = require("connect-flash");
const morgan = require("morgan");

const path = require("path");
const passport = require("passport");

const { database } = require("./src/utils/database/keys");
const router = require("./src/routes");

const i18n = require("i18n");

// Init app
const app = express();

// Init i18n
i18n.configure({
  locales: ["es"],
  directory: path.join(__dirname, "/public/locales"),
  defaultLocale: "es",
});
app.use(i18n.init);

// Passport middelwares
require("./src/utils/middlewares/passport");

// Create sessions in db
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

// Set global variables
app.use((req, res, next) => {
  app.locals.success = req.flash('success')[0];
  app.locals.error = req.flash('error')[0];
  app.locals.successSignin = req.flash('successSignin')[0];

  app.locals.user = req.user;
 
  if (app.locals.dark_mode === undefined) {
    app.locals.dark_mode = true;
  } else if (req.path == "/toggle-mode") {
    app.locals.dark_mode = !app.locals.dark_mode;
  }
 
  next();
});

// Toggle mode route
app.get("/toggle-mode", (req, res) => {
  res.redirect("back");
});

// Template engine setup
app.set("view engine", "ejs");
app.set("layout extractScripts", true);
app.set("view options", { openDelimiter: "{{", closeDelimiter: "}}" });
app.set("views", path.join(__dirname, "./src/views"));

// Template engine layout
app.use(expressLayouts);
app.set("layout", "layouts/dashboard");

// Activate morgan if Development mode
// if (process.env.NODE_ENV === "D") app.use(morgan("dev"));

// Router
app.use(router);

// Makes the admin-lte (package) dependency on node_modules static and accessible
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte"))
);

// Makes PUBLIC static and accessible
app.use("/public", express.static(path.join(__dirname, "/public")));

// Handle error 404
app.use(function (req, res, next) {
  if (req.user) {
    res.status(404).render("error404");
  } else {
    res.status(404).render("error404", { layout: "layouts/main" });
  }
  next();
});

// Set LISTEN PORT
app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});

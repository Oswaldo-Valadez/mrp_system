exports.handleError = (req, res, error) => {
  if (process.env.SHOW_DETAILED_ERROR !== "Y") {
    req.flash("error", "Something went wrong");
    res.redirect("back");
  } else res.render("error500", { error500: error });
};

exports.handleError = (req, res, error) => {
  if (process.env.SHOW_DETAILED_ERROR !== "Y") {
    console.log(error);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  } else {
    console.log(error);
    res.render("error500", { error500: error });
  }
};

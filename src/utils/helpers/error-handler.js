exports.handleError = (req, res, error) => {
  console.log(error);
  if (process.env.SHOW_DETAILED_ERROR !== "Y") {
    req.flash("error", "Something went wrong");
    res.redirect("back");
  } else {
    res.render("error500", { error500: error });
  }
};

exports.handleJSONError = (req, res, error) => {
  console.log(error);

  res.status(500).send();
};

exports.handleRender = (req, res, view_route, data) => {
  res.render(view_route, data, (error, html) => {
    if (error) {
      console.log(error);
      if (process.env.SHOW_DETAILED_ERROR !== "Y") {
        res.render("error400", { error400: null });
      } else {
        res.render("error400", { error400: error });
      }
    } else {
      res.send(html);
    }
  });
};

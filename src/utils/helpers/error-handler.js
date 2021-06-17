exports.handleError = (req, res, error) => {
  if (process.env.SHOW_DETAILED_ERROR !== "Y") {
    console.log(error);
    req.flash("error", "Something went wrong");
    res.redirect(500, "back");
  } else {
    console.log(error);
    res.render("error500", { error500: error });
  }
};

exports.handleJSONError = (req, res, error) => {
  console.log(error);

  res.status(500).send();
};

exports.handleRender = (req, res, view_route, data) => {
  res.render(view_route, data, (err, html) => {
    if (err) {
      res.render("error404");
    } else {
      res.send(html);
    }
  });
};

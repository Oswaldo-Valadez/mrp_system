$("#modalCreate [name='id_category']").on("change", function (event) {
  var id_category = $(this).val();
  $.ajax({
    method: "get",
    url: "/dashboard/catalogs/subcategories/json/categories/" + id_category,
  })
    .done(function ({ subcategories }) {
      $("#modalCreate [name='id_subcategory']").html(
        `<option value="" selected disabled hidden>${select_here_i18n}</option>`
      );
      subcategories.forEach((row) => {
        $("#modalCreate [name='id_subcategory']").removeAttr("disabled");
        $("#modalCreate [name='id_subcategory']").append(
          `<option value=${row.id_subcategory}>${row.name}</option>`
        );
      });
    })
    .fail(function (error) {
      console.log(error);
      location.reload(true);
    });
});

$("#modalEdit [name='id_category']").on("change", function (event) {
  var id_category = $(this).val();
  $.ajax({
    method: "get",
    url: "/dashboard/catalogs/subcategories/json/categories/" + id_category,
  })
    .done(function ({ subcategories }) {
      $("#modalEdit [name='id_subcategory']").html(
        `<option value="" selected disabled hidden>${select_here_i18n}</option>`
      );
      subcategories.forEach((row) => {
        $("#modalEdit [name='id_subcategory']").removeAttr("disabled");
        $("#modalEdit [name='id_subcategory']").append(
          `<option value=${row.id_subcategory}>${row.name}</option>`
        );
      });
    })
    .fail(function (error) {
      console.log(error);
      location.reload(true);
    });
});

$("#modalEdit").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);

  var row = button.data("row");

  $.ajax({
    method: "get",
    url: "/dashboard/catalogs/subcategories/json/categories/" + row.id_category,
  })
    .done(function ({ subcategories }) {
      $("#modalEdit [name='id_subcategory']").html(
        `<option value="" selected disabled hidden>${select_here_i18n}</option>`
      );
      subcategories.forEach((row) => {
        $("#modalEdit [name='id_subcategory']").attr("disabled", true);
        $("#modalEdit [name='id_subcategory']").append(
          `<option value=${row.id_subcategory}>${row.name}</option>`
        );
        $("#modalEdit [name='id_subcategory']")
          .val(row.id_subcategory)
          .trigger("change");
      });
    })
    .fail(function (error) {
      console.log(error);
      location.reload(true);
    });
});

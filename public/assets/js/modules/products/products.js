$("#modalCreateProduct [name='id_material[]']").on("change", function (event) {
  var id_material = $(this).val()[0];
  var text = $(this).text()[0];

  var duplication = new Option(text, id_material);

  console.log(duplication)

  $(this).append(duplication);
});

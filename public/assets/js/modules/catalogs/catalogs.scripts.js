const openModal = getURLQuery()["openModal"];
switch (openModal) {
  case "brand":
    $("#modalCreateBrand").modal("toggle");
    break;
  case "category":
    $("#modalCreateCategory").modal("toggle");
    break;
  case "subcategory":
    $("#modalCreateSubcategory").modal("toggle");
    break;
  case "measurementUnit":
    $("#modalCreateMeasurementunit").modal("toggle");
    break;
  default:
    break;
}

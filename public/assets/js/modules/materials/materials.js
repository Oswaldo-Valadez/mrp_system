const openModal = getURLQuery()["openModal"];
switch (openModal) {
  case "material":
    $("#modalCreate").modal("toggle");
    break;
  default:
    break;
}

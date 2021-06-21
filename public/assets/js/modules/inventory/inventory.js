const openModal = getURLQuery()["openModal"];
switch (openModal) {
  case "component":
    $("#modalCreate").modal("toggle");
    break;
  default:
    break;
}

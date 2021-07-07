$("#modalAddComponentPurchaseForm").on("submit", function (e) {
  e.preventDefault();

  const component = {};

  const modal = $("#modalAddComponentPurchase");

  $(this)
    .serializeArray()
    .forEach((element) => {
      component[element.name] = element.value;
    });

  component["temp_description"] = modal
    .find("select[name='id_component'] option:selected")
    .text()
    .trim();

  $("#tb-purchase-components").append(`
      <tr>
          <td>
              <input
                  type="number"
                  class="form-control"
                  name="id_component[]"
                  value="${component.id_component}"
                  readonly="readonly"
              />
          </td>
          <td>${component.temp_description}</td>
          <td>
              <input
                  type="number"
                  class="form-control"
                  name="quantity[]"
                  value="${component.quantity}"
                  readonly="readonly"
              />
          </td>
      </tr>
    `);

  $(this).trigger("reset");

  modal.modal("hide");
});

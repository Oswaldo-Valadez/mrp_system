$("#modalAddSaleProductForm").on("submit", function (e) {
  e.preventDefault();

  const component = {};

  const modal = $("#modalAddSaleProduct");

  $(this)
    .serializeArray()
    .forEach((element) => {
      component[element.name] = element.value;
    });

  component["temp_description"] = modal
    .find("select[name='id_product'] option:selected")
    .text()
    .trim();

  $("#tb-sale-products").append(`
      <tr>
          <td>
              <input
                  type="number"
                  class="form-control"
                  name="id_product[]"
                  value="${component.id_product}"
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

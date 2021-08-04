"use strict";

const { pool } = require("../utils/database/query");
const { getAllSpreadsheetByProduct } = require("./spreadsheet.model");

exports.createSaleProduct = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "sales_products",
    values,
  ]);

  // Restar stock del producto
  await pool.query('UPDATE products SET stock = stock - ? WHERE Id_product = ?', [
    values.quantity, values.id_product
  ]);

  // Restar estock de los componentes que conforman ese producto
  const spreadsheet =  await getAllSpreadsheetByProduct(values.id_product);
  spreadsheet.map(async (component) => {
    await pool.query('UPDATE components set stock = stock - ? WHERE id_component = ?', [
      component.quantity, component.id_component
    ])
  });

  return res;
};

exports.updateSaleProduct = async (id_sale, id_product, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ? AND ?`, [
    "sales_products",
    values,
    { id_sale },
    { id_product },
  ]);
  return res;
};

exports.deleteSaleProduct = async (id_sale, id_product) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ? AND ?`, [
    "sales_products",
    { id_sale },
    { id_product },
  ]);
  return res;
};

exports.getAllProductsBySale = async (id_sale) => {
  const res = await pool.query(
    `
      SELECT * FROM ??
          INNER JOIN ?? p USING(id_product)
      WHERE ?
      `,
    ["sales_products", "products", { id_sale }]
  );
  return res;
};

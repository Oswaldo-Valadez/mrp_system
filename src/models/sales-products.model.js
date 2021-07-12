"use strict";

const { pool } = require("../utils/database/query");

exports.createSaleProduct = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "sales_products",
    values,
  ]);
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

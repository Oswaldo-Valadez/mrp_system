"use strict";

const { pool } = require("../utils/database/query");

const SalesProducts = require("../models/sales-products.model");

exports.getSalesCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["sales"])
  )[0].count;
  return count;
};

exports.getAllSales = async () => {
  const sales = await pool.query(`SELECT * FROM ??`, ["sales"]);
  return sales;
};

exports.getOneSale = async (id_sale) => {
  const sale = (
    await pool.query(
      `SELECT *,
      DATE_FORMAT(sales.creation_date, "%Y-%m-%d") AS creation_date
    FROM ?? WHERE ?`,
      ["sales", { id_sale }]
    )
  )[0];

  const sale_products = await SalesProducts.getAllProductsBySale(id_sale);

  return { sale, sale_products };
};

exports.createSale = async (values) => {
  const { reference_code, creation_date, details, id_product, quantity } =
    values;

  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "sales",
    { reference_code, creation_date, details },
  ]);

  const { insertId } = res;

  if (id_product) {
    for (let i = 0; i < id_product.length; i++) {
      const sale_product = {
        id_sale: insertId,
        id_product: id_product[i],
        quantity: quantity[i],
      };
      await SalesProducts.createSaleProduct(sale_product);
    }
  }

  return res;
};

exports.updateSale = async (id_sale, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "sales",
    values,
    { id_sale },
  ]);
  return res;
};

exports.deleteSale = async (id_sale) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "sales",
    { id_sale },
  ]);
  return res;
};

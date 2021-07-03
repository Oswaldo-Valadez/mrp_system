"use strict";

const { pool } = require("../utils/database/query");

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
  const sale = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "sales",
    { id_sale },
  ])[0];
  return sale;
};

exports.createSale = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["sales", values]);
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

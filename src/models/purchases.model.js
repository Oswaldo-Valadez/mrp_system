"use strict";

const { pool } = require("../utils/database/query");

exports.getPurchasesCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["purchases"])
  )[0].count;
  return count;
};

exports.getAllPurchases = async () => {
  const purchases = await pool.query(`SELECT * FROM ??`, ["purchases"]);
  return purchases;
};

exports.getOnePurchase = async (id_purchase) => {
  const purchase = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "purchases",
    { id_purchase },
  ])[0];
  return purchase;
};

exports.createPurchase = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["purchases", values]);
  return res;
};

exports.updatePurchase = async (id_purchase, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "purchases",
    values,
    { id_purchase },
  ]);
  return res;
};

exports.deletePurchase = async (id_purchase) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "purchases",
    { id_purchase },
  ]);
  return res;
};

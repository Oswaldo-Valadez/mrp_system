"use strict";

const { pool } = require("../utils/database/query");

exports.getPurchasesComponentsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, [
      "purchases_components",
    ])
  )[0].count;
  return count;
};

exports.getAllPurchasesComponents = async () => {
  const purchases_components = await pool.query(`SELECT * FROM ??`, [
    "purchases_components",
  ]);
  return purchases_components;
};

exports.getOnePurchaseComponent = async (id_purchases_component) => {
  const purchases_component = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "purchases_components",
    { id_purchases_component },
  ])[0];
  return purchases_component;
};

exports.createPurchaseComponent = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "purchases_components",
    values,
  ]);
  return res;
};

exports.updatePurchaseComponent = async (id_purchase, id_component, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ? AND ?`, [
    "purchases_components",
    values,
    { id_purchase },
    { id_component },
  ]);
  return res;
};

exports.deletePurchaseComponent = async (id_purchase, id_component) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ? AND ?`, [
    "purchases_components",
    { id_purchase },
    { id_component },
  ]);
  return res;
};

exports.getAllPurchasesComponentsByPurchase = async (id_purchase) => {
  const res = await pool.query(
    `
      SELECT * FROM ??
          INNER JOIN ?? c USING(id_component)
      WHERE ?
      `,
    ["purchases_components", "components", { id_purchase }]
  );
  return res;
};

"use strict";

const { pool } = require("../utils/database/query");

exports.createPurchaseComponent = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "purchases_components",
    values,
  ]);

  await pool.query('UPDATE components SET stock = stock + ? WHERE id_component = ?', [
    values.quantity, values.id_component
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

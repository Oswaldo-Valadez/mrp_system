"use strict";

const { pool } = require("../utils/database/query");

const PurchasesComponents = require("./purchases-components.model");

exports.getPurchasesCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["purchases"])
  )[0].count;
  return count;
};

exports.getPurchasesCountByDay = async () => {
  const count = (
    await pool.query(
      `SELECT COUNT(*) AS count
      FROM ??
      WHERE creation_date = CURDATE()`,
      ["purchases"]
    )
  )[0].count;
  return count;
};

exports.getAllPurchases = async () => {
  const purchases = await pool.query(
    `SELECT *,
      DATE_FORMAT(purchases.creation_date, "%Y-%m-%d") AS creation_date
    FROM ??`,
    ["purchases"]
  );
  return purchases;
};

exports.getOnePurchase = async (id_purchase) => {
  const purchase = (
    await pool.query(
      `SELECT *,
        DATE_FORMAT(purchases.creation_date, "%Y-%m-%d") AS creation_date
      FROM ?? WHERE ?`,
      ["purchases", { id_purchase }]
    )
  )[0];

  const purchase_components =
    await PurchasesComponents.getAllPurchasesComponentsByPurchase(id_purchase);

  return { purchase, purchase_components };
};

exports.createPurchase = async (values) => {
  const { reference_code, creation_date, details, id_component, quantity } =
    values;

  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "purchases",
    { reference_code, creation_date, details },
  ]);

  const { insertId } = res;

  if (id_component) {
    for (let i = 0; i < id_component.length; i++) {
      const purchase_component = {
        id_purchase: insertId,
        id_component: id_component[i],
        quantity: quantity[i],
      };
      await PurchasesComponents.createPurchaseComponent(purchase_component);
    }
  }

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

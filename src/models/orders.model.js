"use strict";

const { pool } = require("../utils/database/query");

exports.getOrdersCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["orders"])
  )[0].count;
  return count;
};

exports.getAllOrders = async () => {
  const orders = await pool.query(`SELECT * FROM ??`, ["orders"]);
  return orders;
};

exports.getOneOrder = async (id_order) => {
  const order = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "orders",
    { id_order },
  ])[0];
  return order;
};

exports.createOrder = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["orders", values]);
  return res;
};

exports.updateOrder = async (id_order, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "orders",
    values,
    { id_order },
  ]);
  return res;
};

exports.deleteOrder = async (id_order) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "orders",
    { id_order },
  ]);
  return res;
};

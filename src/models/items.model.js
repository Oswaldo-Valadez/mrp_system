"use strict";

const { pool, nestTablesQuery } = require("../utils/database/query");

exports.getAllItems = async () => {
  const items = await nestTablesQuery(
    `SELECT * FROM ?? INNER JOIN ?? USING(??)`,
    ["items", "categories", "id_category"]
  );
  return items;
};

exports.getOneItem = async (id_item) => {
  const item = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "items",
    { id_item },
  ])[0];
  return item;
};

exports.createItem = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["items", values]);
  return res;
};

exports.updateItem = async (id_item, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "items",
    values,
    { id_item },
  ]);
  return res;
};

exports.deleteItem = async (id_item) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "items",
    { id_item },
  ]);
  return res;
};

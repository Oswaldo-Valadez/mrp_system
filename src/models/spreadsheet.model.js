"use strict";

const { pool } = require("../utils/database/query");

exports.createSpreadsheet = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["spreadsheet", values]);
  return res;
};

exports.updateSpreadsheet = async (id_component, id_product, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ? AND ?`, [
    "spreadsheet",
    values,
    { id_component },
    { id_product },
  ]);
  return res;
};

exports.deleteSpreadsheet = async (id_component, id_product) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ? AND ?`, [
    "spreadsheet",
    { id_component },
    { id_product },
  ]);
  return res;
};

exports.getAllSpreadsheetByProduct = async (id_product) => {
  const res = await pool.query(
    `
    SELECT * FROM ??
        INNER JOIN ?? c USING(id_component)
    WHERE ?
    `,
    ["spreadsheet", "components", { id_product }]
  );
  return res;
};

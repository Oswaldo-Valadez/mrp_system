"use strict";

const { pool } = require("../utils/database/query");

exports.getSpreadsheetCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["spreadsheet"])
  )[0].count;
  return count;
};

exports.getAllSpreadsheet = async () => {
  const spreadsheet = await pool.query(`SELECT * FROM ??`, ["spreadsheet"]);
  return spreadsheet;
};

exports.getOneSpreadsheet = async (id_spreadsheet) => {
  const spreadsheet = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "spreadsheet",
    { id_spreadsheet },
  ])[0];
  return spreadsheet;
};

exports.createSpreadsheet = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["spreadsheet", values]);
  return res;
};

exports.updateSpreadsheet = async (id_spreadsheet, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "spreadsheet",
    values,
    { id_spreadsheet },
  ]);
  return res;
};

exports.deleteSpreadsheet = async (id_spreadsheet) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "spreadsheet",
    { id_spreadsheet },
  ]);
  return res;
};

exports.getAllSpreadsheetByProduct = async (id_product) => {
  const spreadsheet = await pool.query(
    `
    SELECT * FROM ??
        INNER JOIN ?? c USING(id_component)
    WHERE ?
    `,
    ["spreadsheet", "components", { id_product }]
  );
  return spreadsheet;
};

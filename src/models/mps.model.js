"use strict";

const { pool } = require("../utils/database/query");

exports.getMPSCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["mps"])
  )[0].count;
  return count;
};

exports.getAllMPS = async () => {
  const mps = await pool.query(`SELECT * FROM ??`, ["mps"]);
  return mps;
};

exports.getOneMPS = async (id_mps) => {
  const mps = (
    await pool.query(`SELECT * FROM ?? WHERE ?`, ["mps", { id_mps }])
  )[0];
  return mps;
};

exports.createMPS = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["mps", values]);
  return res;
};

exports.updateMPS = async (id_mps, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "mps",
    values,
    { id_mps },
  ]);
  return res;
};

exports.deleteMPS = async (id_mps) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, ["mps", { id_mps }]);
  return res;
};

"use strict";

const { pool } = require("../utils/database/query");

exports.getMPSPeriodsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["mps_periods"])
  )[0].count;
  return count;
};

exports.getAllMPSPeriods = async () => {
  const mps_periods = await pool.query(`SELECT * FROM ??`, ["mps_periods"]);
  return mps_periods;
};

exports.getOneMPSPeriod = async (id_mps_period) => {
  const mps_period = (
    await pool.query(`SELECT * FROM ?? WHERE ?`, [
      "mps_periods",
      { id_mps_period },
    ])
  )[0];
  return mps_period;
};

exports.createMPSPeriod = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["mps_periods", values]);
  return res;
};

exports.updateMPSPeriod = async (id_mps_period, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "mps_periods",
    values,
    { id_mps_period },
  ]);
  return res;
};

exports.deleteMPSPeriod = async (id_mps_period) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "mps_periods",
    { id_mps_period },
  ]);
  return res;
};

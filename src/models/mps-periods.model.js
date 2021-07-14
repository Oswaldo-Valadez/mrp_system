"use strict";

const { pool } = require("../utils/database/query");

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

exports.getAllMPSPeriodsByMPS = async (id_component, year) => {
  const mps_period = (
    await pool.query(`SELECT * FROM ?? WHERE ? AND`, [
      "mps_periods",
      { id_component },
      { year },
    ])
  )[0];
  return mps_period;
};

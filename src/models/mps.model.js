"use strict";

const { pool } = require("../utils/database/query");

const MPSPeriods = require("./mps-periods.model");

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

exports.getAllMPSByComponent = async (id_component) => {
  const mps = await pool.query(`SELECT year FROM ?? WHERE ?`, [
    "mps",
    { id_component },
  ]);
  return mps;
};

exports.getOneMPS = async (id_component, year) => {
  const mps = (
    await pool.query(`SELECT * FROM ?? WHERE ? AND ?`, [
      "mps",
      { id_component },
      { year },
    ])
  )[0];

  const { id_mps } = mps;

  const mps_periods = await MPSPeriods.getAllMPSPeriodsByMPS(id_mps);

  return { mps, mps_periods };
};

exports.createMPS = async (values) => {
  const { id_component } = values;

  const res = await pool.query(
    `INSERT INTO ?? (initial_stock, year, id_component)
    SELECT stock, YEAR(CURRENT_DATE()), id_component
    FROM ?? WHERE ?`,
    ["mps", "components", { id_component }]
  );

  const { insertId: id_mps } = res;

  const res_mps_period = await MPSPeriods.createFirstMPSPeriod(id_mps);

  return { res, res_mps_period };
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

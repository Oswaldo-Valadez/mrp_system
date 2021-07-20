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

exports.createFirstMPSPeriod = async (id_mps) => {
  const values = {
    month: new Date().getMonth(),
    id_mps,
  };

  const res = await pool.query(`INSERT INTO ?? SET ?`, ["mps_periods", values]);
  return res;
};

exports.createNextMPSPeriod = async (id_mps) => {
  const { id_mps_period: id_prev_mps_period, month: last_month } = (
    await pool.query(
      `SELECT * FROM ?? WHERE ? AND id_next_mps_period IS NULL`,
      ["mps_periods", { id_mps }]
    )
  )[0];

  const next_period = { id_mps, month: last_month + 1, id_prev_mps_period };

  if (last_month < 12) {
    const { insertId: id_next_mps_period } = await pool.query(
      `INSERT INTO ?? SET ?`,
      ["mps_periods", next_period]
    );

    const last_period = { id_next_mps_period };

    await pool.query(`UPDATE ?? SET ? WHERE ?`, [
      "mps_periods",
      last_period,
      {
        id_mps_period: id_prev_mps_period,
      },
    ]);
  }

  return;
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

exports.getAllMPSPeriodsByMPS = async (id_mps) => {
  const mps_period = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "mps_periods",
    { id_mps },
  ]);
  return mps_period;
};

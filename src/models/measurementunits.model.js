"use strict";

const { pool } = require("../utils/database/query");

exports.getMeasurementunitsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["measurement_units"])
  )[0].count;
  return count;
};

exports.getAllMeasurementunits = async () => {
  const measurementunits = await pool.query(`SELECT * FROM ?? ORDER BY pin_up DESC, name ASC`, [
    "measurement_units",
  ]);
  return measurementunits;
};

exports.getOneMeasurementunit = async (id_measurement_unit) => {
  const measurementunit = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "measurement_units",
    { id_measurement_unit },
  ])[0];
  return measurementunit;
};

exports.createMeasurementunit = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "measurement_units",
    values,
  ]);
  return res;
};

exports.updateMeasurementunit = async (id_measurement_unit, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "measurement_units",
    values,
    { id_measurement_unit },
  ]);
  return res;
};

exports.deleteMeasurementunit = async (id_measurement_unit) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "measurement_units",
    { id_measurement_unit },
  ]);
  return res;
};

exports.pinupMeasurementunit = async (id_measurement_unit, pin_up) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "measurement_units",
    { pin_up },
    { id_measurement_unit },
  ]);
  return res;
};

"use strict";

const { pool } = require("../utils/database/query");

exports.getBrandsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["brands"])
  )[0].count;
  return count;
};

exports.getAllBrands = async () => {
  const brands = await pool.query(`SELECT * FROM ?? ORDER BY pin_up DESC`, ["brands"]);
  return brands;
};

exports.getOneBrand = async (id_brand) => {
  const brand = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "brands",
    { id_brand },
  ])[0];
  return brand;
};

exports.createBrand = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["brands", values]);
  return res;
};

exports.updateBrand = async (id_brand, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "brands",
    values,
    { id_brand },
  ]);
  return res;
};

exports.deleteBrand = async (id_brand) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "brands",
    { id_brand },
  ]);
  return res;
};

exports.pinupBrand = async (id_brand, pin_up) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "brands",
    { pin_up },
    { id_brand },
  ]);
  console.log(res);
  return res;
};
